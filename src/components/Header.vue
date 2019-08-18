<template>
  <div class="Header">
    <div class="container">
      <el-row>
        <el-col :span="12">
          <el-row>
            <el-col :span="8">让旅行更幸福</el-col>
            <el-col :span="4">
              <el-menu class="fjh_lang" mode="horizontal">
                <el-submenu index="1">
                  <template slot="title"><img src="../assets/img/header/earth.png" alt="">Language</template>
                  <el-menu-item index="1-1">Language1</el-menu-item>
                  <el-menu-item index="1-2">Language2</el-menu-item>
                  <el-menu-item index="1-3">Language2</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col :span="16" class="rightTxt">法嘉华官网</el-col>
            <el-col :span="8" class="rightTxt">法嘉华分销系统</el-col>
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
  }
  .fjh_lang{
    img{
      padding-right: 10px;
    }
    .el-submenu__title{
      height: 45px!important;
      line-height: 45px!important;
    } 
  }
}
.el-header {
  padding: 0!important;
}
</style>
