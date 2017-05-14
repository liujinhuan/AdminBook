<template>
	<div class="bookdetail">
		<div class="content-body">
			<Row class-name="child-body">
		        <Col span="8">书&nbsp;&nbsp;&nbsp;&nbsp;名</Col>
		        <Col >{{bookinfo.bookname}}</Col>
		    </Row>
		    <Row class-name="child-body">
		       	<Col span="8">价&nbsp;&nbsp;&nbsp;&nbsp;格</Col>
		        <Col span="16">{{bookinfo.bookprice}}</Col>
		    </Row>
		    <Row class-name="child-body">
		       	<Col span="8">出版社</Col>
		        <Col span="16">{{bookinfo.bookpublish}}</Col>
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
				bookinfo:{}
			}
		},
		created () {
			var bookid = this.$route.query.bookid;
			var data = Store.get("Books_Liuqiqi");
			for(var index in data){
				if(data[index]._id === bookid){
					this.bookinfo = data[index];
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
	.bookdetail{
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