<template>
  <div class="company">
    <div class="company-banner">
      <HeaderMenu></HeaderMenu>
      <img src="../assets/img/banner.jpg" alt=""/>
      <div class="com-search container">
        <el-input
          placeholder="如：丽星邮轮"
          v-model="input21">
        </el-input>
        <img class="com-search-btn" src="../assets/img/header/search.png" alt="">
      </div>
    </div>
    <div class="container">
      
      <div class="companyItem">
        <!-- 背景图 -->
        <div class="companyItem-bg">
          <img src="../assets/img/com_item.jpg" alt="">
          <div class="company-logo">
            <img src="../assets/img/com_logo.jpg" alt="">
          </div>
        </div>
        <div style="margin: 30px;">
          <el-row type="flex" class="row-bg"  justify="end" align="bottom">
            <el-col :span="7">
              <div class="company-tit">丽星邮轮</div>
            </el-col>
            <el-col :span="4">
              <div class="company-tit-2" >
                <div> 旗下船队 <span>4</span> 条</div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="company-tit-2"  align="bottom">
                航线数量 <span>5</span> 条
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="company-desc">
          丽星邮轮凭借「自由闲逸式」航游概念、亚洲式殷勤周到的服务及高水平的国际安全标准，丽星邮轮受到旅游业界的高度认可，并屡获一系列的国际性奖项。其中，连续十
次荣获TTG ASIA颁发的「亚太区最佳邮轮公司」大奖，并于2008年起晋身「TTG旅游大奖荣誉堂」。
        </div>
      </div>
        

        <div class="companyItem">
        <!-- 背景图 -->
        <div class="companyItem-bg">
          <img src="../assets/img/com_item.jpg" alt="">
          <div class="company-logo">
            <img src="../assets/img/com_logo.jpg" alt="">
          </div>
        </div>
        <div style="margin: 30px;">
          <el-row type="flex" class="row-bg"  justify="end" align="bottom">
            <el-col :span="7">
              <div class="company-tit">丽星邮轮</div>
            </el-col>
            <el-col :span="4">
              <div class="company-tit-2" >
                <div> 旗下船队 <span>4</span> 条</div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="company-tit-2"  align="bottom">
                航线数量 <span>5</span> 条
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="company-desc">
          丽星邮轮凭借「自由闲逸式」航游概念、亚洲式殷勤周到的服务及高水平的国际安全标准，丽星邮轮受到旅游业界的高度认可，并屡获一系列的国际性奖项。其中，连续十
次荣获TTG ASIA颁发的「亚太区最佳邮轮公司」大奖，并于2008年起晋身「TTG旅游大奖荣誉堂」。
        </div>
      </div>

        <div class="page">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
          </el-pagination>
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
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage: 5
    };
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
// .page{

// }
</style>
