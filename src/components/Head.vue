<template>
  <div class="Head">
    <div class="logo">
      <h1>健康扶贫  健康干预方案提报系统</h1>
      <p>Health Assist Poverty Health Intervention Program Reporting System</p>
    </div>
    <navBox class="navBox"></navBox>    
  </div>
</template>

<script>
import navBox from './nav.vue'
export default {
  components: {
    navBox
  }
}
</script>

<style lang="less" scoped>
.Head{
  height: 74px;
  width: 100%;
  background: #3b7dff;
  padding-top: 10px;
  .logo{
    margin-left: 50px;
    width: 350px;
    height: 58px;
    color: #ffffff;
    text-align: center;
    float: left;
    h1{
      font-size: 22px;
    }
    p{
      font-size: 11px;
    }
  }
  .navBox{
    display: inline-block;
    margin-top: -8px;
    margin-left: 30px;
  }
}  
</style>
