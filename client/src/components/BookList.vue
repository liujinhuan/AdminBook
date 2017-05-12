<template>
    <div class="booklist">
      <Button @click="toAddBook"><!-- <router-link to="/bookadd">新增</router-link> -->新增图书</Button>
      <Table border size="small" :columns="columns" :data="data"></Table>
      <Modal v-model="isShow" width="360">
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
    <!-- </Modal>
      <Modal
        v-model="isShow"
        title="提示"
        @on-ok="deleteSure"
        @on-cancel="deleteCancel">
        <p v-model="deleteMsg"></p>
     </Modal>-->
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
      isShow: false,
      deleteMsg: '',
      whichDelete:{},
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
              width: 150,
              align: 'center',
              render (row, column, index) {
                  return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
              }
          }
      ],
      data: Store.get()
    };
  },
  created () {
    this.$http.get('http://localhost:9000/book/booklist').then(response => {
      this.data = response.body
    }, response => {
      
    });
  },
  methods: {
    show (index) {
        this.$Modal.info({
            title: '书籍信息',
            content: `书名：${this.data[index].bookname}<br>价格：${this.data[index].bookprice}<br>出版社：${this.data[index].bookpublish}`
        })
    },
    remove (index) {
      this.isShow = true;
      this.whichDelete = this.data[index];
      this.deleteMsg = "确定删除《"+this.whichDelete.bookname+"》这本图书？";
    },
    deleteSure () {

    },
    deleteCancel () {
      this.isShow = false;
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
