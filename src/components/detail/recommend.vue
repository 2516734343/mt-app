<template>
  <div class="recommend">
    <h3>推荐菜</h3>
    <div class="cont">
      <ul class="clear">
        <li>
          <div class="pic">
            <div class="imgbox" style="height: 100%; width: 100%;">
              <img
                src="https://img.meituan.net/msmerchant/e99b5e219f7c63fd5a6205fd01fd08b2163080.jpg@130w_130h_1e_1c"
              />
            </div>
            <div class="desc">
              <span class="truncate">麻辣牛肉</span>
              <b>￥28</b
              >
            </div>
          </div>
        </li>
        <li>
          <div class="pic">
            <div class="imgbox" style="height: 100%; width: 100%;">
              <img
                src="https://img.meituan.net/msmerchant/efb2399f7aeead1ee1a8ef18a1b8442f146686.jpg@130w_130h_1e_1c"
              />
            </div>
            <div class="desc">
              <span class="truncate">川西坝子–全家福</span>
            </div>
          </div>
        </li>
        <li>
          <div class="pic">
            <div class="imgbox" style="height: 100%; width: 100%;">
              <img
                src="https://img.meituan.net/msmerchant/09f6972fbccef7b8a498ec0f17626814139849.jpg@130w_130h_1e_1c"
              />
            </div>
            <div class="desc">
              <span class="truncate">鲜毛肚</span>
            </div>
          </div>
        </li>
        <li>
          <div class="pic">
            <div class="imgbox" style="height: 100%; width: 100%;">
              <img
                src="https://qcloud.dpfile.com/pc/vFd8YMNRQfU3-SDIaQe_oWIFZ5-z6RBVq4OLhTV2CAgLwkSAC8kXSFYMi29l17Qs5g_3Oo7Z9EXqcoVvW9arsw.jpg"
              />
            </div>
            <div class="desc">
              <span class="truncate">牛腱子肉</span>
            </div>
          </div>
        </li>
        <li>
          <div class="pic">
            <div class="imgbox" style="height: 100%; width: 100%;">
              <img
                src="https://img.meituan.net/msmerchant/3befe3b64ba9b99c1589658346c2bbbe120639.jpg@130w_130h_1e_1c"
              />
            </div>
            <div class="desc">
              <span class="truncate">鲜鱿鱼</span>
            </div>
          </div>
        </li>
        <li>
          <div class="pic">
            <div class="imgbox" style="height: 100%; width: 100%;">
              <img
                src="https://img.meituan.net/msmerchant/5e661d15af8ae1d7fa1570e182be994e113966.jpg@130w_130h_1e_1c"
              />
            </div>
            <div class="desc">
              <span class="truncate">鲜鱼</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="list clear">
        <span v-for="(item,index) in rec.recommend" :key="index">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rec']
}
</script>

<style lang="scss" scoped></style>
