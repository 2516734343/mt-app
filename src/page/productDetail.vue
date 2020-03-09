<template>
    <div class="product-detail">
        <div class="p-crumbs">
            <crumbs />
        </div>
      <proInfo :list="proInfoList"/>
      <youHui :infoList="proInfoList"/>
    </div>
</template>

<script>
import api from '@/api/index.js'
import crumbs from '@/components/detail/crumbs.vue'
import proInfo from '@/components/detail/proInfo.vue'
import youHui from '@/components/detail/youhui.vue'
export default {
  data () {
    return {
      proInfoList: []
    }
  },
  created () {
    api.getDetail().then(res => {
      console.log(res)
      this.proInfoList = res.data.data
    })
  },
  components: {
    crumbs,
    proInfo,
    youHui
  }
}
</script>

<style lang="scss">
@import '@/assets/css/products/productDetail.scss'
</style>
