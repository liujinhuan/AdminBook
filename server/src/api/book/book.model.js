'use strict';

import config from '../../config';

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var BookSchema = new Schema({
  id:String,
  bookname:String,
  bookprice:String,
  bookpublish:String
});
var BookModel = mongoose.model('Book', BookSchema);

export function list() {
  return new Promise((resolve) => {
    setTimeout(() => {
    	var books = BookModel.find();
    	resolve(books);
    });
  });
}

export function add(argumentbook) {
  return new Promise((resolve) => {
    setTimeout(() => {
    	var book = new BookModel();
    	book.bookname = argumentbook.bookname;
    	book.bookprice = argumentbook.bookprice;
    	book.bookpublish = argumentbook.bookpublish;
    	book.save(function  (err) {
    		if(err){
    			resolve({code:0,message:"插入数据库出错"});
    		}else{
    			resolve({code:1,message:"success"});
    		}
    	});
    });
  });
}

