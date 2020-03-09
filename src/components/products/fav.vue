<template>
  <div class="like">
    <h3>猜你喜欢</h3>
    <div class="recommed-list">
      <router-link :to="{name:'productDetail'}" class="recommend-item" v-for="(item,index) in   recommendList" :key="index">
        <div class="recommend-card-wrapper">
          <div class="img-box">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="info-box">
            <div class="title" title>{{item.title}}</div>
            <div class="score-line">
              <div class="score">
                <el-rate
                  v-model="item.score"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
              </div>
              <div class="comment-number">{{item.commentNum}}个评价</div>
            </div>
            <div class="desc-line">
              <div class="desc">{{item.areaName}}</div>
            </div>
            <div class="bottom-line">
              <div class="price-box">
                <span>
                  <span class="yuan">￥</span>
                  <span class="price-number numfont">{{item.avgPrice}}</span>
                  <span class="price-desc">起</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import api from '@/api/index'
export default {
  data () {
    return {
      recommendList: []
    }
  },
  created () {
    api.recommend().then(res => {
    //   console.log(res)
      this.recommendList = res.data.data
    })
  }
}
</script>
