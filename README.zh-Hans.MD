# 关于多树
- 多树是基于热爱与分享所创立的项目
- 希望通过持之以恒的迭代开发来达到自我成长以及对开源社区的微薄贡献
# [项目路线](https://github.com/publicdevop2019?tab=projects)
- 2020/6-2020/8，主要用来做现有项目完善，性能测试，单元测试，集成测试的改善
- 2020/8-2020/12,一次Major release，主要加一些新功能(MQ,具体待定)
# 多树A&A（点击项目名称直接跳转到仓库）
|  项目名称  |  概述 |
|:---|:---|
|  [mt0-oauth2](https://github.com/publicdevop2019/mt0-oauth2 )  | 用户,应用管理(Spring boot, JWT, OAuth2)  |
|  [mt1-proxy](https://github.com/publicdevop2019/mt1-proxy)  |  API鉴权(Spring boot, Zuul)  |
|  [mt11-eureka](https://github.com/publicdevop2019/mt11-eureka)  |  服务注册与发现(Eureka)  |
|  [mt9-oauth2-ui](https://github.com/publicdevop2019/mt9-oauth2-ui)  |  管理前端(Angular)  |
# 多树商城
|  项目名称  |  概述  |
|:---|:---|
|  [mt2-user-profile](https://github.com/publicdevop2019/mt2-user-profile)  |  地址，购物篮，订单，档案管理(Spring boot)  |
|  [mt3-product](https://github.com/publicdevop2019/mt3-product )  | 产品，属性，类目管理(Spring boot)  |
|  [mt7-obj-market](https://github.com/publicdevop2019/mt7-obj-market )  | 商城前端(Angular)  |
# 多树论坛
|  项目名称  |  概述  |
|:---|:---|
|  [mt12-bbs-ui](https://github.com/publicdevop2019/mt12-bbs-ui)  |  论坛前端(React)  |
|  [mt13-bbs](https://github.com/publicdevop2019/mt13-bbs)  |  帖子，评论，用户反馈管理(Spring boot)  |
# 多树基础服务
|  项目名称  |  概述  |
|:---|:---|
|  [mt4-messenger](https://github.com/publicdevop2019/mt4-messenger)  |  提供基本的对外通信手段(Spring boot)  |
|  [mt5-file-upload](https://github.com/publicdevop2019/mt5-file-upload)  |  提供多媒体文件的存储(Spring boot)  |
|  [mt6-payment](https://github.com/publicdevop2019/mt6-payment )  | 一个测试用的支付微服务，并不会实际发生支付行为(Spring boot)  |
|  [mt8-sys-test](https://github.com/publicdevop2019/mt8-sys-test )  |  提供API的回归测试，通过定时调用来提升代码稳定性(Spring boot test) |
|  [mt10-form-builder](https://github.com/publicdevop2019/mt10-form-builder )  | 提供基于Angular的JSON驱动的表单生成，主要用在管理后端的UI(Angular)  |
| [config-center]( https://github.com/publicdevop2019/config-center )  | 共享代码以及配置文件 |
|  [docs](https://github.com/publicdevop2019/docs  )  | 存放项目文档以及一些性能测试的结果 |
# 快速开始（需要本地安装Docker）
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
- (英/中) http://localhost:4300/index.html