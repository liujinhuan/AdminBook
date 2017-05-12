<template>
	<div class="bookdetail">
		<Row>
	        <Col span="8">书名：</Col>
	        <Col span="16">{{bookinfo.bookname}}</Col>
	    </Row>
	    <Row>
	       	<Col span="8">价格：</Col>
	        <Col span="16">{{bookinfo.bookprice}}</Col>
	    </Row>
	    <Row>
	       	<Col span="8">出版社：</Col>
	        <Col span="16">{{bookinfo.bookpublish}}</Col>
	    </Row>
	    <Button @click="back" style="margin-left: 8px">返回</Button>
	</div>
</template>
<script>
	import Store from './store';
	export default {
		data (){
			return {
				bookinfo:{}
			}
		},
		created () {
			var bookid = this.$route.query.bookid;
			var data = Store.get();
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
<style>
	
</style>