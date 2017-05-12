'use strict';

import config from '../../config';

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var BookSchema = new Schema({
  id:String,
  isExist: { type: Number, default: '1' },
  bookname:String,
  bookprice:String,
  bookpublish:String
});
var BookModel = mongoose.model('Book', BookSchema);

export function list() {
  return new Promise((resolve) => {
    setTimeout(() => {
    	BookModel.find({isExist:1},function (err,docs) {
    		// console.log(docs);
    		if(err){
    			resolve({code:0,message:"查询数据库出错"});
    		}else{
    			resolve({code:1,message:"success",body:docs});
    		}
    	});
    	
    });
  });
}

export function addBook(argumentbook) {
  return new Promise((resolve) => {
    setTimeout(() => {
    	var book = new BookModel(argumentbook);
    	book.save(function (err) {
    		if(err){
    			resolve({code:0,message:"插入数据库出错"});
    		}else{
    			resolve({code:1,message:"success"});
    		}
    	});
    });
  });
}


export function deleteBook(bookid) {
  return new Promise((resolve) => {
    setTimeout(() => {
    	BookModel.findOneAndUpdate({_id:bookid},{isExist:0},function (err,docs) {
    		if(err){
    			resolve({code:0,message:"查询数据库出错"});
    		}else{
    			resolve({code:1,message:"success",body:{}});
    		}
    	});
    });
  });
}

export function updateBook(book) {
  return new Promise((resolve) => {
    setTimeout(() => {
    	BookModel.update({_id:book._id},{bookname:book.bookname,bookprice:book.bookprice,bookpublish:book.bookpublish},function (err,docs) {
    		if(err){
    			resolve({code:0,message:"修改数据库出错"});
    		}else{
    			resolve({code:1,message:"success",body:{}});
    		}
    	});
    });
  });
}
