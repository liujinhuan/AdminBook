<template>
    <div class="userupdate">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Form-item label="用户名" prop="username">
                <Input v-model="formValidate.username" placeholder="请输入用户名"></Input>
            </Form-item>
            <Form-item label="密码" prop="password">
                <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button type="ghost" @click="back" style="margin-left: 8px">返回</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
    import Store from '@/utils/store'
    import Url from '@/utils/url'
    export default {
        data () {
            return {
                users:[],
                formValidate: {
                    username: '',
                    password: '',
                },
                ruleValidate: {
                    username: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        created () {
            this.formValidate = this.$route.params.user;
        },
        methods: {
            handleSubmit (name) {
                var self = this;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        self.$http.post(Url.userupdate,self.formValidate).then(response => {
                            var res = response.body;
                            if(res.code==1){
                                self.$Message.success('修改成功!');
                                self.$router.go(-1);
                            }else{
                                self.$Message.error(res.message);
                            }
                        }, response => {
                            self.$Message.error(response.body.message);
                        });
                    } else {
                        self.$Message.error('表单验证失败!');
                    }
                })
            },
            back () {
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
    .bookupdate{
        padding: 20px;
    }
</style>
