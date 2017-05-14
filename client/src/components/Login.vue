<template>
    <div class="login-content">
    	<Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">

	        <Form-item label="用户名" prop="username">
	            <Input type="text" v-model="formCustom.username"></Input>
	        </Form-item>
	        <Form-item label="密码" prop="password">
	            <Input type="password" v-model="formCustom.password"></Input>
	        </Form-item>
	        <Form-item label="提示">
	            目前用户名和密码可以随便输入
	        </Form-item>
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
        methods: {
            handleSubmit (name) {
            	var self = this;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // this.$Message.success('提交成功!');
                        Store.set("Username",self.formCustom.username);
                        this.$router.push('/home');
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