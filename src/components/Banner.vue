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
          <el-col :span="24">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">首11页</el-menu-item>
              <el-menu-item index="2">邮轮22公司</el-menu-item>
              <el-menu-item index="3">邮轮33航线</el-menu-item>
              <el-menu-item index="4">港口城市</el-menu-item>
              <el-menu-item index="5">邮轮百科</el-menu-item>
              <el-menu-item index="6">邮轮游记</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </div>
    <img class="banner-img" src="../assets/img/header/banner.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="scss">
.Banner{
  position: relative;
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
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.3);
  .logo{
    max-width: 78px;
  }
  .el-menu{
    background:none;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: none;
  }
}
// 搜索
.banner-search{
  position: absolute;
  width: 100%;
  bottom: -50px;
  height: 100px;
}
</style>
