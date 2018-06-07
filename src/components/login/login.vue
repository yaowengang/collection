<template>
 <div class="loginbody">
   <loginHear></loginHear>
   <loginPage></loginPage>
  </div> 
</template>

<script>
import loginHear from "./login_head.vue"
import loginPage from "./login_page.vue"

export default { 
 data (){
  return{

  }
 },
 components:{
  loginHear,
  loginPage
 }
}
</script>

<style lang="less" scoped>
.loginbody{
  height:942px;
  background: #eef3f6;
}
</style>
