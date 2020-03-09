<template>
    <div class="p-youhui">
        <el-col :span="18">
            <btnLeft :reList="infoList"/>
        </el-col>
        <el-col :span="5">
            <like />
        </el-col>
    </div>
</template>
<script>
import btnLeft from './btnLeft.vue'
import like from '../products/fav.vue'
export default {
  props: ['infoList'],
  components: {
    btnLeft,
    like
  }
}
</script>
<style lang="sass">
@import '@/assets/css/public/fav.scss'
</style>
