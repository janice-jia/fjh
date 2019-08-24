<template>
  <div class="company">
    <div class="company-banner">
      <HeaderMenu></HeaderMenu>
      <img src="../assets/img/banner.jpg" alt=""/>
      <div class="com-search container">
        <el-input
          placeholder="如：丽星邮轮"
          v-model="searchVal">
        </el-input>
        <img class="com-search-btn" @click="getList" src="../assets/img/header/search.png" alt="">
      </div>
    </div>
    <div class="container">
      <div class="companyItem" v-for="item in list" :key="item.id">
        <!-- 背景图 -->
        <div class="companyItem-bg">
          <img :src="item.coverimg" alt="">
          <!-- <div class="company-logo">
            <img src="../assets/img/com_logo.jpg" alt="">
          </div> -->
        </div>
        <div style="margin: 30px;">
          <el-row type="flex" class="row-bg"  justify="end" align="bottom">
            <el-col :span="7">
              <div class="company-tit">{{item.shipcompany}}</div>
            </el-col>
            <el-col :span="4">
              <div class="company-tit-2" >
                <div> 旗下船队 <span>{{item.shipcount}}</span> 条</div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="company-tit-2"  align="bottom">
                航线数量 <span>{{item.itinerarycount}}</span> 条
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="company-desc">{{item.description}}</div>
      </div>

      <div class="page">
        <div class="block">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageInfo.page"
            :page-size="pageInfo.limit"
            layout="prev, pager, next, jumper"
            :total="pageInfo.total">
          </el-pagination>
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
      pageInfo: {
        page: 1,
        limit: 10,
        total: 0
      }
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
    getList(pageval){
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
    },
    handleSizeChange(val) {
      // console.log(`每页 ${limit} 条`);
      this.getList(val)
    },
    handleCurrentChange(val) {
      this.getList(val)
    },
    currentPage(){
      console.info(11)
    }
  }
}
</script>
<style lang="scss">
.company-banner{
  position: relative;
  text-align: center;
  padding-bottom: 30px;
  img{
    max-width: 100%;
  }
  .com-search{
    height: 80px;
    padding: 10px;
    width: 1180px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    position: absolute;
    left: 50%;
    bottom: -5px;
    margin-left: -590px;
    input{
      background: #ededed;
      height: 60px;
      font-size: 24px;
      color: #cacaca;
    }
    .com-search-btn{
      position: absolute;
      right: 30px;
      bottom: 50%;
      margin-bottom: -12px;
      cursor: pointer;
    }
  }
}
.companyItem{
  box-shadow:5px 5px 5px rgba(0,0,0,.35);
  margin: 30px 0;
  // 背景图
  .companyItem-bg{
    position: relative;
    img{
      max-width: 100%;
      text-align: center;
      background: #d3dce6;
    }
    .company-logo{
      width: 358px;
      height: 116px;
      background: #d3dce6;
      position: absolute;
      left: 60px;
      bottom: -55px;
    }
  }

  .company-tit{
    font-size: 36px;
    color: #333333;
    text-align: center;
  }
  .company-tit-2{
    font-size: 16px;
    color: #ee6b03;
    span{
      font-size: 20px;
      padding: 3px;
    }
  }
  .company-desc{
    font-size: 14px;
    color:#333333;
    padding: 0 30px 30px 30px;
    line-height: 25px;
  }
}


// 分页
.page{
  width: 100%;
  text-align: center;
  .block{
    padding: 30px 0;
    text-align: center;
    display: inline-block;
    box-sizing: border-box;
    margin: 0 auto;
  }
}
</style>
