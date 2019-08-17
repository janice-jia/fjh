<template>
  <div class="Header">
    <div class="container">
      <el-row>
        <el-col :span="12">
          <el-row>
            <el-col :span="4">让旅行更幸福</el-col>
            <el-col :span="4"><img src="../assets/img/header/earth.png" alt=""></el-col>
            <el-col :span="4">
              <el-menu class="el-menu-demo" mode="horizontal">
                <el-submenu index="1">
                  <template slot="title">Language</template>
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
            <el-col :span="6">法嘉华官网</el-col>
            <el-col :span="6">法嘉华分销系统</el-col>
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
}
.el-header {
  padding: 0!important;
}
</style>
