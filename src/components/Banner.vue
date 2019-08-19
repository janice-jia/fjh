<template>
  <div class="Banner">
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
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">邮轮公司</el-menu-item>
                <el-menu-item index="3">邮轮航线</el-menu-item>
                <el-menu-item index="4">港口城市</el-menu-item>
                <el-menu-item index="5">邮轮百科</el-menu-item>
                <el-menu-item index="6">邮轮游记</el-menu-item>
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
                <p class="appnav"><a href="">首页</a></p>
                <p class="appnav"><a href="">邮轮公司</a></p>
                <p class="appnav"><a href="">港口城市</a></p>
                <p class="appnav"><a href="">邮轮百科</a></p>
                <p class="appnav"><a href="">邮轮游记</a></p>
              </el-drawer>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="banner-search">
      <div class="container">
        <el-row>
          <el-col :span="5">
            <!-- 出发城市 -->
            <el-select v-model="search.city" placeholder="出发城市">
              <el-option-group
                v-for="group in cityList"
                :key="group.areaname"
                :label="group.areaname">
                <el-option
                  v-for="item in group.child"
                  :key="item.id"
                  :label="item.portname"
                  :value="item.id">
                </el-option>
              </el-option-group>
            </el-select>
          </el-col>
          <el-col :span="5">
            <!-- 出发航线 -->
            <el-select v-model="search.line" placeholder="出发航线">
              <el-option-group
                v-for="group in cityList"
                :key="group.areaname"
                :label="group.areaname">
                <el-option
                  v-for="item in group.child"
                  :key="item.id"
                  :label="item.portname"
                  :value="item.id">
                </el-option>
              </el-option-group>
            </el-select>
          </el-col>
          <el-col :span="5">
            <!-- 热门邮轮 -->
            <el-select v-model="search.yl" placeholder="热门邮轮">
              <el-option v-for="(item, index) in lineList" :key="index+1"  :label="item.shipcompany" :value="item.id"></el-option>
            </el-select>
          </el-col>
          <el-col :span="5">
            &nbsp;
            <!-- 目的地 -->
            <el-select v-model="search.bourn" placeholder="目的地">
              <el-option-group
                v-for="group in cityList"
                :key="group.areaname"
                :label="group.areaname">
                <el-option
                  v-for="item in group.child"
                  :key="item.id"
                  :label="item.portname"
                  :value="item.id">
                </el-option>
              </el-option-group>
            </el-select>
          </el-col>
          <el-col :span="4">
            <div class="ylInput">
              <el-input clear="" v-model="search.user" placeholder="请输入邮轮名称"></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-carousel :interval="8000" arrow="always">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imgurl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    lineList: Array
  },
  data() {
    return {
      // 侧栏菜单显示状态
      drawer: false,
      // 侧栏菜单方向，，，从右往左开
      direction:'rtl',
      bannerList:[],
      activeIndex: '1',
      activeIndex2: '1',
      city:[1,2,3],
      search:{},
      cityList: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }]
    };
  },
  mounted(){
    this.getBannerList(),
    this.getCityList()
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getCityList(){
      this.$http.get('/API/index.ashx?command=GetAreaCity').then(function (res) {
        console.info('res.body===', res.body)
        this.cityList = res.body.list
      })
    },
    getBannerList(){
      this.$http.get('/API/index.ashx?command=GetBannerImg').then(function (res) {
        // console.info('data', data)
        this.bannerList = res.body
      })
    }
  }
}
</script>
<style lang="scss">
.Banner{
  position: relative;
  height: 850px;
  background: #d3dce6;
  margin-bottom: 30px;
  .el-carousel__item{
    text-align: center;
  }
  .banner-img{
    max-height: 850px;
  }
  img{
    // max-width: 100%;
    max-height: 100%;
  }
  .el-carousel__container{
    height: 850px;
  }
  .appMenu{
    display: none;
    height: 100px;
    line-height: 100px;
    font-size: 34px;
    font-weight: bold;
    width: 100px;
    color: #ffffff;
    float: right;
    text-align: center;
    cursor: pointer;
  }
}
.appnav{
  padding: 10px;
  a{
    color: #333333;
  }
} 
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
}
// 搜索
.banner-search{
  position: absolute;
  .container{
    background: #ffffff;
    height: 60px;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    border-radius: 10px;
    padding: 10px 30px;
  }
  z-index: 10;
  width: 100%;
  bottom: -30px;
  height: 60px;
  // 搜索图标
  .el-icon-arrow-up::after{
    content: ' '!important;
    background: url(../assets/img/header/up.png) no-repeat;
    position: absolute;
    left: 5px;
    top: 50%;
    width: 20px;
    height: 10px;
    margin-top: -5px;
  }
  .el-input{
    border-right: #e5e5e5;
  }
  .el-input__inner{
    border:none;
  }
  .ylInput{
    input{
      background: #ededed;
    }
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
  .Banner{
    height: 425px;
    .banner-img{
      max-height: 425px;
    }
    .el-carousel__container{
      height: 425px;
    }
  }
}
</style>
