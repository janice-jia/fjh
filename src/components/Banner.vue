<template>
  <div class="Banner">
    <div class="banner-nav">
      <div class="container">
        <el-row>
          <el-col :span="6">
            <img class="logo" src="../assets/img/header/logo.png" alt="">
          </el-col>
          <el-col :span="18">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">邮轮公司</el-menu-item>
              <el-menu-item index="3">邮轮航线</el-menu-item>
              <el-menu-item index="4">港口城市</el-menu-item>
              <el-menu-item index="5">邮轮百科</el-menu-item>
              <el-menu-item index="6">邮轮游记</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="banner-search">
      <div class="container">
        <el-row>
          <el-col :span="5">
            <el-select v-model="search.city" placeholder="出发城市">
              <el-option label="出发城市" value=""></el-option>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="5">
            <el-select v-model="search.time" placeholder="出发时间">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="5">
            <el-select v-model="search.line" placeholder="出发航线">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="5">
            <el-select v-model="search.yl" placeholder="热门游轮">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-input v-model="search.user" placeholder="如：游轮"></el-input>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-carousel :interval="8000" arrow="always" height="850px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imgurl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      bannerList:[],
      activeIndex: '1',
      activeIndex2: '1',
      city:[1,2,3],
      search:{}
    };
  },
  mounted(){
    this.getBannerList()
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getBannerList(){
      this.$http.get('/API/index.ashx?command=GetBannerImg').then(function (res) {
        // console.info('data', data)
        this.bannerList = res.body
      })
    }
  }
}
</script>
<style lang="scss">
.Banner{
  position: relative;
  height: 850px;
  background: #d3dce6;
  margin-bottom: 30px;
  .el-carousel__item{
    text-align: center;
  }
  .banner-img{
    max-height: 850px;
  }
  img{
    max-width: 100%;
  }
}
// 导航
.banner-nav{
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.3);
  .logo{
    width: 78px;
    height: 72px;
    margin-top: 14px;
  }
  .el-menu{
    background:none;
    font-size: 24px;
    color: #ffffff;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: none;
    .el-menu-item{
      height: 100px;
      line-height: 100px;
      color: #ffffff;
    }
    .is-active{
      background: #ee6b03;
      border-bottom: none;
      color: #ffffff;
    }
  }
}
// 搜索
.banner-search{
  position: absolute;
  .container{
    background: #ffffff;
    height: 60px;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    border-radius: 10px;
    padding: 10px 30px;
  }
  z-index: 10;
  width: 100%;
  bottom: -30px;
  height: 60px;
}
</style>
