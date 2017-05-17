# AdminBook

> 基于Vue+iView+Koa的管理系统，包括用户与图书管理。旨在综合运用前后端框架。

## 客户端

> 前端框架采用vue，通过脚手架`vue-cli`生成项目基础目录，融合iView UI框架，vue-router路由，vue-resource请求中间件等实现管理系统。各技术版本及说明如下：

| Tech      | 版本   |   说明		|
| ------------- |:-------------:|-------------:|
|vue-cli | | 前端框架的脚手架工具|
|vue |	^2.2.6 	| vue版本 |
|vue-router	| ^2.3.1	| vue路由中间件 |
|vue-resource |	^1.3.1	| vue发送请求中间件 |
|iView |^2.0.0-rc.12| UI框架|


## 服务端

> 后端采用koa框架，通过脚手架`generator-koa2-rest`生成项目基础目录，融合mongodb数据库，koa-router路由，koa-cors跨域处理，koa-bodyparser post请求处理等中间件实现管理后台服务端。各技术版本及说明如下：

| Tech      | 版本   |   说明		|
| ------------- |:-------------:|-------------:|
|generator-koa2-rest | | 后端项目生成脚手架,依赖koa@next |
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

## 目录结构介绍 ##

> Client

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|   |-- assets                   	 // 静态资源
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|           |-- Header.vue           // 顶部组件
	|           |-- Home.vue           	 // 公共路由入口
	|           |-- Sidebar.vue          // 左侧菜单栏
	|		|-- book                   	 // 主要图书路由页面
	|           |-- BookAdd.vue       	 // 图书添加页面
	|           |-- BookDetail.vue       // 图书详情页面
	|           |-- BookList.vue         // 图书列表页面
	|           |-- BookUpdate.vue       // 图书信息修改页面
	|		|-- user                   	 // 主要用户路由页面
	|           |-- UserAdd.vue          // 用户添加页面
	|           |-- UserDetail.vue       // 用户详情查看页面
	|           |-- UserList.vue         // 用户列表页面
	|           |-- UserUpdate.vue       // 用户信息修改页面
	|		|-- Login.Vue                // 登录页面
	|   |-- router                   	 // 页面路由
	|		|-- index.js                 // 页面路由配置入口
	|   |-- utils                   	 // 工具
	|		|-- store.js                 // 本地存储类
	|		|-- url.js                   // 请求路径类
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种中间件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明

> Server

	|-- test                             // 测试目录
	|-- src                              // 源码目录
	|   |-- server.js                    // 后台配置入口文件，引入各类中间件
	|   |-- api                   		 // 组件
	|       |-- book                     // book
	|           |-- book.controller.js   // book controller
	|           |-- book.model.js        // book model
	|           |-- index.js             // 基础路由配置文件
	|       |-- login                    // login
	|           |-- login.controller.js  // login controller
	|           |-- login.model.js       // login model
	|           |-- index.js             // 基础路由配置文件
	|       |-- user                     // user
	|           |-- user.controller.js   // user controller
	|           |-- user.model.js        // user model
	|           |-- index.js             // 基础路由配置文件
	|       |-- root                     // root
	|           |-- root.controller.js   // root controller
	|           |-- root.model.js        // root model
	|           |-- index.js             // 基础路由配置文件
	|		|-- index.js                 // 路由入口
	|   |-- config                   	 // 页面路由
	|		|-- index.js                 // 各种端口，IP等的配置文件
	|		|-- koa.js                   // koa配置文件
	|		|-- routes.js                // 请求接口基础路由
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.js                         // 服务端入口文件
	|-- package.json                     // 项目及工具的依赖配置文件



## 关于部署

> 部署对于我来说又是另一个全新的领域，涉及到服务器的选取和部署，后续会进一步完善

## 关于项目

> 个人主页中我会更加详细的介绍。参考地址如下哦。

![基于Vue+iView+Koa+Mongodb的后台管理系统--客户端](https://liujinhuan.github.io/2017/05/16/%E5%9F%BA%E4%BA%8EVue+iView+Koa+Mongodb%E7%9A%84%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F--%E5%AE%A2%E6%88%B7%E7%AB%AF/)

## 其他

> 有任何问题或建议欢迎提出issue.


