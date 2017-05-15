'use strict';

import config from '../../config';
import { toLoginByPwd } from './login.model';

export async function loginByPWD(ctx, next) {
	var user = ctx.request.body;
	// console.log(user);
	let data = await toLoginByPwd(user);
	ctx.status = 200;
	ctx.body = data;
	await next();
}
