<template>
    <div class="booklist">
      <Button @click="toAddBook">新增图书</Button>
      <Table border size="small" :columns="columns" :data="data"></Table>
      <!-- 确认删除对话框 -->
      <Modal v-model="isShowDelDialog" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="information-circled"></Icon>
            <span>提示</span>
        </p>
        <div style="text-align:center">
            <p>{{ deleteMsg }}</p>
        </div>
        <div slot="footer">
            <Button @click="deleteCancel">取消</Button>
            <Button type="error"  @click="deleteSure">删除</Button>
        </div>
      </Modal>
      <!-- 查看详情的对话框 -->
      <Modal v-model="isShowDetailDialog" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <span>详情</span>
        </p>
        <div style="text-align:center">
            <p>书&nbsp;名：{{ showDetailBook.bookname }}</p>
            <p>价&nbsp;格：{{ showDetailBook.bookprice }}</p>
            <p>出版社：{{ showDetailBook.bookpublish }}</p>
        </div>
        <div slot="footer">
            <Button @click="isShowDetailDialog=false">OK</Button>
        </div>
      </Modal>
    </div>
</template>

<script>
import Store from './store';
export default {
  name: 'BookList',
  deleteMsg: '',
  data () {
    return {
      self: this,
      isShowDelDialog: false,
      isShowDetailDialog: false,
      deleteMsg: '',
      whichDelete:{},
      deleteIndex:'',
      showDetailBook:{},
      columns: [
          {
              title: '书名',
              key: 'bookname',
              align: 'center',
              render (row, column, index) {
                  return `<strong>${row.bookname}</strong>`;
              }
          },
          {
              title: '价格',
              key: 'bookprice',
              align: 'center',
          },
          {
              title: '出版社',
              key: 'bookpublish',
              align: 'center',
          },
          {
              title: '操作',
              key: 'action',
              width: 200,
              align: 'center',
              render (row, column, index) {
                  return `<i-button type="primary" size="small" @click="show(${index})">详情</i-button> <i-button type="info" size="small"  @click="update(${index})">修改</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
              }
          }
      ],
      data: []
    };
  },
  created () {
    console.log("create");
    var self = this;
    this.$http.get('http://localhost:9000/book/booklist').then(response => {
      var res = response.body;
      if(res.code!=0){
        self.data = res.body;
      }else{
        self.$Message.error(res.message);
      }
    }, response => {
      var res = response.body;
      self.$Message.error(res.message);
    });
  },
  methods: {
    show (index) {
      this.showDetailBook = this.data[index];
      this.isShowDetailDialog = true;
    },
    remove (index) {
      this.isShowDelDialog = true;
      this.deleteIndex = index;
      this.whichDelete = this.data[index];
      this.deleteMsg = "确定删除《"+this.whichDelete.bookname+"》这本图书？";
    },
    deleteSure () {
      var self = this;
      this.$http.post('http://localhost:9000/book/bookdelete',{id:this.whichDelete._id}).then(response => {
          self.$Message.success('删除成功!');
          self.data.splice(self.deleteIndex,1);
          self.isShowDelDialog = false;
      }, response => {
          self.$Message.error(response.body.message);
      });
    },
    deleteCancel () {
      this.isShowDelDialog = false;
    },
    update (index) {
      var updateBook = this.data[index];
      this.$router.push({ name: 'bookupdate', params: { book:updateBook }});
    },
    toAddBook () {
      this.$router.push('/bookadd');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
