<template>
    <div class="loginHead">
      <div class="logo">
        <h1>健康扶贫  健康干预方案提报系统</h1>
        <p>Health Assist Poverty Health Intervention Program Reporting System</p>
      </div>
      <div class="operating_btn">
        <router-link to="/">登陆</router-link>
        <router-link to="/" >注册</router-link>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.loginHead{
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
  .operating_btn{
    float: right;

    height: 58px;
    line-height: 58px;
    text-align: center;
    width: 350px;
    margin-right: 440px;
    a{
    color: #ffffff;
    margin: auto 20px;
    font-size: 14px;
    }
  }
}
</style>
