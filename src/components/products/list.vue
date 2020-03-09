<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active' :item.active}">{{item.name}}</li>
    </ul>
    <el-row>
        <item  v-for="(item,index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
import item from './item.vue'
export default {
  data () {
    return {
      nav: [
        {
          key: 's-default',
          name: '智能排序',
          active: true
        },
        {
          key: 's-price',
          name: '价格排序',
          active: false
        },
        {
          key: 's-sale',
          name: '人气最高',
          active: false
        },
        {
          key: 's-score',
          name: '评价最高',
          active: false
        }
      ],
      productList: []
    }
  },
  created () {
    api.goodsList().then(res => {
      // console.log(res)
      this.productList = res.data.data
    })
  },
  components: {
    item
  }
}
</script>

<style lang="scss">
</style>
