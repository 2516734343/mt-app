<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <categroy />
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <left />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import crumbs from '@/components/products/crumbs.vue'
import categroy from '@/components/products/categroy.vue'
import list from '@/components/products/list.vue'
import left from '@/components/products/left.vue'
export default {
  components: {
    crumbs,
    categroy,
    list,
    left
  }
}
</script>
<style lang="scss">
@import '@/assets/css/products/index.scss';
@import '@/assets/css/public/fav.scss';
@import '@/assets/css/products/list.scss'
</style>
