# 一键部署（需要本地安装Docker）
### 方式一. 所有子模块在一个Docker镜像中
``` shell script
# 以下脚本在同一目录下,（用户名:haolinwei2015@gmail.com,密码:root，注册激活码:123456,重置密码令牌:123456789)
sh hello-world-aio.sh
```
### 方式二． 所有子模块作为单独的Docker镜像
``` shell script
# 以下脚本在同一目录下,（用户名:haolinwei2015@gmail.com,密码:root，注册激活码:123456,重置密码令牌:123456789)
sh hello-world.sh
```
### 选择方式一或二后，打开以下URL来开始吧～
#### 多树商城
- (简体中文) http://localhost:4200/zh-Hans/index.html
- (英文) http://localhost:4200/index.html
#### 管理后端
- (暂时只有英文) http://localhost:4300/index.html
# 关于多树开源商城（生态）
## 这是一个由多个微服务(spring boot 2x, spring cloud)以及前端(angular)来组建的一个小型多用途项目

|  项目名称  |  链接  |
|:---|:---|
|  mt0-oauth2  |  https://github.com/publicdevop2019/mt0-oauth2  |
|  mt1-proxy  |  https://github.com/publicdevop2019/mt1-proxy  |
|  mt2-user-profile  |  https://github.com/publicdevop2019/mt2-user-profile  |
|  mt3-product  |  https://github.com/publicdevop2019/mt3-product  |
|  mt4-messenger  |  https://github.com/publicdevop2019/mt4-messenger  |
|  mt5-file-upload  |  https://github.com/publicdevop2019/mt5-file-upload  |
|  mt6-payment  |  https://github.com/publicdevop2019/mt6-payment  |
|  mt7-obj-market  |  https://github.com/publicdevop2019/mt7-obj-market  |
|  mt8-sys-test  |  https://github.com/publicdevop2019/mt8-sys-test  |
|  mt9-oauth2-ui  |  https://github.com/publicdevop2019/mt9-oauth2-ui  |
|  mt10-form-builder  |  https://github.com/publicdevop2019/mt10-form-builder  |
|  mt11-eureka  |  https://github.com/publicdevop2019/mt11-eureka  |
- mt0-oauth2,mt1-proxy,mt11-eureka 多树用户验证和鉴权中心，统一管理API以及前后端应用
- mt2-profile,mt3-product 多树商城的主体，是第一批注册的应用
- mt4-messenger 提供基本的对外通信手段（Email,目前只支持Gmail)
- mt5-file-upload　提供多媒体文件的存储（目前只支持图片）
- mt6-payment 是一个测试用的支付微服务，并不会实际发生支付行为
- mt8-sys-test 提供API的回归测试，通过定时调用来提升代码稳定性
- mt10-form-build-platform 提供基于Angular的JSON驱动的表单生成，主要用在管理后端的UI
- config-center 共享代码以及配置文件
- doc 存放项目文档以及一些性能测试的结果
# 为什么要做这个项目
- 学习，毕竟工作中大家都是CRUD boy
- Angular目前没有找到前端商城案例(如果有请开个issue告知)
- 基本上本人所有知道的知识点都有覆盖到，对我个人起一个技术日记本的作用吧
# 项目计划
- 2020/5－2020/6，会再做一个前端项目(React)
- 2020/6-2020/8，主要用来做现有项目完善，性能测试，单元测试，集成测试的改善
- 2020/8-2020/12,一次Major release，主要加一些新功能(MQ,具体待定)
# 卖点？
- 使用的技术模块少，比较适合初学者
- 模块都可以拆分，可以随意替换
- 可拓展性强
## mt0-oauth2
- 基于 spring-security-oauth2-autoconfigure
- JWT不对称钥匙验证, mt1-proxy启动自动获取公匙
- 开放第三方 authorize code API
- 支持 client credential, password, authorization, refresh token 流程
- 忘记密码重置, 注册码注册用户
- JWT (与 mt1-proxy一起使用) 主动以及被动回收
- 异步日志以及优雅关机（覆盖全部服务）
## mt1-proxy（统一处理了一些微服务需要解决的问题)
- 统一API鉴权
- JWT (与 mt1-proxy一起使用) 主动以及被动回收
- 错误响应覆盖(主要用于生产环境中)
- 与Eureka一起来实现动态反向代理
- 统一请求，响应日志记录（logbook）?
- Gzip
# mt7-object-market
- Angular, scss, typescript
- 多语言支持, i18n
- 夜间模式
- 懒加载代码以及图片
- 无限滚动条
- 页面骨架
- Service worker, SPA
- Angular material
- Animation
# mt10-form-builder-platform
- 提供基于Angular的JSON驱动的表单生成
# mt2-profile + mt3-product
- 在API并发测试上（测试代码在mt8中）和幂等性下了些功夫
- 用户随机并发下单，库存保证最终一致性
- 部分采用了领域设计的思路来构建项目
