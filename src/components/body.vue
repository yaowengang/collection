<template>
  <div class="body">
    <suggest class="suggest"></suggest>
    <div class="suggestdetails">
      <suggetBox class="suggetBox"></suggetBox>
      <commentsList class="commentsList"></commentsList>
    </div>
  </div>
</template>

<script>
import suggest from './suggest.vue'
import suggetBox from './suggert_box.vue'
import commentsList from './comments_list.vue'
export default {
  components: {
    suggest,
    suggetBox,
    commentsList
  }
}
</script>

<style lang="less" scoped>
.body{
  .suggest{
    display: inline-block;
    vertical-align: top;
  }
  .suggestdetails{
    display: inline-block;
    margin-left: 116px;
    .commentsList{
      margin-top: -16px;
    }
  }
}
</style>
