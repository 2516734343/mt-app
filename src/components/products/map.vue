<template>
  <div class="map" id="map" :class="{'isFixed':isFixed}">
    <div class="myp"></div>
  </div>
</template>
<script>
import { TMap } from '@/TMap.js'
export default {
  // name:'news',
  data () {
    return {
    // 通过调用api获得当前具体的经纬度传入以下方法里
    //   longitude: 0, // 经度
    //   latitude: 0, // 纬度
    //   city: ''
      isFixed: false,
      offsetTop: 0
    }
  },
  mounted () {
    TMap('OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77').then(qq => {
      var center = new qq.maps.LatLng(39.916527, 116.397128)
      var map = new qq.maps.Map(document.getElementsByClassName('myp')[0], {
        // 地图的中心地理坐标。
        center: center,
        zoom: 8
      })
      // 创建marker
      var marker = new qq.maps.Marker({
        position: center,
        map: map
      })
    })

    window.addEventListener('scroll', this.initHeight)
    this.$nextTick(() => {
      // 获取对象相当于拌面或由offsetTop属性指定的福坐标的计算顶端位置
      this.offsetTop = document.getElementById('map').offsetTop
    })
  },
  methods: {
    initHeight () {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 如果被卷起来的高度大于吸顶元素到顶端位置的距离
      this.isFixed = scrollTop > this.offsetTop ? true : false
      console.log(this.isFixed)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.initHeight)
  }

}
</script>
