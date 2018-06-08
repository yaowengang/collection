<template>
  <div class="logged">
    <i class="iconfont icon-xinfeng"></i>
    <div class="img_box">
      <img src="./../assets/avatar.png" alt="">
      <span>刚子</span>
    </div>
    <div class="esc">
      <i class="iconfont icon-guanbi"></i>
      退出登陆
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.logged{
  width: 360px;
  height: 30px;
  .icon-xinfeng{
    color: #ffffff;
    display: inline-block;
    font-size: 24px;
    vertical-align: top;
    height: 42px;line-height: 48px;
    text-align: center;
    width: 60px;
  }
  .img_box{
    display: inline-block;
    color: #ffffff;
    height: 42px;line-height: 42px;

    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: auto 6px;
    }
  }
  .esc{
    color: #ffffff;
    display: inline-block;
    margin-left: 40px;
    font-size: 14px;
    height: 42px;
    line-height: 42px;
    .icon-guanbi{
      margin: auto 8px;
    }
  }
}
</style>
