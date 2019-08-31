<template>
  <div class="cityInfo">
    <div class="cityInfo-banner">
      <HeaderMenu activeIndex="2"></HeaderMenu>
      <img src="../assets/img/cityinfo.jpg" alt=""/>
      
      <div class="com-page-info">
        <!-- 标题，，，评分 -->
        <div class="info01">
          <el-row>
            <el-col :span="4">
              <div class="left">
                塔林<span>Tallinn</span>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="center">
                <el-row type="flex" class="row-bg" justify="left">
                  <el-col :span="6">
                    <div class="tag-item">
                      当地语言：asass
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="tag-item">
                      文化：asass
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="tag-item">
                      信仰：asass
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
        
        <!-- 简介 -->
        <div class="info02">
          塔林是800多年的历史的古城，也是欧洲面积最小的首都之一，1997年塔林古城被列入联合国世界遗产保护目录。塔林(Tallin)源于由“丹麦的”(Taani)和“城堡”(linna)，
意为“丹麦的地堡”。1219年丹麦人最早在此建立城堡，1227年-1346年被丹麦人占领了一百多年。1917年前又叫“列韦里”此名来源于丹麦语,意为“沙洲”或“暗礁”。
作为中世纪汉萨同盟的贸易城市，曾一度被德国贵族所主宰，然后便是苏俄的入侵。1991年爱沙尼亚恢复独立后重获新生，塔林亦成为首都。
        </div>
      </div>
    </div>

    <div class="container infoCon">
        <div class="info-tag">
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="3">
              <div class="info-tag-item">塔林老城</div>
            </el-col>
            <el-col :span="3">
              <div class="info-tag-item">塔林老城</div>
            </el-col>
            <el-col :span="3">
              <div class="info-tag-item">塔林老城</div>
            </el-col>
            <el-col :span="3">
              <div class="info-tag-item">塔林老城</div>
            </el-col>
            <el-col :span="3">
              <div class="info-tag-item">塔林老城</div>
            </el-col>
            <el-col :span="3">
              <div class="info-tag-item">塔林老城</div>
            </el-col>
            <el-col :span="3">
              <div class="info-tag-item">邮轮点评</div>
            </el-col>
          </el-row>
        </div>
        
        <div class="cityinfo-citys">
          <div class="cityinfo-citys-l">
            <!-- 幻灯片 -->
            <template>
              <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3>{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </template>
          </div>
          <div class="cityinfo-citys-r">
            <div class="tit">
              塔林老城<span>Tallinn premature</span>
            </div>
            <div class="con">
              塔林老城在1997年，被列为世界文化遗产，老城至今保存了比
较完好的中世纪城堡，城中保留了很多中世纪的教堂，城市很多
建筑也保持着中世纪风格。你可以沿着老城的城墙走走，感受这
座古城的味道，或者爬到城市的高点，看看这座老城的全貌。
            </div>
            <div class="desc">
              <p>游玩时间：建议游玩0.0小时</p>
              <p>地址：Vanalinn, Kesklinn, Tallinn</p>
            </div>
          </div>
        </div>
    </div>
    
  </div>
</template>
<script>
import HeaderMenu from '../components/HeaderMenu.vue'
export default {
  name:'Company',
  components: {
    HeaderMenu
  },
  data() {
    return {
      list: [],
      searchVal: '',
      activeIndex: 1,
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
    getList(pageval){
      this.list = []
      if(pageval) this.pageInfo.page = pageval
      var paramsData = {
        page: this.pageInfo.page,
        limit: this.pageInfo.limit
      }
      if(this.searchVal) paramsData.shipcompany = this.searchVal
      this.$http.get('/API/shipcompany.ashx?command=GetShipCompanyPager', {params: paramsData}).then(function (res) {
        this.list = res.body.list
        this.pageInfo.total = parseInt(res.body.count)
      })
    }
  }
}
</script>
<style lang="scss">
.cityInfo-banner{
  position: relative;
  padding-bottom: 30px;
  img{
    max-width: 100%;
  }
  .com-page-info{
    height: 200px;
    padding: 30px;
    width: 1200px;
    background: #ffffff;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    position: absolute;
    left: 50%;
    bottom: -65px;
    margin-left: -600px;
    .info01{
      height: 60px;
      border-bottom: 1px solid #e5e5e5;
      .left{
        font-size: 32px;
        color: #333333;
        span{
          font-size: 14px;
          color: #666666;
          margin-left: 20px;
        }
      }
      .center{
        text-align: center;
        padding-top: 20px;
        font-size: 16px;
        color: #999999;
        .tag-item{
          text-align: center;
          border-right: 1px solid #e5e5e5;
        }
      }
    }
    .info02{
      font-size: 16px;
      color: #999999;
      margin-top: 12px;
      line-height: 28px;
      height: 82px;
      overflow: hidden;
    }
  }
}

.cityInfo{
  .infoCon{
    margin-top: 100px;
    .info-tag{
      box-shadow:5px 5px 5px rgba(0,0,0,.35);
      background: #ffffff;
      height: 100px;
      line-height: 100px;
      .info-tag-item{
        font-size: 28px;
        font-weight: normal;
        color: #333333;
      }
    }
  }
}

.cityinfo-citys{
  margin-top: 30px;
  padding: 20px;
  height: 420px;
  box-shadow:5px 5px 5px rgba(0,0,0,.35);
  background: #ffffff;
  .cityinfo-citys-l{
    float: left;
    width: 730px;
  }
  .cityinfo-citys-r{
    float: right;
    width: 395px;
    margin-left: 10px;
    .tit{
      font-size: 26px;
      color: #333333;
      padding: 30px 0;
      border-bottom: 1px solid #ededed;
      span{
        font-size: 16px;
        color: #999999;
        margin-left: 20px;
      }
    }
    .con{
      margin: 30px 0;
      font-size: 14px;
      color: #999999;
      line-height: 25px;
      max-height: 130px;
      overflow: hidden;
    }
    .desc{
      margin-top:30px;
      p{
        font-size: 14px;
        color: #333333;
        line-height: 25px;
      }
    }
  }
}

// 幻灯片
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
