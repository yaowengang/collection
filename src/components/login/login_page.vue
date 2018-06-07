<template>
  <div class="loginPage">
    <h1>欢迎回到！</h1>
    <h3>WELCOME</h3>
    <p>健康扶贫</p>
    <p>健康干预方案系统</p>
    <div class="register" @click="registerbtn">
      {{status}}
    </div>
    <h4>&copy;Health Assist Poverty </h4>
    <h4>Health Intervention Program Reporting System</h4>
    <loginBox class="loginbox" v-if="sta"></loginBox>
    <registerBox class="registerbox" v-else></registerBox>
  </div>
</template>

<script>
import loginBox from './login_box.vue'
import registerBox from './register.vue'

export default {
  data () {
    return {
      sta:true,
      status:"没有账号，立即注册&gt;&gt;"
    }
  },
  methods:{
    registerbtn(){
      if(this.sta){
        this.sta=false;
        this.status = "已有账号，立即登录&gt;&gt;"
      }else{
        this.sta=true;
        this.status = "没有账号，立即注册&gt;&gt;"        
      }
    }
  },
  components:{
    loginBox,
    registerBox
  }
}
</script>

<style lang="less" scoped>
@bulue1:#3b7dff;
.loginPage{
  width: 910px;
  height: 540px;
  background: url(../../assets/login.png) no-repeat;
  padding-left: 40px;
  padding-top: 70px;
  position: relative;
  margin: auto;
  margin-top: 100px;
  h1{
    font-size: 36px;
    color: @bulue1;
    font-weight: bold;
  }
  h3{
    font-size: 21px;
    color: @bulue1;
    opacity: 0.5; 
    margin-top: 15px;
    margin-bottom: 36px;
  }
  p{
    font-size: 24px;
    color: @bulue1; 
    line-height: 42px;
  }
  .register{
    text-decoration: underline;
    color: @bulue1;
    font-size: 14px;
    margin-top: 172px;
    display: block;
  }
  h4{
    font-size: 11px;
    color: @bulue1;
    font-weight: lighter;
    line-height: 24px;
  }
  .loginbox{
    position: absolute;
    right: 0;
    top: 0;
  }
  .registerbox{
    position: absolute;
    right: 0;
    top: 0;    
  }
}
</style>
