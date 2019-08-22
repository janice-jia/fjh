<template>
  <div class="Header">
    <div class="container">
      <el-row>
        <el-col :span="12">
          <el-row>
            <el-col :span="8">让旅行更幸福</el-col>
            <el-col :span="4">
              <div class="fjh_lang">
                <el-menu mode="horizontal">
                  <el-submenu index="1">
                    <template slot="title"><img src="../assets/img/header/earth.png" alt="">Language</template>
                    <el-menu-item index="1-1"><router-link to="comingSoon" target="_blank">中文</router-link></el-menu-item>
                    <el-menu-item index="1-2"><router-link to="comingSoon" target="_blank">EN</router-link></el-menu-item>
                    <el-menu-item index="1-3"><router-link to="comingSoon" target="_blank">FR</router-link></el-menu-item>
                  </el-submenu>
                </el-menu>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row>
            <!-- <el-col :span="16" class="rightTxt"><router-link to="comingSoon" target="_blank">法嘉华官网</router-link></el-col> -->
            <el-col :span="16" class="rightTxt"><a href="http://www.opvoyage.com" target="_blank">法嘉华官网</a></el-col>
            <el-col :span="8"  class="rightTxt"><router-link to="comingSoon" target="_blank">法嘉华分销系统</router-link></el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.Header {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: #e5e5e5;
  .el-menu{
    background: none!important;
  }
  .rightTxt{
    text-align: right;
    a{
      color: #666666;
    }
  }
  .fjh_lang{
    img{
      padding-right: 10px;
    }
    .el-submenu__title{
      height: 45px!important;
      line-height: 45px!important;
    } 
    .el-menu-item{
      a{
        color: #666666!important;
      }
      text-align: center!important;
    }
  }
}
.el-header {
  padding: 0!important;
}
</style>
