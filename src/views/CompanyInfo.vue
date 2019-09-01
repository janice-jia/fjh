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
                  双子星号
                  <span>简介></span>
                </p>
                <p class="entit">Superstar Gemini</p>
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
              <div class="tag-item">吨位：asass</div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">载客：asass</div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">翻修：asass</div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">楼层：asass</div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">长度：asass</div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">宽度：asass</div>
            </el-col>
            <el-col :span="3">
              <div class="tag-item">船速：asass</div>
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
      <div class="detail detail-introduce">
        <div class="detail-title">舱房介绍</div>
        <el-tabs v-model="activeName">
          <el-tab-pane :label="'内舱房\n4类'" name="first">内舱房</el-tab-pane>
          <el-tab-pane :label="'海景房\n7类'" name="second">海景房</el-tab-pane>
          <el-tab-pane :label="'阳台房\n1类'" name="third">阳台房</el-tab-pane>
          <el-tab-pane :label="'套房\n2类'" name="fourth">
            <table style="width: 100%">
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
      <div class="detail detail-food">
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
      <div class="detail detail-play">
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
      <div class="detail detail-play">
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
      activeName: "fourth",
      activeName2: "second",
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
      ]
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList(pageval) {
      this.list = [];
      if (pageval) this.pageInfo.page = pageval;
      var paramsData = {
        page: this.pageInfo.page,
        limit: this.pageInfo.limit
      };
      if (this.searchVal) paramsData.shipcompany = this.searchVal;
      this.$http
        .get("/API/shipcompany.ashx?command=GetShipCompanyPager", {
          params: paramsData
        })
        .then(function(res) {
          this.list = res.body.list;
          this.pageInfo.total = parseInt(res.body.count);
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
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
  .detail {
    padding-top: 100px;
    padding-left: 1px;
    padding-right: 1px;
    .detail-title {
      font-size: 36px;
      text-align: center;
    }
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
    table {
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
}
</style>
