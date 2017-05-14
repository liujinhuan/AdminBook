<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        components:{
            vHead, vSidebar
        }
    }
</script>

<style scoped>
    .content{
        min-height: 400px;
    }
</style>
