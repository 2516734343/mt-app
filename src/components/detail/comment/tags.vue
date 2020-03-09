<template>
  <div>
    <div class="list" v-for="(item, index) in infoList.comment" :key="index">
      <div class="header">
        <div class="imgbox" style="height: 100%; width: 100%;">
          <img
            :src="item.image"
          />
        </div>
      </div>
      <div class="info">
        <div class="name">{{item.username}}</div>
        <div class="date">
          <span>2019年11月12日</span>
        </div>
        <div class="source">
          <div class="star-cont">
            <el-rate
              v-model="item.rate"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
          </div>
        </div>
        <div
          class="desc">{{item.evalaute}}</div>
        <div class="reply">
          商家回复：谢谢您的光临 祝您身体健康 万事如意
        </div>
        <div class="noShowBigImg">
          <div>
            <div class="imageViewer-content com-image-viewer iconfont">
              <div class="imgs-content">
                <div class="paginatedThumbnails">
                  <div class="thumbnails">
                    <div class="thumbnail" v-for="(item,index) in item.pics" :key="index">
                      <img :src="item" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['infoList']
}
</script>
