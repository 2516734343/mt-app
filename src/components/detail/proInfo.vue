<template>
  <div class="details clear">
    <el-col :span="16" class="d-left">
      <div class="name">
        <span>
          <b></b>
          食品安全档案
        </span>
        {{list.title}}
      </div>
      <div class="score clear">
        <div class="star-cont">
          <el-rate
            v-model="list.score"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
        </div>
        <p> {{list.score}}分
          <span> 人均￥{{list.avgPrice}}</span>
        </p>
      </div>
      <div class="address">
        <p>
          地址：
          {{list.address}}
          <b></b>
        </p>
        <p>
          电话：
          {{list.phone}}
        </p>
        <p>
          营业时间：
          {{list.businessTime}}
        </p>
      </div>
      <ul class="tags clear">
        <li>
          <img src="https://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png" />
          {{list.service[0]}}
        </li>
        <li>
          <img src="https://p1.meituan.net/codeman/4b1c5696fe5bf2c4d23fb01659b3e68b1960.png" />
          停车位
        </li>
      </ul>
    </el-col>
    <el-col :span="8" class="d-right">
      <div class="big">
        <div class="imgbox" style="height: 100%; width: 100%;">
          <img :src="list.imgUrl" />
        </div>
      </div>
      <ul>
        <li>
          <div class="imgbox" style="height: 100%; width: 100%;">
            <img
              src="https://img.meituan.net/msmerchant/577bcf9bdffd97cd25525687f9111ca0532105.jpg@92w_50h_1e_1c"
            />
          </div>
        </li>
        <li>
          <div class="imgbox" style="height: 100%; width: 100%;">
            <img
              src="https://img.meituan.net/msmerchant/04a09221ce616f88a1616b4363694dc8629298.jpg@92w_50h_1e_1c"
            />
          </div>
        </li>
        <li>
          <div class="imgbox" style="height: 100%; width: 100%;">
            <img
              src="https://img.meituan.net/msmerchant/eb0eaf01c67c7d67fcafebddd6eefb06579384.jpg@92w_50h_1e_1c"
            />
          </div>
        </li>
        <li>
          <div class="imgbox" style="height: 100%; width: 100%;">
            <img
              src="https://img.meituan.net/msmerchant/93150175333186ce7da83183cacc388f662406.jpg@92w_50h_1e_1c"
            />
          </div>
        </li>
      </ul>
    </el-col>
  </div>
</template>

<script>

export default {
    props:['list']
 
}
</script>
