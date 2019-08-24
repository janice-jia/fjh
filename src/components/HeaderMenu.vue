<template>

<div class="banner-nav">
    <div class="container">
    <el-row>
        <el-col :span="6">
        <img class="logo" src="../assets/img/header/logo.png" alt="">
        </el-col>
        <el-col :span="18">
        <!-- pc菜单 -->
        <div class="pcMenu">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><router-link to="home" active-class="activeClass" target="_blank">首页</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="company" active-class="activeClass" target="_blank">邮轮公司</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="comingSoon" active-class="activeClass" target="_blank">邮轮航线</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="gkcity" active-class="activeClass" target="_blank">港口城市</router-link></el-menu-item>
          <el-menu-item index="5"><router-link to="bkcruise" active-class="activeClass" target="_blank">邮轮百科</router-link></el-menu-item>
          <el-menu-item index="6"><router-link to="comingSoon" active-class="activeClass" target="_blank">邮轮游记</router-link></el-menu-item>
          </el-menu>
        </div>
        <!-- app菜单 -->
        <div class="appMenu el-icon-more" icon="el-icon-more" @click="drawer = true">&nbsp;</div>

        <!-- 侧栏菜单 -->
        <div class="appMenuList">
            <el-drawer
            title="法嘉华"
            :visible.sync="drawer"
            :direction="direction">
            <p class="appnav"><router-link to="home" target="_blank">首页</router-link></p>
            <p class="appnav"><router-link to="company" target="_blank">邮轮公司</router-link></p>
            <p class="appnav"><router-link to="comingSoon" target="_blank">邮轮航线</router-link></p>
            <p class="appnav"><router-link to="gkcity" target="_blank">港口城市</router-link></p>
            <p class="appnav"><router-link to="bkcruise" target="_blank">邮轮百科</router-link></p>
            <p class="appnav"><router-link to="comingSoon" target="_blank">邮轮游记</router-link></p>
            </el-drawer>
        </div>
        </el-col>
    </el-row>
    </div>
</div>
     
</template>
<script>
export default {
  name: 'home',
  props: {
    activeIndex: String
  },
  data() {
    return {
      // 侧栏菜单显示状态
      drawer: false,
      // 侧栏菜单方向，，，从右往左开
      direction:'rtl',
    }
  },
  methods: {
    handleSelect(v){
      this.activeIndex = v
    }
  }
}
</script>
<style lang="scss">
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
  .pcMenu{
    a{
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
  .appMenu{
      display: none
  }
}

@media screen and (max-width: 650px) {
  .pcMenu{
    display: none!important;
  }
  .appMenu{
    display: block!important;
  }
  .logo{
    margin-left: 20px;
  }
  
}
</style>