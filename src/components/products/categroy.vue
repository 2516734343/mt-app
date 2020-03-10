<template>
    <div class="m-product-category">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item,index) in classicList" :key="index">
                <m-select  :name="item.title" :list="item.sub_list"/>
            </dd>
        </dl>
         <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="(item,index) in areaList" :key="index">
                <m-select  :name="item.title" :list="item.subList"/>
            </dd>
        </dl>
    </div>
</template>

<script>
import MSelect from './select.vue'
export default {
  data () {
    return {
      classicList: [{
        title: '美食',
        type: 'food',
        sub_list: [
          {
            name: '日本菜',
            id: 'Japan'
          },
          {
            name: '川菜',
            id: 'sichuan'
          }
        ]
      }, {
        title: '酒店住宿',
        type: 'hotel',
        sub_list: [
          {
            name: '主题酒店',
            id: 'topic'
          },
          {
            name: '经济酒店',
            id: 'eco'
          }
        ]
      }],
      areaList: [{

        title: '推荐商圈',

        subList: [{

          name: '望京',

          id: 120000

        }, {

          name: '昌平',

          id: 12222

        }]

      }]
    }
  },
  components: {
    MSelect
  }
}
</script>

<style lang="scss" >

</style>
