'use strict';

import config from '../../config';

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	id:String,
	isExist: { type: Number, default: '1' },
	username:String,
	password:String
});

const UserModel = mongoose.model("Users",UserSchema) ;

config.UserModel = UserModel;


export function listuser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      UserModel.find({isExist:1},function(err,doc){
    		if(err){
    			resolve({code:0,message:"查询数据库出错"});
    		} else{
    			resolve({code:1,message:"success",body:doc});
    		}     	
      })
    });
  });
}


export function adduser(argumentuser) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = new UserModel(argumentuser);
      console.log("model----"+argumentuser);
      console.log("model----"+user);
      const condition = {
      	isExist:1,
      	username:argumentuser.username
      }
      UserModel.find(condition,function(err,docs){
      	if(err){
      		resolve({code:0,message:"查询数据库出错"});
      	}else if(docs.length!=0){
      		resolve({code:0,message:"用户名已存在"});
      	}else{
      		user.save(function(err){
      			if(err){
      				resolve({code:0,message:"插入数据库出错"});
      			}else{
      				resolve({code:1,message:"success",body:{}});
      			}
      		})
      	}
      })
    });
  });
}

export function updateuser(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("model----"+JSON.stringify(user))
      UserModel.update({_id:user._id,isExist:1},{username:user.username,password:user.password},function(err){
      	if(err){
      		resolve({code:0,message:"修改用户失败"});
      	}else{
      		resolve({code:1,message:"success",body:{}});
      	}
      })
    });
  });
}

export function deleteuser(userid) {
  return new Promise((resolve) => {
    setTimeout(() => {
      UserModel.findOneAndUpdate({_id:userid},{isExist:0},function(err,docs){
      	if(err){
      		resolve({code:0,message:"删除用户失败"});
      	}else{
      		resolve({code:1,message:"success",body:{}});
      	}
      })
    });
  });
}