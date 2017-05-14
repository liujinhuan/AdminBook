'use strict';

import config from '../../config';
import { toLoginByPwd } from './login.model';

export async function loginByPWD(ctx, next) {
  let data = await toLoginByPwd()
  ctx.status = 200;
  ctx.body = data;
  await next();
}
