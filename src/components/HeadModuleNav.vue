<template>
  <div class="HeadModuleNav">
    <el-row>
      <el-col :span="16">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item v-for="(item, index) in navData" :key="index">{{item}}</el-menu-item>
          <!-- <el-menu-item index="2">处理中心11</el-menu-item> -->
          <!-- <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
        </el-menu>
      </el-col>
      <el-col :span="8">
        <div class="link">
          <a href="moreLInk">{{moreName}}</a>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'HeadModuleNav',
  props: {
    navData: Array,
    moreName: String,
    moreLInk: String
  },
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
.HeadModuleNav{
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 30px!important;
  max-width: 100%;
  .el-menu--horizontal{
    border: none!important;
  }
  .el-menu{
    background: none;
    border: none;
  }
  .link{
    text-align: right;
    color:#333333;
    a{
      color:#333333;
      padding-right:22px;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        right: 0;
        top: 2px;
        width: 15px;
        height:15px;
        background: url("../assets/img/header/right.png") no-repeat;
        background-size: 12px;
      }
    }
  }
}
</style>
