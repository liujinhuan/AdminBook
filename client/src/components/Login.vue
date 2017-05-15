<template>
    <div class="login-content">
    	<Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">

	        <Form-item label="用户名" prop="username">
	            <Input type="text" v-model="formCustom.username"></Input>
	        </Form-item>
	        <Form-item label="密码" prop="password">
	            <Input type="password" v-model="formCustom.password"></Input>
	        </Form-item><!-- 
	        <Form-item label="提示">
	            admin/admin为管理员身份，其余为普通用户
	        </Form-item> -->
	        <Form-item>
	            <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
	        </Form-item>
	        
	    </Form>
    </div>
</template>
<script>
	import Store from './store'
    export default {
        data () {
            const validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback();
                }
            };
            const validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
           
            return {
                formCustom: {
                    password: '',
                    username: '',
                },
                ruleCustom: {
                    password: [
                        { validator: validatePassword, trigger: 'blur' }
                    ],
                    username: [
                        { validator: validateUsername, trigger: 'blur' }
                    ]
                }
            }
        },
        created () {
            this.formCustom.username = Store.get("UserInfo").username || "";
        },
        methods: {
            handleSubmit (name) {
            	var self = this;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$http.post("http://localhost:9000/login/login",this.formCustom).then(response=>{
                            console.log(response.body);
                            var res = response.body;
                            if(res.code==1){
                                this.$Notice.open({
                                    title: "登录成功，已为您保存用户名",
                                    duration:1
                                });
                                // this.$Message.success();
                                Store.set("UserInfo",self.formCustom);
                                this.$router.push('/home');
                            }else{
                                this.formCustom = {};
                                this.$Message.error(res.message);
                            }
                        },response=>{
                            this.$Message.error(response.body.message);
                        });
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>
<style scoped>
	.login-content{
		width: 300px;
	    top: 33%;
	    left: 33%;
	    position: absolute;
	}
</style>