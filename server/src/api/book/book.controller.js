'use strict';

import config from '../../config';
import { list } from './book.model';
import { addBook } from './book.model';
import { deleteBook } from './book.model';
import { updateBook } from './book.model';

export async function booklist(ctx, next) {
  let data = await list()
  ctx.status = 200;
  ctx.body = data;
  await next();
}


export async function bookadd(ctx, next) {
	var reqBook = ctx.request.body;
   	let res = await addBook(reqBook);
  	ctx.status = 200;
  	ctx.body = res;
  	await next();
}

export async function bookdelete(ctx, next) {
	console.log(ctx.request.body);
	var bookid = ctx.request.body.id;
   	let res = await deleteBook(bookid);
  	ctx.status = 200;
  	ctx.body = res;
  	await next();
}

export async function bookupdate(ctx, next) {
	console.log(ctx.request.body);
	var book = ctx.request.body;
   	let res = await updateBook(book);
  	ctx.status = 200;
  	ctx.body = res;
  	await next();
}
