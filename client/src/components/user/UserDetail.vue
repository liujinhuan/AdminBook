<template>
	<div class="userdetail">
		<div class="content-body">
			<Row class-name="child-body">
		        <Col span="8">用户&nbsp;&nbsp;&nbsp;&nbsp;名</Col>
		        <Col >{{userinfo.username}}</Col>
		    </Row>
		</div>
	    <Button @click="back" style="margin-left: 8px">返回</Button>
	</div>
</template>
<script>
	import Store from '../store';
	export default {
		data (){
			return {
				userinfo:{}
			}
		},
		created () {
			var userid = this.$route.query.userid;
			var data = Store.get("Users_Liuqiqi");
			for(var index in data){
				if(data[index]._id === userid){
					this.userinfo = data[index];
				}
			}
			
		},
		methods:{
			back () {
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped>
	.userdetail{
		padding: 20px;
		
	}
	.content-body{
		border: 1px solid #e3e8ee;
		margin: 20px 0px 40px 0px;
	}
	.child-body{
		margin: 20px 0px;
	}
</style>