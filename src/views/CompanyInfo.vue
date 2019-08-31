<template>
  <div class="companyInfo">
    <div class="companyInfo-banner">
      <HeaderMenu activeIndex="2"></HeaderMenu>
      <img src="../assets/img/cominfo.jpg" alt=""/>
      
      <div class="com-page-info">
        <!-- 标题，，，评分 -->
        <div class="info01">
          <el-row>
            <el-col :span="8">
              <div class="left">
                <img src="../assets/img/cominfologo.jpg" alt="">
              </div>
            </el-col>
            <el-col :span="8">
              <div class="center">
                <p class="cntit">双子星号  <span>简介></span></p>
                <p class="entit">Superstar Gemini</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="right">
                <p class="pf">4.3<span>/分</span></p>
                <p class="dp">353人点评</p>
              </div>
            </el-col>
          </el-row>
        </div>
        
        <!-- 简介 -->
        <div class="info02">
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="3">
              <div class="tag-item">
                吨位：asass
              </div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">
                载客：asass
              </div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">
                翻修：asass
              </div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">
                楼层：asass
              </div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">
                长度：asass
              </div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">
                宽度：asass
              </div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">
                船速：asass
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="container infoCon">
        <div class="info-tag">
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="3">
              <div class="info-tag-item">舱房介绍</div>
            </el-col>
            <el-col :span="3">
              <div class="info-tag-item">海上美食</div>
            </el-col>
            <el-col :span="3">
              <div class="info-tag-item">邮轮玩乐</div>
            </el-col>
            <el-col :span="3">
              <div class="info-tag-item">甲板导航</div>
            </el-col>
            <el-col :span="3">
              <div class="info-tag-item">常见问题</div>
            </el-col>
            <el-col :span="3">
              <div class="info-tag-item">精选游记</div>
            </el-col>
            <el-col :span="3">
              <div class="info-tag-item">邮轮点评</div>
            </el-col>
          </el-row>
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
.companyInfo-banner{
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
      height: 120px;
      border-bottom: 1px solid #e5e5e5;
      .left{
            vertical-align: middle;
            img{
              max-width: 100%;
              max-height: 100%;
              height: 100px;
            }
          }
          .center{
            text-align: center;
            .cntit{
              font-size: 32px;
              color: #333333;
              span{
                font-size: 21px;
                color: #ee6b03;
              }
            }
            .entit{
              font-size: 18px;
              color: #999999;
            }
          }
          
          .right{
            text-align: right;
            .pf{
              text-align: right;
              font-size: 24px;
              color: #ee6b03;
              span{
                font-size: 18px;
                color: #666666;
              }
            }
            .dp{
              font-size: 14px;
              color: #999999;
              text-align: right;
            }
          }
    }
    .info02{
      font-size: 16px;
      color: #999999;
      margin-top: 12px;
      .tag-item{
        text-align: center;
        border-right: 1px solid #e5e5e5;
      }
    }
  }
}

.companyInfo{
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
</style>
