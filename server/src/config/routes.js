'use strict';

import mount from 'koa-mount';
import { root } from '../api';
import { book } from '../api';
import { user } from '../api';
import { login } from '../api';

export default function configRoutes(app) {
  app.use(mount('/', root.routes()));
  // List Endpoints Here
  app.use(mount('/book', book.routes()));
  app.use(mount('/user', user.routes()));
  app.use(mount('/login', login.routes()));
}
