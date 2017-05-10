<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="书名" prop="bookname">
            <Input v-model="formValidate.bookname" placeholder="请输入书名"></Input>
        </Form-item>
        <Form-item label="价格" prop="bookprice">
            <Input v-model="formValidate.bookprice" placeholder="请输入价格"></Input>
        </Form-item>
        <Form-item label="出版社" prop="bookpublish">
            <Input v-model="formValidate.bookpublish" placeholder="请输入出版社"></Input>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </Form-item>
    </Form>
</template>
<script>
    import Store from './store';
    export default {
        data () {
            return {
                books:[],
                formValidate: {
                    bookname: '',
                    bookprice: '',
                    bookpublish: ''
                },
                ruleValidate: {
                    bookname: [
                        { required: true, message: '书名不能为空', trigger: 'blur' }
                    ],
                    bookprice: [
                        { required: true, message: '价格不能为空', trigger: 'blur' }
                    ],
                    bookpublish: [
                        { required: true, message: '出版社不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                var self = this;

                this.books = Store.get();

                var book = {
                    bookname: this.$data.formValidate.bookname,
                    bookprice: this.$data.formValidate.bookprice,
                    bookpublish: this.$data.formValidate.bookpublish
                }
                this.books.push(book);

                Store.set(this.books);

                this.$Message.success('提交成功!');
                this.$router.go(-1)
                // this.$refs[name].validate((valid) => {
                //     if (valid) {
                //         this.$Message.success('提交成功!');
                //         self.$router.go(-1)
                //     } else {
                //         this.$Message.error('表单验证失败!');
                //     }
                // })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
