<template>
    <div>
        <tuangou />
        <recommend :rec="reList"/>
        <comment  :commentList="reList"/>
    </div>
</template>
<script>
import tuangou from './tuangou.vue'
import recommend from './recommend.vue'
import comment from './comment/comment.vue'
export default {
  props: ['reList'],
  components: {
    tuangou,
    recommend,
    comment
  }
}
</script>
