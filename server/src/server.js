'use strict';

import config from './config';
import configRoutes from './config/routes';
import Koa from 'koa';
import configKoa from './config/koa';
const bodyParser = require('koa-bodyparser');

const app = new Koa();
// 少了一个括号
app.use(bodyParser());
app.port = config.port;

configKoa(app);
configRoutes(app);

export default app;
