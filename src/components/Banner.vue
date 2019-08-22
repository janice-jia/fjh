<template>
  <div class="Banner">
    <HeaderMenu></HeaderMenu>
    <div class="banner-search">
      <div class="container">
        <el-row>
          <el-col :span="5">
            <!-- 出发城市 -->
            <el-button class="searchBtn" v-bind:class="{ active: isActiveCh }"  v-popover:popover1>{{isActiveChName}}</el-button>
            <div class="showdropList">
              <el-popover
                ref="popover1"
                placement="bottom-start"
                width="450"
                trigger="click"
                v-model="isActiveCh">
                <el-table :data="cityList">
                  <el-table-column width="80" property="areaname" label="出发城市"></el-table-column>
                  <el-table-column width="350">
                    <span @click="showSearchVal('isActiveCh', group.areaname)" v-for="group in cityList" :key="group.areaname">
                      {{group.areaname}}
                    </span>
                  </el-table-column>
                </el-table>
              </el-popover>
            </div>
          </el-col>
          <el-col :span="5">
            <!-- 出发航线 -->
            <el-button class="searchBtn" v-bind:class="{ active: isActiveHX }" v-popover:popover2>{{isActiveHXName}}</el-button>
            <div class="showdropList">
              <el-popover
                ref="popover2"
                placement="bottom-start"
                width="450"
                trigger="click"
                v-model="isActiveHX">
                <el-table :data="cityList">
                  <el-table-column width="80" property="areaname" label="出发航线"></el-table-column>
                  <el-table-column width="350">
                    <span @click="showSearchVal('isActiveHX', group.areaname)" v-for="group in cityList" :key="group.areaname">
                      {{group.areaname}}
                    </span>
                  </el-table-column>
                </el-table>
              </el-popover>
            </div>
          </el-col>

          <el-col :span="5">
            <!-- 热门邮轮 -->
            <el-button class="searchBtn" v-bind:class="{ active: isActiveYL }" v-popover:popover3>{{isActiveYLName}}</el-button>
            <div class="showdropList">
              <el-popover
                ref="popover3"
                placement="bottom-start"
                width="200"
                trigger="click"
                v-model="isActiveYL">
                <el-table :data="lineList">
                  <el-table-column
                    label="热门邮轮"
                    width="180">
                      <template slot-scope="scope">
                        <span style="width:90%; text-align:center;" @click="showSearchVal('isActiveYL', scope.row.shipcompany)" >
                          {{scope.row.shipcompany}}
                        </span>
                      </template>
                  </el-table-column>
                  <!-- <el-table-column width="120" v-for="group in lineList" :key="group.areaname" label="热门游轮">
                    <span style="width:90%; text-align:center;" @click="showSearchVal('isActiveYL', group.shipcompany)" >
                      {{group.shipcompany}}
                    </span>
                  </el-table-column> -->
                </el-table>
              </el-popover>
            </div>
            <!-- <el-select v-model="search.yl" placeholder="热门邮轮">
              <el-option v-for="(item, index) in lineList" :key="index+1"  :label="item.shipcompany" :value="item.id"></el-option>
            </el-select> -->
          </el-col>
          <el-col :span="5">
            &nbsp;
            <!-- 目的地 -->

            <el-button class="searchBtn" v-bind:class="{ active: isActiveMD }" v-popover:popover4>{{isActiveMDName}}</el-button>
            <div class="showdropList">
              <el-popover
                ref="popover4"
                placement="bottom-start"
                width="450"
                trigger="click"
                v-model="isActiveMD">
                <el-table :data="cityList">
                  <el-table-column width="80" property="areaname" label="目的地"></el-table-column>
                  <el-table-column width="350">
                    <span @click="showSearchVal('isActiveMD', group.areaname)" v-for="group in cityList" :key="group.areaname">
                      {{group.areaname}}
                    </span>
                  </el-table-column>
                </el-table>
              </el-popover>
            </div>

            <!-- <el-select v-model="search.bourn" placeholder="目的地">
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
            </el-select> -->
          </el-col>
          <el-col :span="4">
            <div class="ylInput">
              <el-input clear="" v-model="search.user" placeholder="请输入邮轮名称"></el-input>
              <router-link to="comingSoon" target="_blank">
                <img class="searchBtn" src="../assets/img/header/search.png" alt="">
              </router-link>
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
import HeaderMenu from './HeaderMenu.vue'
export default {
  name: 'Banner',
  props: {
    lineList: Array
  },
  components: {
    HeaderMenu
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
      cityList: [],
      isActiveCh:false,
      isActiveHX:false,
      isActiveYL:false,
      isActiveMD:false,
      isActiveChName:'出发城市',
      isActiveHXName:'出发航线',
      isActiveYLName:'热门游轮',
      isActiveMDName:'目的地',
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
    },
    showSearchVal(type, value){
      // console.info(type)
      this[type] = !this[type];
      this[type+'Name'] = value;
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
    border-right: 1px solid #e5e5e5;
  }
  .el-input__inner{
    border:none;
  }
  .ylInput{
    position: relative;
    .el-input{
      border: none;
    }
    .searchBtn{
      position: absolute;
      right: 8px;
      top: 50%;
      margin-top:-12px;
      width: 24px;
      height: 24px;
    }
    input{
      background: #ededed;
      padding-right: 30px;
      cursor: pointer;
    }
  }
}


@media screen and (max-width: 650px) {
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


// 搜索区域
.el-popper{
  height: 185px;
  overflow: auto;
}
.cell{
  vertical-align:top!important;
  font-size: 12px;
  font-size: #999999;
  span{
    display: inline-block;
    width: 60px;
    font-size: 12px;
    color: #333333;
    cursor: pointer;
  }
}

.searchBtn{
  border: none;
  position: relative;
  width: 80%;
  border:none!important;
  border-radius: none!important;
  &:hover{
    background: none;
  }
  &::before{
    content: ' '!important;
    background: url(../assets/img/header/down.png) no-repeat;
    position: absolute;
    right: 15%;
    top: 50%;
    width: 20px;
    height: 10px;
    margin-top: -5px;
  }
  &::after{
    position: absolute;
    content: ' '!important;
    right: 0;
    top:0;
    width: 100%;
    height: 100%;
    border-right: 1px solid #e5e5e5!important;
  }
}

.active{
  &::before{
    background: url(../assets/img/header/up.png) no-repeat;
  }
}
</style>
