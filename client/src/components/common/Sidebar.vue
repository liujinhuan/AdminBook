<style scoped>
    .layout{
        /*border: 1px solid #d7dde4;*/
        background: #f5f7f9;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 400px;
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
<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left">
                <Menu active-name="booklist" theme="dark" width="auto" :open-names="['1']" @on-select="onSelect">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            图书管理
                        </template>
                        <Menu-item name="booklist">查看</Menu-item>
                        <Menu-item name="bookadd">添加</Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col span="19">
                <router-view></router-view>
                <div class="layout-copy">
                    2011-2017 &copy; AdminBook
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    import vAdd from '../bookadd'
    import vList from '../booklist'
    import vUpdate from '../bookupdate'
    export default {
        data () {
            return {
            }
        },
        components:{
            vAdd,vList,vUpdate
        },
        methods : {
            onSelect (name){
                this.$router.push(name);
                
            } 
        }
    }
</script>
