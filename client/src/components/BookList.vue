<template>
    <div class="booklist">
      <Button><router-link to="/bookadd">新增</router-link></Button>
      <Table border size="small" :columns="columns" :data="data"></Table>
    </div>
</template>

<script>
export default {
  name: 'BookList',
  data () {
    return {
      self: this,
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
      data: [
          {
              bookname: '平安日记',
              bookprice: 18,
              bookpublish: '广东省深圳市观澜平安金融学院'
          }
      ]
  }
  },
  methods: {
    show (index) {
        this.$Modal.info({
            title: '书籍信息',
            content: `书名：${this.data[index].bookname}<br>价格：${this.data[index].bookprice}<br>出版社：${this.data[index].bookpublish}`
        })
    },
    remove (index) {
        this.data.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
