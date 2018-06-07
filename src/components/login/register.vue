<template>
   <div class="registerbox">
    <h1>注册</h1>
    <div>
      <input type="text" placeholder="请输入手机号">
      <label class="error">请输入正确的手机号码！</label>
    </div>
    <div class="verificationCode">
      <input type="text" placeholder="请输入验证码">
      <div class="getcode">获取验证码</div>
      <label class="error"></label>
    </div>
    <div>
      <input type="text" placeholder="请输入密码">
      <label class="error"></label>
    </div>
    <div>
      <input type="text" placeholder="请确认密码">
      <label class="error"></label>
    </div>        
    <button type="submit">注册</button>
    <div><i class="iconfont" @click="checkde" :class="check?'icon-yduifuxuankuangxuanzhong':'icon-yduifuxuankuang'"></i>我已阅读并同意<router-link to="/useragreement">《用户协议》</router-link></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        check:true
    }
  },
 methods: {
   checkde(){
     if(this.check){
       this.check=false
     }else{
       this.check=true
     }
   }
 }
}
</script>

<style lang="less" scoped>
@bulue1:#3b7dff;
@border1:1px solid #d9d9d9;
.registerbox{
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
  div{
    margin: 6px auto;
    &.verificationCode{
      input{
        width: 60%;
        display: inline-block;
        border-radius: 5px 0 0 5px;
      }
      .getcode{
        background: @bulue1;
        border: #256dfb 1px solid;
        width: 40%;
        height: 40px;
        line-height: 40px;
        color: #ffffff;
        text-align: center;
        float: right;
        margin: 0;
        border-radius: 0px 5px 5px 0;
      }

    }
  input{
   width: 100%;
   height: 40px;
   border:@border1;
   border-radius: 5px;
   padding: 13px 23px;
   &:focus{
    border:1px solid @bulue1;
    background: #f6fcff;
   }
  }
  i{
    color: @bulue1;
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
   margin-top: 40px;
   font-size: 16px;
  }
  a{
   color: @bulue1;
   font-size: 14px;
  }
}
</style>
