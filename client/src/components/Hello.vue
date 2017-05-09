<template>
  <div class="hello">
    <i-button @click="show">Click me!</i-button>
    <Modal v-model="visible" title="Welcome">欢迎使用 iView</Modal>    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show: function () {
      this.visible = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
