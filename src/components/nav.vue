<template>
  <div>
    <ul>
      <li><router-link to="">首页</router-link></li>
      <li><router-link to="">提报</router-link></li>
      <li><router-link to="">帮助</router-link></li>
      <li><router-link to="">设置</router-link></li>
      <li class="active"><router-link to="/">建议</router-link></li>
      <li><router-link to="">系统管理</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
@bulue1:#3b7dff;
  ul{
    width: 500px;
    li{
      padding: 0 16px;
      height: 70px;
      line-height: 70px;
      float: left;
      a{
        color: #ffffff;
      }
      &.active{
        background: #346cdb;
      }
    }
  }
</style>
