'use strict';

const path = require('path');

const config = {
  env: process.env.NODE_ENV || 'dev',
  root: path.normalize(__dirname + '../../'),
  ip: process.env.IP || 'localhost',
  port: process.env.PORT || 9000,
  logType: process.env.LOGTYPE || 'dev',
  mongoIp: 'localhost',
  mongoPort: 27017,
  mongoDbName: 'bookadmin'
};

module.exports = config;