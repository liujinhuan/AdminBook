<template>
    <div class="booklist">
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
    </div>
</template>

<script>
import Store from '@/utils/store'
import Url from '@/utils/url'

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
              title: '编号',
              key: 'id',
              align: 'center',
              render (row, column, index) {
                  return `${row._id}`;
              }
          },
          {
              title: '用户名',
              key: 'username',
              align: 'center',
              render (row, column, index) {
                  return `${row.username}`;
              }
          },
          {
              title: '密码',
              key: 'password',
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
    this.$http.get(Url.userlist).then(response => {
      var res = response.body;
      if(res.code!=0){
        Store.set("Users_Liuqiqi",res.body);
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
      this.$router.push({ name: 'userdetail' , query: { userid: this.data[index]._id }});
    },
    remove (index) {
      this.isShowDelDialog = true;
      this.deleteIndex = index;
      this.whichDelete = this.data[index];
      this.deleteMsg = "确定删除该用户？";
    },
    deleteSure () {
      var self = this;
      this.$http.post(Url.userdelete,{id:this.whichDelete._id}).then(response => {
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
      var updateUser = this.data[index];
      this.$router.push({ name: 'userupdate', params: { user:updateUser }});
    },
    toAddBook () {
      this.$router.push('/useradd');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .booklist{
    padding: 20px;
  }
</style>
