'use strict';

import config from '../../config';
import { listuser } from './user.model';
import { adduser } from './user.model';
import { updateuser } from './user.model';
import { deleteuser } from './user.model';

export async function userlist(ctx, next) {
  let data = await listuser()
  ctx.status = 200;
  ctx.body = data;
  await next();
}

export async function useradd(ctx,next) {
	var user = ctx.request.body;
	console.log("controller----"+user)
	let data = await adduser(user);
	ctx.status = 200;
	ctx.body = data;
	await next();
}

export async function userupdate(ctx,next) {
	var user = ctx.request.body;
	console.log("controller----"+user)
	let data = await updateuser(user);
	ctx.status = 200;
	ctx.body = data;
	await next();
}

export async function userdelete(ctx,next) {
	var userid = ctx.request.body.id;
	console.log("controller----"+userid)
	let data = await deleteuser(userid);
	ctx.status = 200;
	ctx.body = data;
	await next();
}