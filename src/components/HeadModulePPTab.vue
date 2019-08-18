<template>
  <div class="HeadModulePPTab">
    <div class="container">
      <el-tabs @tab-click="handleClick" value="1">
        <el-tab-pane 
          v-for="(item, index) in navData" 
          :key="index+1"
          :label="item.name" 
          :name="item.id"
        >
          <HeadModulePP :ppType="item.id"></HeadModulePP>
        </el-tab-pane>
      </el-tabs>
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
      activeIndex2: '1'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log('tab====', tab);
      console.log('event====', event);
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
}
</style>
