<template>
  <div class="HeadModuleBKTab">
    <div class="container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane 
          v-for="(item, index) in navData" 
          :key="index+1"
          :label="item.name" 
          :name="item.id"
        >
          <HeadModuleBK :contInfo="contInfo"></HeadModuleBK>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// 百科
import HeadModuleBK from './HeadModuleBK.vue'
export default {
  name: 'HeadModuleBKTab',
  props: {
    navData: Array,
    moreName: String,
    moreLInk: String,
    contInfo: Array
  },
  data() {
    return {
      activeName: '3',
      activeIndex: '1',
      activeIndex2: '1',
      contInfo: this.getConInfo(this.activeName)
    };
  },
  methods: {
    handleClick(tab) {
      this.getConInfo(this.activeName)
    },
    // 根据分类id获取内容
    getConInfo(categoryid){
      this.$http.get('/API/index.ashx?command=GetArticleByCategoryId&categoryid='+categoryid).then(function (res) {
        this.contInfo = res.body
      })
    }
  },
  components: {
    HeadModuleBK
  }
}
</script>
<style lang="scss">
.HeadModuleBKTab{
  .el-tabs__item.is-active{
    color: #ee6b03;
  }
  .el-tabs__item:hover{
    color: #ee6b03;
  }
  .el-tabs__active-bar{
    border-bottom: 3px solid #ee6b03;
  }
}
</style>
