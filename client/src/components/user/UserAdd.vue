<template>
    <div class="bookadd">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Form-item label="用户名" prop="username">
                <Input v-model="formValidate.username" placeholder="请输入用户名"></Input>
            </Form-item>
            <Form-item label="密码" prop="password">
                <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
            </Form-item>
            <!-- <Form-item label="确认密码" prop="passwordagain">
                <Input v-model="formValidate.passwordagain" placeholder="请再次输入密码"></Input>
            </Form-item> -->
            <Form-item>
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button type="info" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
    import Store from '@/utils/store'
    import Url from '@/utils/url'

    export default {
        data () {
            const validateUsername = (rule,value,callback)=>{
                if(value===""){
                    callback(new Error("请输入用户名"))
                }else{
                    callback();
                }
            };
            const validatePassword = (rule,value,callback)=>{
                if(value===""){
                    callback(new Error("请输入密码"))
                }else if(!(/^(\d){6,8}$/.test(value))){
                    callback(new Error('请输入6-8位纯数字'));
                }else {
                    callback();
                }
            };
            return {
                users:[],
                formValidate: {
                    username: '',
                    password: '',
                    // passwordagain: ''
                },
                ruleValidate: {
                    username: [
                        { validator: validateUsername, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassword, trigger: 'blur' }
                    ]/*,
                    passwordagain: [
                        { required: true, message: '确认密码不能为空', trigger: 'blur' }
                    ]*/
                }
            }
        },
        methods: {
            handleSubmit (name) {
                var self = this;
                var user = {
                    username: this.$data.formValidate.username,
                    password: this.$data.formValidate.password,
                    // passwordagain: this.$data.formValidate.passwordagain
                }
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$http.post(Url.useradd,user).then(response => {
                            var res = response.body;
                            if(res.code==1){
                                self.$Message.success('提交成功!');
                                self.$data.formValidate = {};
                            }else{
                                self.$Message.error(res.message);
                            }
                        }, response => {
                            self.$Message.error(response.body.message);
                        });
                    } 
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            back () {
                this.$router.go(-1);    
            }
        }
    }
</script>
<style scoped>
    .bookadd{
        padding: 20px;
    }
</style>
