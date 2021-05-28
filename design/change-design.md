# Not good

## Make changeIdA and changeIdA_revoked increase the complexity
1. It does not work fine with the concurrent scenario
2. When insert changeIdA and changeIdA_revoke at same time, we need to use insert select tech to make sure they don't get create together
3. Insert select will introduce the possibility of dead lock (even though low possibility and can be handled by retry) but performance is not good
4. 无法和空写入兼容
# Change handle in system
- trying to make changeA (changeId=changeA) to system

| changeA exist | changeA_revoked exist | action                                                      |
|:--------------|:----------------------|:------------------------------------------------------------|
| yes           | no                    | ignore this change, return 200 with result                  |
| yes           | yes                   | ignore this change, return 200 with no result               |
| no            | yes                   | ignore this change, save changeA, return 200 with no result |
| no            | no                    | make this change, save changeA                              |
# Revoke Change handle in system
- trying to revoke changeA (changeId=changeA) to system
- when no, no, condition, if save changeA & changeA_revoke, then if another changeA get persist first, this will fail but will return 200(DataIntegrityViolationException will return 200 now),

| changeA exist | changeA_revoked exist | action                                                                                                   |
|:--------------|:----------------------|:---------------------------------------------------------------------------------------------------------|
| yes           | no                    | revoke this change, save changeA_revoked  , return 200                                                   |
| yes           | yes                   | ignore this change, return 200 with no result                                                            |
| no            | yes                   | ignore this change, return 200 with no result                                                            |
| no            | no                    | do empty revoke, save changeA_revoked (not save changeA bcz concurrent issue), return 200 with no result |

# Saga中的两种事件类型
- 正向事件
- 逆向事件（补偿事件）

## 增减减少值的Saga补偿模型－例如库存增减与减少
- 正向事件（例如：增加库存）
- 逆向事件（减少库存）
- 此时正向事件与逆向事件的先后到达顺序并不重要，只要事件被系统全部处理则可以达到最终一致性
## 状态变化的Saga补偿模型－例如订单的状态变化
- 正向事件（例如：订单状态由已预留变为已取消）
- 逆向事件（订单状态由已取消变为已预留）
- 订单的状态由一系列Flag计算所得

| 订单状态Flag | 状态值             |    |                                                  |
|:-----------|:------------------|:---|:-------------------------------------------------------|
| 订单库存状态  | 已预留/已取消       |    |  |
| 实际库存状态  | 已预留/已取消       |    |           |
| 支付状态     | 待支付/已支付/已取消 |    |           |
- 有且只有一个事务可以改动Flag，不允许多个事务同时改动，例如事务T1,T2同时（或先后）想要将订单库存从已预留＝＞已取消，则只能有一个成功
- 正向T1将已预留＝＞已取消，正向T2将已取消＝＞已预留，正向T3将已预留＝＞已取消，则逆向事件T4（T1的补偿事件）需要人工介入
- 版本号是必须的，用来确认是否可以执行逆向事件（T1=>version=１执行完毕后version=2）则T4只可以在T1存在且version=2时执行
- 正向事件与逆向事件的顺序很重要（悲观锁）
  1. 默认采用悲观锁来锁定订单，只有一个线程可以操作订单
  2. 两者同时到达：有且只有一个事件线程可以获得锁，另一个事件需要则等待，具体如下
  3. 正向事件先到达（或获得锁），逆向事件后到达（或获得锁）：OK
  4. 逆向事件先到达（或获得锁），正向事件后到达（或获得锁）：逆向事件先查询正向事件，如果没有则空写入（不对订单进行更改但是记录事件），正向事件先查询逆向事件，如果有则空写入
  5. 正向事件流程：查询逆向事件，有则空写入，无则正常写入
  6. 逆向事件流程：查询正向事件，有且满足版本条件则正常写入，无则空写入
- 正向事件与逆向事件的顺序很重要（乐观锁）
  1. 采用乐观锁来锁定订单，写入时比较版本号
  2. 两者同时到达：有且只有一个事件可以成功写入，另一个事件会因版本号不一致返回失败并且重试
  3. 正向事件先写入，逆向事件后写入（或失败后重试）：OK
  4. 逆向事件先写入，正向事件后写入（或失败后重试）：OK
  5. 正向事件流程：查询逆向事件，有则空写入，无则正常写入
  6. 逆向事件流程：查询正向事件，有且满足版本条件则正常写入，无则空写入
## 创建或删除Saga补偿模型－例如支付链接的创建与删除
- 正向事件（例如：创建支付链接，订单号作为锁Key）
- 逆向事件（删除支付链接）
- 正向事件与逆向事件的顺序很重要（悲观锁）
  1. 默认采用悲观锁来锁定支付链接，只有一个线程可以操作
  2. 两者同时到达：有且只有一个事件线程可以获得锁，另一个事件需要则等待，具体如下
  3. 正向事件先到达（或获得锁），逆向事件后到达（或获得锁）：OK
  4. 逆向事件先到达（或获得锁），正向事件后到达（或获得锁）：逆向事件先查询正向事件，如果没有则空写入（不对订单进行更改但是记录事件），正向事件先查询逆向事件，如果有则空写入
  5. 正向事件流程：查询逆向事件，有则空写入，无则正常写入
  6. 逆向事件流程：查询正向事件，有则正常写入，无则空写入
- 正向事件与逆向事件的顺序很重要（乐观锁无法保证两者同时到达时有且只有一个事件可以成功写入，无法使用版本号作为乐观锁）
