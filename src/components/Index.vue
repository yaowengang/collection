<template>
  <div class="index_box">
    <Head></Head>
    <Body></Body>
  </div>
</template>

<script>
import Head from './Head.vue'
import Body from './body.vue'
export default {
  components: {
    Head,
    Body
  }
}
</script>

<style lang="less" scoped>
.index_box{
  background: #eef3f6;
  min-width: 1600px;
}
</style>
