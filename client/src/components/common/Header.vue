<template>
    <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main" v-if="isShowLogout">
                <a>{{ username }}</a> |
                <a @click="logout">退出</a>
            </div>
        </div>
    </div>
</template>
<script>
    import Store from '@/utils/store'
    export default {
        data () {
            return {
                isShowLogout:false,
                username:""
            }
        },
        created () {
            this.username = Store.get("UserInfo").username;
            this.isShowLogout = this.username===""?false:true;
        },
        methods:{
            logout () {
                this.$router.push("/");
            }
        }

    }
</script>
<style scoped>
    .layout{
        /*border: 1px solid #d7dde4;*/
        background: #f5f7f9;
        position: relative;
        /*border-radius: 4px;*/
        overflow: hidden;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 20px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
</style>