<template>
  <div class="sugget-menu">
    <dl>
      <dt><i class="iconfont icon-yijian"></i><span>意见建议</span><i class="iconfont switch" :class="ok==true? 'icon-arrowdown':'icon-xiayiyeqianjinchakangengduo'" @click="switchs"></i></dt>
      <dd class="active" v-show="ok">我的意见建议</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ok:true
    }
  },
  methods: {
    switchs(){
      if(this.ok){
        this.ok = false
      }else{
        this.ok = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
@bulue1:#3b7dff;
.sugget-menu{
  width: 290px;
  background: #ffffff;
  min-height: 880px;
  dl{
    width: 100%;
    dt{
      width: 100%;
      padding-left: 40px;
      padding-right: 20px;
      color: @bulue1;
      font-size: 18px;
      height: 60px;
      line-height: 60px;
      .icon-yijian{
        float: left;
        font-size: 24px;
        font-weight: bold;
        margin: auto 15px;
      }
      span{
        font-size: 20px;
        font-weight: bold;
      }
      .switch{
        float: right;
      }
    }
    dd{
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding-right: 76px;
      text-align: right;
      color: @bulue1;
      font-size: 18px;      
      &.active{
        background: @bulue1;
        color: #ffffff;

      }
    }
  }
}
</style>
 