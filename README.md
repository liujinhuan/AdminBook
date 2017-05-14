# AdminBook

> 基于Vue+Koa的图书管理系统

## 客户端

> 前端框架采用vue，通过脚手架`vue-cli`生成项目基础目录，融合iView UI框架，vue-router路由，vue-resource请求中间件等实现管理系统。各技术版本及说明如下：

| Tech      | 版本   |   说明		|
| ------------- |:-------------:|-------------:|
|vue |	^2.2.6 	| vue版本 |
|vue-router	| ^2.3.1	| vue路由中间件 |
|vue-resource |	^1.3.1	| vue发送请求中间件 |
|iView |^2.0.0-rc.12| UI框架|


## 服务端

> 后端采用koa框架，通过脚手架`generator-koa2-rest`生成项目基础目录，融合mongodb数据库，koa-router路由，koa-cors跨域处理，koa-bodyparser post请求处理等中间件实现管理后台服务端。各技术版本及说明如下：

| Tech      | 版本   |   说明		|
| ------------- |:-------------:|-------------:|
|koa |	^2.0.0 	| koa版本 |
|mongoose | ^4.9.9 | mongodb数据库 |
|koa-bodyparser	| ^3.2.0	| http-post请求参数处理中间件 |
|koa-cors |	0.0.16	| koa跨域请求中间件 |
|koa-router |^7.0.1| 请求路由中间件 |


## 项目运行

+ 克隆项目代码到本地

+ 进入client和server目录安装项目依赖

```
cd client && npm install
cd server && npm install
```

+ 分别启动本地服务

```
cd client && npm run dev
cd server && npm start
```

+ 浏览器打开客户端进行操作

```
http://localhost:8080/
```

## 关于部署

> 部署对于我来说又是另一个全新的领域，涉及到服务器的选取和部署，后续会进一步完善

## 关于项目

> 项目中的某些例子其实是不符合常理的，比如用户管理部分的密码显示在页面上等等N多。后续会继续优化。另：我也会整理一篇Git主页文章，在其中详细介绍此项目以及踩过的坑。未完待续~~

## 其他

> 有任何问题或建议欢迎提出issue.


