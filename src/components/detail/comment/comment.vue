<template>
  <div class="comment">
    <div class="total">
      <div class="sort">
        <span class="on">质量排序</span>
        <span class>时间排序</span>
      </div>
      {{commentList.commentNum}}条网友点评
    </div>
    <commen-detail :comList="commentList"/>
  </div>
</template>

<script>
// import total from './total.vue'
import commenDetail from './commenDeatil.vue'
export default {
  props: ['commentList'],
  components: {
    // total,
    commenDetail
  }
}
</script>
