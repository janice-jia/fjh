<template>
  <div class="HeadModulePP">
    <div class="yl_pinpai container">
      <el-row>
        <el-col :span="15">
          <div class="pinPL">
            <div class="pinPL-img">
              <img src="../assets/img/header/pinpai-2.jpg" alt="">
            </div>
            <div class="pinPL-con">
              <p class="tit">
                海洋量子号
                <a href="">查看更多></a>
              </p>
              <p class="con">海洋量子号不是一艘简单意义上的新船，她已经超越了人类的想象力，这是一座让你入海和上天的海
上国际大都市，在这里，童年的怀旧与明日的科技相逢。前一刻还在感叹眼前的一幕，顷刻已经进入
下一个完全不同的未来。海洋量子号，皇家加勒比国际邮轮量子船系的第一艘邮轮，将永远改变你邮
轮巡游的视野，带给你全新的海上体验！</p>
            </div>
          </div>
        </el-col>
        <el-col :span="9">
          <ul>
            <li>
              <div class="pinPR">
                <div class="pinPR-img">
                  <img src="../assets/img/header/pinpai-1.jpg" alt="">
                </div>
                <div class="pinPR-name">{{ppType}}==9天8晚 福冈+境港+海参崴</div>
              </div>
            </li>
            <li>
              <div class="pinPR">
                <div class="pinPR-img">
                  <img src="../assets/img/header/pinpai-1.jpg" alt="">
                </div>
                <div class="pinPR-name">9天8晚 福冈+境港+海参崴</div>
              </div>
            </li>
            <li>
              <div class="pinPR">
                <div class="pinPR-img">
                  <img src="../assets/img/header/pinpai-1.jpg" alt="">
                </div>
                <div class="pinPR-name">9天8晚 福冈+境港+海参崴</div>
              </div>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div> 
    
  </div>
</template>

<script>
export default {
  name: 'HeadModulePP',
  props: {
    ppType: String
  },
  data() {
    return {
      list: [],
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 游轮品牌
    getList(){
      this.$http.get('/API/index.ashx?command=GetShipListByCompanyId',{
        params:{
          companyid:'1'
        }
      }).then(function (res) {
        this.list = res.body
      })
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
  }
}
.pinPL{
  padding-right: 40px;
  .pinPL-img{
    height: 440px;
    max-height: 540px;
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
</style>
