<template>
  <div class="HeadModuleYJ">
    <div class="yl_chengshi container">
      <div class="yl_yj">
        <img :src="contInfoYJ[0].coverimg" alt="">
      </div>

      <el-row :gutter="30">
      <el-col :span="8" v-for="item in contInfoPP" :key="item.id">
        <div class="yl_chengshi_img">
          <img :src="item.articletitle" alt="">
        </div>
        <div class="yl_chengshi_name">
          <p class="tit"><a href="">{{item.articletitle}}</a></p>
          <p class="con">{{item.articlecontent}}</p>
        </div>
      </el-col>
    </el-row>


    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadModuleYJ',
  props: {
    contInfoYJ: Array
  },
}
</script>
<style lang="scss">
.yl_chengshi{
  .yl_yj{
    img{
      max-width: 100%;
    }
  }

  // 第二部分
  .yl_chengshi_img{
    height: 230px;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  .yl_chengshi_name{
    color: #333333;
    height: 90px;
    padding: 0 8px;
    .tit{
      font-size: 24px;
      height: 40px;
      line-height: 40px;
      a{
        color: #333333;
      }
    }
    .con{
      font-size: 14px;
      line-height: 22px;
      color: #666666;
    }
    background: #ffffff;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
</style>
