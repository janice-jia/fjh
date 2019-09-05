<template>
  <div class="companyInfo">
    <div class="companyInfo-banner">
      <HeaderMenu activeIndex="2"></HeaderMenu>
      <img src="../assets/img/cominfo.jpg" alt />

      <div class="com-page-info">
        <!-- 标题，，，评分 -->
        <div class="info01">
          <el-row>
            <el-col :span="8">
              <div class="left">
                <img src="../assets/img/cominfologo.jpg" alt />
              </div>
            </el-col>
            <el-col :span="8">
              <div class="center">
                <p class="cntit">
                  {{baseInfo.shipname}}
                  <span>简介></span>
                </p>
                <!-- <p class="entit">Superstar Gemini</p> -->
              </div>
            </el-col>
            <el-col :span="8">
              <div class="right">
                <p class="pf">
                  4.3
                  <span>/分</span>
                </p>
                <p class="dp">353人点评</p>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- 简介 -->
        <div class="info02 comInfo">
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="3">
              <div class="tag-item">吨位：{{baseInfo.tonnage}}</div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">载客：{{baseInfo.guests}}</div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">翻修：{{baseInfo.overhaul}}</div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">楼层：{{baseInfo.floor}}</div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">长度：{{baseInfo.length}}</div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">宽度：{{baseInfo.width}}</div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">船速：{{baseInfo.speed}}</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="container infoCon changeWidth">
      <div class="info-tag">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="3">
            <div class="info-tag-item">舱房介绍</div>
          </el-col>
          <el-col :span="3">
            <div class="info-tag-item">海上美食</div>
          </el-col>
          <el-col :span="3">
            <div class="info-tag-item">邮轮玩乐</div>
          </el-col>
          <el-col :span="3">
            <div class="info-tag-item">甲板导航</div>
          </el-col>
          <el-col :span="3">
            <div class="info-tag-item">常见问题</div>
          </el-col>
          <el-col :span="3">
            <div class="info-tag-item">精选游记</div>
          </el-col>
          <el-col :span="3">
            <div class="info-tag-item">邮轮点评</div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="container infoDetail">
      <!-- 舱房介绍 -->
      <div class="detail detail-introduce fjh-tabs">
        <div class="detail-title">舱房介绍</div>
        <el-tabs v-model="activeName">
          <el-tab-pane :label="'内舱房\n4类'" name="first">内舱房</el-tab-pane>
          <el-tab-pane :label="'海景房\n7类'" name="second">海景房</el-tab-pane>
          <el-tab-pane :label="'阳台房\n1类'" name="third">阳台房</el-tab-pane>
          <el-tab-pane :label="'套房\n2类'" name="fourth">
            <table style="width: 100%" class="cangtable">
              <tr>
                <th width="220">图片</th>
                <th width="200">名称</th>
                <th width="130">容纳</th>
                <th width="150">楼层</th>
                <th width="170">面积</th>
                <th>窗型</th>
                <th></th>
              </tr>
              <tr v-for="(item,index) in tableData" :key="index">
                <td>
                  <div class="image">
                    <img :src="item.img" />
                  </div>
                </td>
                <td class="red">{{item.name}}</td>
                <td>{{item.container}}</td>
                <td>{{item.floor}}</td>
                <td>{{item.area}}</td>
                <td>{{item.window}}</td>
                <td class="red">详情 v</td>
              </tr>
            </table>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 海上美食 -->
      <div class="detail detail-food fjh-tabs">
        <div class="detail-title">海上美食</div>
        <el-tabs v-model="activeName2">
          <el-tab-pane :label="'自助餐厅\n2间'" name="first">自助餐厅</el-tab-pane>
          <el-tab-pane :label="'特色餐饮\n7间'" name="second">
            <div class="detail-item">
              <el-row type="flex">
                <el-col class="item-info" v-for="(item,index) in 3" :key="index">
                  <div class="image">
                    <img src />
                  </div>
                  <p class="info-title">红房子西餐厅</p>
                  <p>楼层：9 | 容纳：268 | 消费：免费</p>
                  <p>红房子西餐厅为游客提供中式及西式套餐</p>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="'酒吧\n2间'" name="third">酒吧</el-tab-pane>
        </el-tabs>
      </div>
      <!-- 邮轮玩乐 -->
      <div class="detail detail-play fjh-tabs">
        <div class="detail-title">邮轮玩乐</div>
        <el-tabs v-model="activeName2">
          <el-tab-pane :label="'船上娱乐\n14个'" name="first">自助餐厅</el-tab-pane>
          <el-tab-pane :label="'运动健身\n5个'" name="second">
            <div class="detail-item">
              <el-row type="flex">
                <el-col class="item-info" v-for="(item,index) in 3" :key="index">
                  <div class="image">
                    <img src />
                  </div>
                  <p class="info-title">按摩池</p>
                  <p>楼层：9 | 容纳：268 | 消费：免费</p>
                  <p>红房子西餐厅为游客提供中式及西式套餐</p>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="'海上休闲\n10个'" name="third">酒吧</el-tab-pane>
          <el-tab-pane :label="'其他\n2个'" name="third">酒吧</el-tab-pane>
        </el-tabs>
      </div>
      <!-- 甲板导航 -->
      <div class="detail detail-nav fjh-tabs">
        <div class="detail-title">甲板导航</div>
        <el-tabs v-model="activeName3">
          <el-tab-pane label="5层" name="first">
            <div class="detail-detail">
              <div class="image">
                <img src />
              </div>
              <div class="info">
                <div class="info-item">
                  <div class="title">船舱类型</div>
                  <div class="detail">
                    <div class="detail-item">
                      <p>内舱房</p>
                      <div class="room">DD</div>
                    </div>
                    <div class="detail-item">
                      <p>海景房</p>
                      <div class="room">CF</div>
                      <div class="room">CD</div>
                    </div>
                  </div>
                </div>
                <div class="info-item">
                  <div class="title">邮轮玩乐</div>
                  <div class="detail">
                    <div class="detail-item">
                      <p>无</p>
                    </div>
                  </div>
                </div>
                <div class="info-item">
                  <div class="title">甲板图例</div>
                  <div class="detail">
                    <div class="detail-item">
                      <p>残疾人舱房</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="6层" name="second">6层</el-tab-pane>
          <el-tab-pane label="7层" name="third">7层</el-tab-pane>
          <el-tab-pane label="8层" name="fourth">8层</el-tab-pane>
          <el-tab-pane label="9层" name="fifth">9层</el-tab-pane>
          <el-tab-pane label="10层" name="sixth">10层</el-tab-pane>
          <el-tab-pane label="11层" name="seventh">11层</el-tab-pane>
          <el-tab-pane label="12层" name="eighth">12层</el-tab-pane>
          <el-tab-pane label="13层" name="nine">13层</el-tab-pane>
        </el-tabs>
      </div>
      <!-- 常见问题 -->
      <div class="detail detail-problem">
        <div class="detail-title">常见问题</div>
        <div class="content">
          <div class="item" v-for="(item,index) in 3" :key="index">
            <div class="question">
              <div class="red tag">问</div>
              <div class="text">多大的儿童可以乘坐游轮？如何选择舱房？</div>
            </div>
            <div class="anwser">
              <div class="yellow tag">答</div>
              <div
                class="text"
              >6个月以上的儿童都可以乘坐邮轮旅行。请留意具体产品的优惠说明。6个月以上的儿童都可以乘坐邮轮旅行。请留意具体产品的优惠说明。6个月以上的儿童都可以乘坐邮轮旅行。请留意具体产品的优惠说明。</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 精选游记 -->
      <div class="detail detail-select">
        <div class="detail-title">精选游记</div>
        <div class="detail-item">
          <el-row type="flex" :gutter="30">
            <el-col :span="8" v-for="(item,index) in 3" :key="index">
              <div class="item-info">
                <div class="image">
                  <img src />
                </div>
                <div class="center">
                  <div class="photo">
                    <img src />
                  </div>
                  <p class="username">潘潘三条子</p>
                  <p class="time">2015-03-20</p>
                  <p class="title">深度探秘双子星丽星邮轮</p>
                  <p class="with">和谁：朋友</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderMenu from "../components/HeaderMenu.vue";
export default {
  name: "Company",
  components: {
    HeaderMenu
  },
  data() {
    return {
      list: [],
      searchVal: "",
      activeIndex: 1,
      baseInfo: {},
      activeName: "fourth",
      activeName2: "second",
      activeName3: "first",
      tableData: [
        {
          img: "",
          name: "行政套房 AA",
          container: "1-4人",
          floor: "11层",
          area: "28-29m²",
          window: "有阳台"
        },
        {
          img: "",
          name: "行政套房 AB",
          container: "1-4人",
          floor: "8-0层",
          area: "30-35m²",
          window: "方窗"
        }
      ],
      // 日程
      dayList: [],
      // 邮轮基本信息
      shipDetail: {},
      // 美食信息
      foodInfoList: [],
      // 娱乐信息
      amusementInfoList: [],
      // 购物信息
      shopInfoList:[],
      // 舱房信息
      cabinsInfoList: []
    };
  },
  mounted() {
    this.getBaseInfo();
    // 游轮详细信息
    this.getShipDetail(this.$route.params.id);
    // 邮轮美食信息
    this.getFoodInfoList(this.$route.params.id);
    // 邮轮娱乐信息
    this.getAmusementInfoList(this.$route.params.id);
    // 邮轮购物信息
    this.getShopInfoList(this.$route.params.id);
    // 邮轮舱房信息
    this.getCabinsInfoList(this.$route.params.id)
  },
  methods: {
    getBaseInfo(pageval) {
      this.baseInfo = [];
      var paramsData = {};
      if (this.$route.params.id) paramsData.shipid = this.$route.params.id;
      this.$http.get("/API/ship.ashx?command=GetBaseInfo", {params: paramsData}).then(function(res) {
        this.baseInfo = res.body;
      });
    },
    // 获取邮轮基本信息
    getShipDetail(shipid){
      if(!shipid) return
      this.$http.get("/API/ship.ashx?command=GetBaseInfo&shipid="+parseInt(shipid)).then(function(res) {
        this.shipDetail = res.body;
      });
    },
    // 获取邮轮美食
    getFoodInfoList(shipid){
      if(!shipid) return
      this.$http.get("/API/ship.ashx?command=GetFoodInfoList&shipid="+parseInt(shipid)).then(function(res) {
        this.foodInfoList = res.body;
      });
    },
    // 获取邮轮娱乐
    getAmusementInfoList(shipid){
      if(!shipid) return
      this.$http.get("/API/ship.ashx?command=GetAmusementInfoList&shipid="+parseInt(shipid)).then(function(res) {
        this.amusementInfoList = res.body;
      });
      
    },
    // 获取邮轮购物
    getShopInfoList(shipid){
      if(!shipid) return
      this.$http.get("/API/ship.ashx?command=GetShopInfoList&shipid="+parseInt(shipid)).then(function(res) {
        this.shopInfoList = res.body;
      });
    },
    // 获取邮轮仓房介绍
    getCabinsInfoList(shipid){
      if(!shipid) return
      this.$http.get("/API/ship.ashx?command=GetCabinsInfoList&shipid="+parseInt(shipid)).then(function(res) {
        this.cabinsInfoList = res.body;
      });
    }
  }
};
</script>
<style lang="scss">
.companyInfo-banner {
  position: relative;
  padding-bottom: 30px;
  img {
    max-width: 100%;
  }
  .com-page-info {
    height: 200px;
    padding: 30px;
    width: 1200px;
    background: #ffffff;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
    position: absolute;
    left: 50%;
    bottom: -65px;
    margin-left: -600px;
    .info01 {
      height: 120px;
      border-bottom: 1px solid #e5e5e5;
      .left {
        vertical-align: middle;
        img {
          max-width: 100%;
          max-height: 100%;
          height: 100px;
        }
      }
      .center {
        text-align: center;
        .cntit {
          font-size: 32px;
          color: #333333;
          span {
            font-size: 21px;
            color: #ee6b03;
          }
        }
        .entit {
          font-size: 18px;
          color: #999999;
        }
      }

      .right {
        text-align: right;
        .pf {
          text-align: right;
          font-size: 24px;
          color: #ee6b03;
          span {
            font-size: 18px;
            color: #666666;
          }
        }
        .dp {
          font-size: 14px;
          color: #999999;
          text-align: right;
        }
      }
    }
    .info02.comInfo {
      font-size: 16px;
      color: #999999;
      margin-top: 12px;
      .tag-item {
        text-align: center;
        border-right: 1px solid #e5e5e5;
      }
    }
  }
}

.companyInfo {
  .infoCon.changeWidth {
    padding: 0;
    margin-top: 100px;
    .info-tag {
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
      background: #ffffff;
      height: 100px;
      line-height: 100px;
      .info-tag-item {
        font-size: 28px;
        font-weight: normal;
        color: #333333;
      }
    }
  }
}
.container.infoDetail {
  margin-top: 30px;
  width: 1200px;
  background: #ffffff;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 50px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
  .detail {
    padding: 100px 1px 0 1px;
    .detail-title {
      font-size: 36px;
      text-align: center;
    }
  }
  .detail-introduce {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .detail-food,
  .detail-play {
    .el-tabs .el-tabs__header {
      padding-left: 300px;
    }
    .detail-item {
      width: 100%;
      margin-top: 30px;
      .item-info {
        border: 1px solid #eeeeee;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.35);
        margin-left: 30px;
        &:first-child {
          margin-left: 0;
        }
        .image {
          width: 100%;
          height: 210px;
          background: #ededed;
          img {
            max-width: 100%;
          }
        }
        p {
          padding-left: 20px;
          color: #333333;
          font-size: 18px;
          margin-bottom: 14px;
        }
        .info-title {
          margin-top: 20px;
          font-size: 24px;
          color: #333333;
        }
      }
    }
  }
  .detail-play .el-tabs .el-tabs__header {
    padding-left: 200px;
  }
  .detail-nav .el-tabs {
    .el-tabs__header {
      padding-left: 185px;
    }
    .el-tabs__item {
      padding: 0 25px;
      margin-bottom: 10px;
    }
    .detail-detail {
      height: 720px;
      width: 100%;
      margin-top: 40px;
      .image,
      .info {
        height: 100%;
        display: inline-block;
        float: left;
        background-color: #ffffff;
        border: 1px solid #e5e5e5;
      }
      .image {
        width: 770px;
        max-height: 720px;
        overflow-y: scroll;
        img {
          max-width: 100%;
        }
      }
      .info {
        width: 398px;
        padding: 0 30px;
        margin-left: 30px;
        max-height: 720px;
        overflow-y: scroll;
        .info-item {
          margin-top: 30px;
          width: 100%;
          .title {
            font-size: 24px;
            color: #333333;
            margin-bottom: 20px;
          }
          .detail {
            width: 100%;
            display: inline-block;
            padding-top: 0;
            .detail-item {
              margin-right: 60px;
              float: left;
              p {
                font-size: 20px;
                color: #666666;
                margin-bottom: 10px;
              }
              .room {
                width: 40px;
                height: 30px;
                line-height: 30px;
                font-size: 20px;
                text-align: center;
                color: #ffffff;
                background: #ee6b03;
                margin-right: 20px;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
  .detail-problem {
    .content {
      border: 1px solid #e5e5e5;
      width: 100%;
      max-height: 600px;
      overflow-y: scroll;
      margin-top: 40px;
      padding: 30px;
      .item {
        margin-bottom: 60px;
        width: 100%;
        .question,
        .anwser {
          margin-bottom: 20px;
          font-size: 24px;
          color: #333333;
          width: 100%;
          .tag {
            display: inline-block;
            width: 30px;
            height: 30px;
            font-size: 24px;
            color: #ffffff;
            line-height: 30px;
            text-align: center;
            float: left;
            margin-right: 10px;
            &.red {
              background: #ee6b03;
            }
            &.yellow {
              background: #f7ae0a;
            }
          }
          .text {
            display: inline-block;
            width: calc(100% - 40px);
          }
        }
        .anwser {
          font-size: 20px;
        }
      }
    }
  }
  .detail-select {
    .detail-item {
      margin-top: 60px;
      .item-info {
        border: 2px solid #e5e5e5;
        padding-bottom: 10px;
        .image {
          width: 100%;
          height: 210px;
          background: #e5e5e5;
          img {
            max-width: 100%;
          }
        }
        .center {
          text-align: center;
          margin-top: 60px;
          position: relative;
          .photo {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: #f7ae0a;
            position: absolute;
            top: -105px;
            left: 140px;
            img {
              max-width: 100%;
            }
          }
          p{
            margin-bottom: 5px;
          }
          .username {
            font-size: 20px;
          }
          .time,.with{
            font-size: 14px;
            color: #999999;
          }
          .title {
            font-size: 24px;
          }
        }
      }
    }
  }
}

// 公用start---------------------------------------
// 重新定义tab样式
.fjh-tabs{
  .el-tabs {
    margin-top: 40px;
    .el-tabs__header {
      text-align: center;
      padding-left: 250px;
    }
    .el-tabs__nav-wrap::after {
      background: none;
      width: 0;
    }
    .el-tabs__item {
      font-size: 24px;
      padding: 0 50px;
      margin-bottom: 45px;
      white-space: pre-line;
    }
    .is-active {
      border: none;
    }
  }
}
// 舱房table
.cangtable {
  margin-top: 50px;
  border-collapse: collapse;
  color: #333333;
  tr {
    border-bottom: 1px solid #e5e5e5;
    th {
      font-size: 20px;
      height: 40px;
      line-height: 40px;
      color: #999999;
      text-align: left;
      &:first-child {
        padding-left: 40px;
      }
    }
    td {
      height: 170px;
      font-size: 20px;
      .image {
        width: 200px;
        height: 150px;
        background-color: #ededed;
        img {
          max-width: 100%;
        }
      }
      &.red {
        color: #ee6b03;
      }
    }
  }
}
// 公用end-----------------------------------------

</style>
