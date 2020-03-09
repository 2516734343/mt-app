<template>
  <div>
    <h3>商家团购及优惠</h3>
    <div class="deal-need-login">
      <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="登录查看" />
      <span>请登录后查看详细团购优惠</span>
      <button class="btn btn-default btn-clr-g">
        <router-link :to="{name:'login'}">立即登录</router-link>
        </button>
    </div>
  </div>
</template>
