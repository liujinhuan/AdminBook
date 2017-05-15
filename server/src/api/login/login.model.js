'use strict';

import config from '../../config';

export function toLoginByPwd(argumentUser) {
  return new Promise((resolve) => {
    setTimeout(() => {
    	console.log(argumentUser);
    	config.UserModel.find({isExist:1,username:argumentUser.username,password:argumentUser.password},function(err,docs){
    		if(err){
    			resolve({code:0,message:"查询用户信息出错"});
    		}else if(docs.length==0){
    			resolve({code:0,message:"登录信息有误，请重新输入"});
    		}else {
    			resolve({code:1,message:"success",body:{}});
    		}
    	})
    });
  });
}
