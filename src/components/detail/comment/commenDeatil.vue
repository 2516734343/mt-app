<template>
  <div class="com-cont">
        <ul class="tags clear">
      <li class>
        味道赞 (91)
      </li>
      <li class>
        服务热情 (87)
      </li>
      <li class>
        环境优雅 (67)
      </li>
      <li class>
        性价比高 (61)
      </li>
      <li class>
        菜品健康 (56)
      </li>
      <li class>
        价格实惠 (54)
      </li>
      <li class>
        回头客 (45)
      </li>
      <li class>
        到店自提 (1)
      </li>
      <li class>
        分量少 (5)
      </li>
      <li class>
        上菜慢 (3)
      </li>
    </ul>
    <Mtags  :infoList="comList"/>
  </div>
</template>

<script>
import Mtags from './tags.vue'
export default {
  props: ['comList'],
  components: {
    Mtags
  }
}
</script>

<style lang="scss" scoped></style>
