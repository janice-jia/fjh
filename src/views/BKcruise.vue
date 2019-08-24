<template>
  <div class="company bkcruise">
    <div class="company-banner">
      <HeaderMenu></HeaderMenu>
      <img src="../assets/img/banner.jpg" alt=""/>
      <div class="com-search container">
        <el-input
          placeholder="如：北欧"
          v-model="searchVal">
        </el-input>
        <img class="com-search-btn" @click="getList" src="../assets/img/header/search.png" alt="">
      </div>
    </div>
    <div class="container">
      
      <div class="page">
        <div class="block">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageInfo.page"
            :page-size="pageInfo.limit"
            layout="prev, pager, next, jumper"
            :total="pageInfo.total">
          </el-pagination>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import HeaderMenu from '../components/HeaderMenu.vue'
export default {
  name:'Company',
  components: {
    HeaderMenu
  },
  data() {
    return {
      list: [],
      searchVal: '',
      activeIndex: 1,
      pageInfo: {
        page: 1,
        limit: 10,
        total: 0
      }
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
    getList(pageval){
      if(pageval) this.pageInfo.page = pageval
      var paramsData = {
        page: this.pageInfo.page,
        limit: this.pageInfo.limit
      }
      if(this.searchVal) paramsData.shipcompany = this.searchVal
      this.$http.get('/API/shipcompany.ashx?command=GetShipCompanyPager', {params: paramsData}).then(function (res) {
        this.list = res.body.list
        this.pageInfo.total = parseInt(res.body.count)
      })
    },
    handleSizeChange(val) {
      // console.log(`每页 ${limit} 条`);
      this.getList(val)
    },
    handleCurrentChange(val) {
      this.getList(val)
    },
    currentPage(){
      console.info(11)
    }
  }
}
</script>
<style lang="scss">
.bkcruise{
}
</style>
