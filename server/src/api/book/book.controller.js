'use strict';

import config from '../../config';
import { list } from './book.model';
import { add } from './book.model';

export async function booklist(ctx, next) {
  let data = await list()
  ctx.status = 200;
  ctx.body = data;
  await next();
}


export async function bookadd(ctx, next) {
	var reqBook = ctx.request.body;
   	let res = await add(reqBook);
  	ctx.status = 200;
  	ctx.body = res;
  	await next();
}
