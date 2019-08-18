<template>
  <div class="HeadModulePP">

    <el-carousel indicator-position="outside" :autoplay="false" trigger="click" arrow="nerver" height="600px">
      <el-carousel-item v-for="item in contInfoPP" :key="item.id">
        <div class="yl_pinpai container">
          <el-row>
            <el-col :span="15">
              <div class="pinPL">
                <div class="pinPL-img">
                  <img :src="item.imgurl" alt="">
                </div>
                <div class="pinPL-con">
                  <p class="tit">
                    {{item.shipname}}
                    <a href="">查看更多></a>
                  </p>
                  <p class="con">{{item.description}}</p>
                </div>
              </div>
            </el-col>
            <el-col :span="9">
              <ul>
                <li v-for="(vv, ii) in item.itinerarylist" :key="ii+1">
                  <div class="pinPR">
                    <div class="pinPR-img">
                      <img :src="vv.coverimg" alt="">
                    </div>
                    <div class="pinPR-name">{{vv.title}}</div>
                  </div>
                </li>
              </ul>
            </el-col>
          </el-row>
        </div> 
      </el-carousel-item>
    </el-carousel>

    
    
  </div>
</template>

<script>
export default {
  name: 'HeadModulePP',
  props: {
    contInfoPP: Array
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">
.pinPL,.pinPR{
  img{
    max-width: 100%;
    max-height: 540px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background: #e2d9d9
  }
}
.pinPL{
  padding-right: 40px;
  .pinPL-img{
    height: 440px;
    max-height: 440px;
    max-width: 100%;
    overflow: hidden;
    text-align: center;
  }
  .pinPL-con{
    height: 160px;
    overflow: hidden;
    background: #ffffff;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 0 20px;
    .tit{
      height: 50px;
      line-height: 50px;
      font-size: 26px;
      color: #333333;
      overflow: hidden;
      a{
        padding-top:7px;
        font-size: 14px;
        float: right;
        color: #ee6b03;
      }
    }
    .con{
      line-height: 25px;
      font-size: 14px;
      color: #666666;
    }
  }
}
.pinPR{
  height: 180px;
  margin-bottom: 30px;
  .pinPR-img{
    height: 130px;
  }
  .pinPR-name{
    height: 50px;
    line-height: 50px;
    background: #ffffff;
    font-size: 26px;
    color: #333333;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    text-align: center;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
.HeadModulePP{
  .el-carousel__indicators--outside{
    border: -10px;
  }
}
</style>
