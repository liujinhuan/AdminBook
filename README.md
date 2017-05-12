# AdminBook
> 基于Vue+Koa的图书管理系统

## 客户端
> 采用Vue的前端框架，Vue.js的开源UI组件库等

### 全局安装 vue-cli

```
npm install --global vue-cli
```

### 创建一个基于 webpack 模板的新项目

```
vue init webpack client
```

### 安装依赖

```
cd client
npm install
npm run dev
```

> 此时将自动打开http://localhost:8080/#/，看到的是HelloWorld标准模板，下面安装UI组件库iView

### 安装iView

```
npm install iview --save
```

### 使用iView组件

+ 在 webpack 入口页面 main.js 中如下配置：

```
import iView from 'iview'
import 'iview/dist/styles/iview.css'   // 使用 CSS

Vue.use(iView);
```

+ 打开src/components/Hello.vue，引入i-button和Modal组件。点击页面中的clickme，即可弹出对话框。

### 关于请求

+ 安装vue-resource

```
npm i vue-resource --save
```

+ 在main.js中引用

## 服务端

+ 安装koa-router

```
➜  server git:(master) ✗ npm install koa-router
- any-promise@1.3.0 node_modules/any-promise
- depd@1.1.0 node_modules/depd
- statuses@1.3.1 node_modules/http-errors/node_modules/statuses
- ms@0.7.3 node_modules/koa-router/node_modules/ms
- setprototypeof@1.0.3 node_modules/setprototypeof
- http-errors@1.6.1 node_modules/http-errors
- debug@2.6.6 node_modules/koa-router/node_modules/debug
server@0.0.0 /Users/liujinhuan647/Documents/GitHub/AdminBook/server
└─┬ koa-router@3.4.0
  └── koa-compose@2.5.1

npm WARN server@0.0.0 No description
npm WARN server@0.0.0 No repository field.
npm WARN server@0.0.0 No license field.
```

+ 全局安装Koa项目生成器(http://book.apebook.org/minghe/koa-action/hello-koa/install.html)

```
npm install -g yo generator-k
```

+ 新建server目录，执行创建

```
yo k
```




