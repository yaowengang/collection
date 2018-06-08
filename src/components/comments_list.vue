<template>
  <div class="commList">
    <div class="title">已提交的意见建议</div>
    <div class="sugCon">
      <div class="userinfo">
        <span class="name">张巧珍</span>
        <span class="profession">主任医师</span>
        <span class="time">2018.5.18</span>
      </div>
      <p class="content">希望增加中医方面的健康特征，比如中医体质，希望增加中医方面的特征比如中医体质</p>
      <div class="recovery">
        <div class="recoveryCon">
          <p><span>于良伟回复：</span>您的意见已收到，已反馈专家委员会</p>
          <p>系统管理员<span class="time">2018.5.18</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.commList{
  width: 1100px;
  background: #ffffff;
  min-height:420px;
  overflow: hidden;
  .title{
    width: 700px;
    margin:24px auto 10px;
    font-size: 18px;
    color: #666666;
    font-weight: bold;
  }
  .sugCon{
    width: 700px;
    margin: auto;
    .userinfo{
      color: #666666;
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      .name{
        font-weight: bold;
        font-size: 14px;
      }
      .profession{
        margin: auto 20px;
      }
    }
    .content{
      line-height: 30px;
      font-size: 14px;
      color: #666666;
    }
    .recovery{
      padding: 10px 20px;
      background: #f1f8fc;
      border-radius: 6px;
      position: relative;
      margin-top: 20px;
      .recoveryCon{
        margin:6px auto;
        p{
          margin: 10px auto;
          color: #165ce7;
          .time{
            margin-left: 20px;
          }
        }
      }
      &::after{
        content: '';
        position: absolute;
        top: -16px;
        left: 50px;
        border-left: 12px solid transparent;
        border-bottom:18px solid #f1f8fc;
        border-right: 12px solid transparent;
      }
    }
  }
}
</style>
