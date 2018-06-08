<template>
  <div class="sugget_box">
    <div class="title">
      <span>我的意见建议</span>
    </div>
    <inputBox class="inputBox"></inputBox>
  </div>
</template>

<script>
import inputBox from './inputBox.vue'
export default {
  components: {
    inputBox
  }
}
</script>

<style lang="less" scoped>
@bulue1:#3b7dff;
.sugget_box{
  width: 1100px;
  background: #ffffff;
  min-height:420px;
  .title{
    height: 60px;
    line-height: 60px;
    padding-left: 50px;
    border-bottom: #bbcff6 solid 1px;
    span{
      height: 28px;
      padding-left: 14px;
      border-left: 2px solid @bulue1;
      font-size: 24px;
      font-weight: bold;
    }
  }
  .inputBox{
    width: 700px;
    margin: auto;
    margin-top: 46px;
  }
}
</style>
