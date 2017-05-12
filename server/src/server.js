'use strict';

import config from './config';
import configRoutes from './config/routes';
import Koa from 'koa';
import configKoa from './config/koa';
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const app = new Koa();
// POST请求参数的获取
app.use(bodyParser());
// 跨域处理
app.use(cors());
app.port = config.port;

configKoa(app);
configRoutes(app);

export default app;
