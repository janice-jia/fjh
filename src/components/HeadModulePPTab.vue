<template>
  <div class="HeadModulePPTab">
    <div class="container linkbox">
      <el-tabs v-model="activeName" @tab-click="handleClick" value="1">
        <el-tab-pane 
          v-for="(item, index) in navData" 
          :key="index+1"
          :label="item.name" 
          :name="item.id"
        >
          <HeadModulePP :contInfoPP="contInfoPP"></HeadModulePP>
        </el-tab-pane>
      </el-tabs>

      <div class="link">
        <a href="comingSoon">{{moreName}}</a>
      </div>
    </div>
  </div>
</template>

<script>
// 品牌
import HeadModulePP from './HeadModulePP.vue'
export default {
  name: 'HeadModulePPTab',
  props: {
    navData: Array,
    moreName: String,
    moreLInk: String
  },
  data() {
    return {
      activeName: '1',
      activeIndex: '1',
      activeIndex2: '1',
      contInfoPP: []
    }
  },
  mounted(){
    this.getConInfo(this.activeName)
  },
  methods: {
    handleClick() {
      this.getConInfo(this.activeName)
    },
    // 根据分类id获取内容
    getConInfo(companyid){
      if(!companyid) return
      this.$http.get('/API/index.ashx?command=GetShipListByCompanyId&companyid='+companyid).then(function (res) {
        this.contInfoPP = res.body.list
      })
    }
  },
  components: {
    HeadModulePP
  }
}
</script>
<style lang="scss">
.HeadModulePPTab{
  .el-tabs__item.is-active{
    color: #ee6b03;
  }
  .el-tabs__item:hover{
    color: #ee6b03;
  }
  .el-tabs__active-bar{
    border-bottom: 3px solid #ee6b03;
  }

  .linkbox{
    position: relative;
    .el-tabs__header{
      max-width: 1050px;
    }

    .link{
      text-align: right;
      color:#333333;
      height: 40px;
      line-height: 40px;
      position:absolute;
      right: 0;
      top: 0;
      border-bottom:2px solid #E4E7ED;
      width: 200px;
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

  @media screen and (max-width: 650px) {
    .linkbox{
      .el-tabs__header{
        max-width: 360px;
      }
    }
  }
}
</style>
