<template>
  <div class="loginbox">
    <h1>登陆</h1>
    <input type="text" placeholder="请输入手机号">
    <label class="error">请输入正确的手机号码！</label>
    <input type="password" placeholder="请输入密码">
    <label class="error"></label>
    <button type="submit">登陆</button>
    <router-link to="/">忘记密码</router-link>
  </div>
</template>

<script>
export default {
 
}
</script>

<style lang="less" scoped>
@bulue1:#3b7dff;
@border1:1px solid #d9d9d9;
.loginbox{
  width: 578px;
  height: 540px;
  background: #ffffff;
  padding: 70px 126px;
  h1{
   line-height: 58px;
   color: @bulue1;
   font-size: 24px;
   text-align: center;
  }
  input{
   width: 100%;
   height: 40px;
   border:@border1;
   border-radius: 5px;
   padding: 13px 23px;
   margin: 9px auto;
   &:focus{
    border:1px solid @bulue1;
    background: #f6fcff;
   }
  }
  .error{
   font-size: 14px;
   color: #ff6f4b;
   height: 18px;
   line-height: 18px;
   display: block;
  }
  button{
   width: 100%;
   height: 40px;
   border-radius: 5px;
   text-align: center;
   line-height: 40px;
   color: #ffffff;
   background: @bulue1;
   margin-top: 60px;
   font-size: 16px;
  }
  a{
   color: @bulue1;
   text-align: center;
   display: block;
   text-decoration: underline;
   margin-top: 10px;
   font-size: 14px;
  }
}
</style>
