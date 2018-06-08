<template>
  <div>
    <textarea name="" id="" class="suggestInput" placeholder="请在此输入您宝贵的意见、建议及遇到的问题"></textarea>
    <div class="handle">
      <button>提交</button>
      <button>重置</button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
@bulue1:#3b7dff;
.suggestInput{
  width: 700px;
  height: 230px;
  padding: 17px 23px;
  background: #f5f5f5;
  border-radius: 10px;
  border:1px solid #e6e6e6;
}
.handle{
  width: 700px;
  margin: 20px auto;
  text-align: center;
  button{
    background: @bulue1;
    color: #ffffff;
    width: 168px;
    height: 36px;
    border-radius: 3px;
    font-size: 14px;
    margin: auto 20px;
  }
}
</style>
