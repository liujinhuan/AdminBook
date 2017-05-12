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

+ 安装mongoose，并在根目录下的index.js中链接数据库

> 注意：mongoose在链接之后，需要指定Promise

```
mongoose.Promise = global.Promise;
```

+ 安装koa-bodyparser@next，并在`src/server.js`中引入中间件
```
npm i koa-bodyparser@next --save
```


