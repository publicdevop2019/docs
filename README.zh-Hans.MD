# 一键本地部署需要本地安装Docker
# 一键部署
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
# 关于项目
## 这是一个由多个微服务(spring boot)以及前端(angular)来组建的一个小型多用途项目
- mt0-oauth2,mt1-proxy,mt11-eureka 三个子项目作为用户验证和鉴权中心，统一管理API以及前后端应用
- mt２-profile,mt3-product 两个子项目作为多树商城的主体，是第一批注册的应用
- mt4-messenger 提供基本的对外通信手段（Email,目前只支持Gmail)
- mt5-file-upload　提供多媒体文件的存储（目前只支持图片）
- mt6-payment 是一个测试用的支付微服务，并不会实际发生支付行为
- mt8-sys-test 提供API的回归测试，通过定时调用来提升代码稳定性
- mt10-form-build-platform 提供基于Angular的JSON驱动的表单生成，主要用来管理后端的UI中
- config-center 只是一个简单的共享代码文件的存放地方，用来解决一些通用的问题
- doc　存放项目文档以及一些性能测试的结果
# 为什么要做这个项目
- 学习，毕竟工作中大家都是CRUD boy
- Angular目前没有找到前端商城案例(如果有请开个issue告知)
# 项目计划
- 2020/5－2020/6，会再做一个前端项目(React)
- 2020/6-2020/8，主要用来做现有项目完善，性能测试，单元测试，集成测试的改善
- 2020/8-2020/12,一次Major release，主要加一些新功能(MQ,具体待定)
# 卖点？
## mt0-oauth2
- 基于 spring-security-oauth2-autoconfigure
- JWT 不对称 key 验证, mt1-proxy 启动获取公匙
- 开放第三方 authorize code API
- 支持 client credential, password, authorization, refresh token flow
- 忘记密码重置, 注册码注册用户
- JWT (与 mt1-proxy一起使用) 主动以及被动回收
- 异步日志　？
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
- 编辑JSON来生成表单
# mt2-profile + mt3-product
- 在API并发测试上（测试代码在mt8中）和幂等性下了些功夫
- 用户随机并发下单，２小时后库存仍然保证最终一致性
- 部分采用了领域设计的思路来构建项目
