<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left">
                <Menu active-name="booklist" theme="dark" width="auto" :open-names="['bookManager']" @on-select="onSelect">
                    <Submenu name="bookManager">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            图书管理
                        </template>
                        <Menu-item name="booklist">查看</Menu-item>
                        <Menu-item name="bookadd">添加</Menu-item>
                    </Submenu>
                    <Submenu name="userManager" v-if="isShowUserManagement">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            用户管理
                        </template>
                        <Menu-item name="userlist">查看</Menu-item>
                        <Menu-item name="useradd">添加</Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col span="19">
                <div class="layout-content">
                    <router-view></router-view>
                </div>
                <div class="layout-copy">
                    2011-2017 &copy; AdminBook
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    import Store from '@/utils/store'
    export default {
        data () {
            return {
                isShowUserManagement:false
            }
        },
        components:{
        },
        created () {
            var username = Store.get("UserInfo").username;
            if(username && username === "admin"){
                this.isShowUserManagement = true;
            }
        },
        methods : {
            onSelect (name){
                this.$router.push({path:name});
            } 
        }
    }
</script>
<style scoped>
    .layout{
        /*border: 1px solid #d7dde4;*/
        background: #f5f7f9;
        position: relative;
        height: 100%;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 500px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
</style>