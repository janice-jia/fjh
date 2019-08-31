<template>
  <div class="airLineInfo">
    <div class="companyInfo-banner">
      <HeaderMenu activeIndex="2"></HeaderMenu>
      <img src="../assets/img/cominfo.jpg" alt />

      <div class="com-page-info">
        <!-- 标题，评分 -->
        <div class="info01">
          <el-row>
            <el-col :span="4">
              <img src="../assets/img/cominfologo.jpg" alt />
            </el-col>
            <el-col :span="20">
              <p class="cntit">丽星邮轮·双子星号7天6晚目的地参团·【1元换购指定大交通B】厦门-宫吉岛（日本） -厦门深度游7天6晚</p>
            </el-col>
          </el-row>
        </div>

        <!-- 简介 -->
        <div class="info02">
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="10">
              <div class="tag-item">出发城市：上海</div>
            </el-col>
            <el-col :span="5">
              <div class="tag-item">出发时间：2019-09-24 周二出发</div>
            </el-col>
            <el-col :span="9">
              <div class="tag-item">旅行：国旅环球</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="container infoCon">
      <div class="info-tag">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="3" v-for="(item,index) in infoTagList" :key="index">
            <div class="info-tag-item">{{item}}</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 产品特色 -->
    <div class="container features">
      <div class="divider feature-title">
        <el-divider>产品特色</el-divider>
      </div>
      <div class="feature-detail">
        <p>体验闽南特色，一元换购指定大交通（单趟）</p>
        <p>行程特色：</p>
        <p v-for="(item,index) in featureList" :key="index">* {{item}}</p>
        <p>======================</p>
        <p class="red">一元换购以下城市前往厦门登船大交通动车车票一张（一人限购一张）</p>
        <p class="red">* 上海；嘉兴；杭州；绍兴；宁波；台州；温州，出发地前往厦门去程动车票（单程）。</p>
        <p>去程参考车次D2285</p>
        <p class="red">* 南昌；抚州；赣州，出发地前往厦门去程动车票（单程）。</p>
        <p>去程参考车次D2285</p>
        <p class="red">* 广州，东莞，深圳，出发地前往厦门去程动车票（单程）。</p>
        <p>去程参考车次D2285，深圳待定</p>
        <p class="red">* 武汉，黄石，出发地前往厦门去程动车票（单程）。</p>
        <p>去程参考车次D2285，深圳待定</p>
        <p class="red">***** 根据客人出发地选择以上其中一个城市出发动车二等座次车票（单程）</p>
        <p class="red">***** 厦门回程车票需要客户自理</p>
      </div>
      <div class="close">收起 ^</div>
    </div>
    <!-- 双子星号 -->
    <div class="container star">
      <div class="divider star-title">
        <el-divider>双子星号</el-divider>
      </div>
      <div class="star-detail">
        <p class="detail-intro">
          丽星邮轮全面翻新升级排水量达50,764吨的双子星号。工程耗资5,000万美元，包括升级导航系统、船身彩绘设计以及翻新船上的各项设施如客房、餐
          厅、娱乐及康乐设施、零售及美容服务场所等。为了让旅客享受更全面的度假体验，双子星号新增设的免税购物区可让客人选购各款名贵腕表、珠宝及
          手袋等等，为多采多姿的海上假...
          <span>了解更多 ></span>
        </p>
        <div class="star-tag">
          <el-menu :default-active="activeIndex" active-text-color="#ee6b03" mode="horizontal">
            <el-menu-item index="1">舱房介绍（4）</el-menu-item>
            <el-menu-item index="2">海上美食（11）</el-menu-item>
            <el-menu-item index="3">船上娱乐（22）</el-menu-item>
            <el-menu-item index="4">邮轮服务（1）</el-menu-item>
          </el-menu>
        </div>
        <div class="star-item">
          <el-row type="flex">
            <el-col class="star-item-info" v-for="(item,index) in 3" :key="index">
              <img src />
              <p class="info-title">红房子西餐厅</p>
              <p>楼层：9 | 容纳：268 | 消费：免费</p>
              <p>红房子西餐厅为游客提供中式及西式套餐</p>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 日程安排 -->
    <div class="container schedule">
      <div class="schedule-list">
        <img src />
        <div class="list-summary">
          <table cellspacing="0">
            <th>日期</th>
            <th>国家/城市</th>
            <th>
              抵达
              <span class="currTime">当地时间</span>
            </th>
            <th>
              起航
              <span class="currTime">当地时间</span>
            </th>
            <tr>
              <td>第1天（9月24日）</td>
              <td>中国，厦门</td>
              <td class="time"></td>
              <td class="time">23:00</td>
            </tr>
            <tr>
              <td>第2天（9月25日）</td>
              <td>海上巡游</td>
              <td class="time"></td>
              <td class="time"></td>
            </tr>
            <tr>
              <td>第3天（9月26日）</td>
              <td>日本，宫古岛</td>
              <td class="time">07:00</td>
              <td class="time">15:00</td>
            </tr>
            <tr>
              <td>第4天（9月27日）</td>
              <td>中国，厦门</td>
              <td class="time">18:00</td>
              <td class="time"></td>
            </tr>
          </table>
          <div class="tips">
            <p>
              <span>*</span>以上行程日期和时间均为当地时间，可能会因为天气、路况等原因做相应调整，请以最终的行程安排为准。
            </p>
          </div>
        </div>
      </div>
      <div class="schedule-detail">
        <div class="detail-title">
          <span class="left">DAY1</span>
          <span>丽星邮轮（东渡邮轮码头，中国）</span>
          <span class="right">2019年9月24日</span>
        </div>
        <div class="detail-info">
          <p>厦门 预计20:00-21:00登船 23：00离港</p>
          <p>前往厦门东渡国际邮轮码头搭乘丽星邮轮公司精心打造的“ 双子星号”，开始令人人难忘的海上旅程。</p>
          <p>温馨提醒：关闸时间为晚上21：00，请尽早抵达，如超过关闸时间还没办理完手续将被视为自动放弃，无法退回所缴费用。</p>
          <p>备注：根据抵达时间合理安排行程.可自由安排游览</p>
          <p class="breakfast">早餐：自理；午餐：自理；晚餐：邮轮上</p>
          <p>住宿：邮轮上</p>
        </div>
        <div class="detail-title">
          <span class="left">DAY2</span>
          <span>海上巡游</span>
          <span class="right">2019年9月25日</span>
        </div>
        <div class="detail-info">
          <p>公海</p>
          <p>
            今天您可以充分享受船上的休闲娱乐设施及各种美食，这里有24小时停不了的各种娱乐活动例如晨运、甲板上学习健身操、社交舞或到健身中心学
            习如何使用各种健身器械，在柔和的阳光下，您可以去游泳、享受日光浴，到按摩池里舒解压力，您还可选择观赏电影、切磋牌艺或卡拉OK大展歌
            艺，每晚您还可以欣赏来自世界各地歌舞艺员表演的精彩节目。不论您属于哪种个性，总能找到适合自己的休闲娱乐项目。
          </p>
          <p class="breakfast">早餐：邮轮上；午餐：邮轮上；晚餐：邮轮上</p>
          <p>住宿：邮轮上</p>
        </div>
        <div class="detail-title">
          <span class="left">DAY3</span>
          <span>丽星邮轮（八重山群岛港，日本）</span>
          <span class="right">2019年9月26日</span>
        </div>
        <div class="detail-info">
          <p>厦门 预计20:00-21:00登船 23：00离港</p>
          <p>前往厦门东渡国际邮轮码头搭乘丽星邮轮公司精心打造的“ 双子星号”，开始令人人难忘的海上旅程。</p>
          <p>温馨提醒：关闸时间为晚上21：00，请尽早抵达，如超过关闸时间还没办理完手续将被视为自动放弃，无法退回所缴费用。</p>
          <p>备注：根据抵达时间合理安排行程.可自由安排游览</p>
          <p class="breakfast">早餐：自理；午餐：自理；晚餐：邮轮上</p>
          <p>住宿：邮轮上</p>
        </div>
      </div>
    </div>
    <!-- 费用说明 -->
    <div class="container price">
      <div class="divider price-title">
        <el-divider>费用说明</el-divider>
      </div>
      <div class="price-include">
        <div class="title">费用包含</div>
        <div class="detail">
          <ul>
            <li v-for="(item, index) in priceInclude" :key="index">{{item}}。</li>
          </ul>
        </div>
      </div>
      <div class="price-exclude">
        <div class="title">费用不包含</div>
        <div class="detail">
          <ul>
            <li v-for="(item, index) in priceInclude" :key="index">{{item}}。</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 出行步骤 -->
    <div class="container step">
      <div class="divider step-title">
        <el-divider>出行步骤</el-divider>
      </div>
    </div>
    <!-- 预定须知 -->
    <div class="container book">
      <div class="divider book-title">
        <el-divider>预定须知</el-divider>
      </div>
      <div class="book-item">
        <div class="title">
          <el-menu default-active="1" class="el-menu-vertical">
            <el-menu-item index="1">
              <span slot="title">预定限制</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">退改说明</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">支付方式</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">出行说明</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="detail">
          <ul>
            <li v-for="(item, index) in priceInclude" :key="index">{{item}}。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderMenu from "../components/HeaderMenu.vue";
export default {
  name: "airLineInfo",
  components: {
    HeaderMenu
  },
  data() {
    return {
      list: [],
      searchVal: "",
      activeIndex: 1,
      infoTagList: [
        "产品特色",
        "行程介绍",
        "费用说明",
        "签证说明",
        "出行步骤",
        "预定须知",
        "用户点评"
      ],
      featureList: [
        "畅游日本，感受不一样的日本之旅，邂逅美丽海岛；",
        "畅游日本，感受不一样的日本之旅，邂逅美丽海岛；",
        "畅游日本，感受不一样的日本之旅，邂逅美丽海岛；",
        "畅游日本，感受不一样的日本之旅，邂逅美丽海岛；",
        "畅游日本，感受不一样的日本之旅，邂逅美丽海岛。"
      ],
      activeIndex: "2",
      priceInclude: [
        "领队服务费（厦门接站开始）",
        "行程中所示的陆地段游览、用车及景点门票（注明自费的除外）",
        "行程内所列餐食（行程中特别注明须自理的除外）",
        "邮轮港务费、燃油附加费",
        "丽星邮轮双子星船票（含3晚住宿、指定餐厅免费膳食、指定的船上设施、船上娱乐节目及活动）",
        "邮轮港务费 599元/人",
        "日本岸上观光税1000日元/人",
        "住宿：厦门经济型酒店（准三）住宿三晚。（不提供自然单间，产生单房差客人自理，我社有权安排三人间（或加床）、拼住或由客人补单房差（房差：280元/人，该费用不包含）；福建省的酒店均要求：14:00办理入住手续，12:00办理退房手续，由于个人原因，需要提前办理入住或推迟退房而产生的费用自行承担）",
        "用餐：三早一正（正餐标20元/人/餐，八菜一汤，十人一桌，根据客人人数情况酌情安排房费中所含早餐，若客人不用，费用不退；客人在旅游期间因自身原因不用正餐，费用不退）",
        "门票：行程所列景点首道门票（以上景点的游览时间及顺序仅供参考，行程视情况调整）",
        "用车：当地空调旅游拼车（福建省内用车均需要套团，且散拼形式不保证一车到底）",
        "保险：旅行社责任险（具体解释权归保险公司）；建议游客自行购买旅游人身意外保险",
        "导服：全程优秀国语导游",
        "购物：全程安排2次购物（约120分钟/店），丝绸文化馆、乳胶平买商城、珠宝平买商城、金门厨具展示馆4选2（自愿购物，敬请配合）"
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
  img {
    max-width: 100%;
  }
  .com-page-info {
    width: 1200px;
    padding-top: 10px;
    background: #ffffff;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
    position: absolute;
    left: 50%;
    margin-left: -600px;
    .info01 {
      border-bottom: 1px solid #e5e5e5;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      .cntit {
        padding-top: 20px;
        font-size: 26px;
        color: #333333;
        .entit {
          font-size: 18px;
          color: #999999;
        }
      }
    }
    .info02 {
      font-size: 16px;
      color: #999999;
      margin-top: 25px;
      .tag-item {
        text-align: center;
        border: none;
      }
    }
  }
}

.airLineInfo {
  .infoCon {
    margin-top: 100px;
    width: 1220px;
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
// 产品特色
.features,
.star,
.price,
.step,
.book {
  margin-top: 30px !important;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
  background: #ffffff;
  .divider {
    padding-top: 85px;
    padding-bottom: 42px;
    padding-left: 20px;
    padding-right: 20px;
    color: #333333;
    .el-divider__text {
      font-size: 36px;
    }
  }
}
.features {
  .feature-detail {
    padding-left: 110px;
    font-size: 18px;
    color: #333333;
    p {
      margin-bottom: 18px;
      &.red {
        color: #fa2f0a;
      }
    }
  }
  .close {
    text-align: center;
    font-size: 18px;
    margin-top: 60px;
    padding-bottom: 30px;
  }
}
.star {
  padding-bottom: 60px !important;
  .star-detail {
    .detail-intro {
      padding-left: 110px;
      padding-right: 110px;
      font-size: 14px;
      color: #999999;
      & span {
        color: #ee6b03;
      }
    }
    .star-tag {
      margin-top: 50px;
      padding-bottom: 50px;
      padding-left: 110px;
      padding-right: 110px;
      .el-menu {
        border-bottom: none;
        .el-menu-item {
          font-size: 24px;
          color: #333333;
          padding: 0;
          margin-left: 35px;
          margin-right: 35px;
          text-align: center;
        }
      }
    }
    .star-item {
      margin-left: 20px;
      width: 100%;
      .star-item-info {
        width: 360px;
        border: 1px solid #eeeeee;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.35);
        margin-right: 30px;
        img {
          width: 100%;
          height: 210px;
        }
        p {
          padding-left: 20px;
          color: #999999;
          font-size: 16px;
          margin-bottom: 14px;
        }
        .info-title {
          font-size: 24px;
          color: #333333;
        }
      }
    }
  }
}
.schedule {
  margin-top: 30px !important;
  padding: 30px !important;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
  background: #ffffff;
  .schedule-list {
    height: 342px;
    img {
      width: 606px;
      height: 100%;
      float: left;
    }
    .list-summary {
      display: inline-block;
      table {
        margin-left: 10px;
        color: #333333;
        width: 524px;
        th {
          font-size: 16px;
          text-align: left;
          height: 50px;
          line-height: 50px;
          border: none;
          padding-left: 20px;
          background: #f2f2f2;
          .currTime {
            color: #999999;
            font-size: 14px;
          }
        }
        tr {
          height: 54px;
          line-height: 54px;
          font-size: 14px;
          td {
            padding-left: 20px;
            &.time {
              text-align: center;
            }
          }
        }
      }
      .tips {
        font-size: 14px;
        color: #999999;
        width: 524px;
        padding-left: 30px;
        margin-top: 20px;
        span {
          color: #fa2f0a;
        }
      }
    }
  }
  .schedule-detail {
    .detail-title {
      margin-top: 30px;
      margin-bottom: 30px;
      height: 50px;
      line-height: 50px;
      background: #f2f2f2;
      border: 1px solid #e5e5e5;
      font-size: 20px;
      color: #333333;
      text-align: center;
      position: relative;
      .left,
      .right {
        position: absolute;
      }
      .left {
        left: 30px;
      }
      .right {
        right: 30px;
      }
    }
    .detail-info {
      padding-left: 30px;
      font-size: 16px;
      line-height: 32px;
      color: #333333;
      .breakfast {
        margin-top: 32px;
      }
    }
  }
}
.price-include,
.price-exclude {
  color: #333333;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 100px;
  .title {
    margin-right: 50px;
    display: inline-block;
    font-size: 20px;
    width: 100px;
    float: left;
  }
  .detail {
    display: inline-block;
    font-size: 18px;
    line-height: 32px;
    width: 830px;
    ul li {
      list-style: disc;
    }
  }
}
.book-item {
  padding-left: 20px;
  .title,
  .detail {
    display: inline-block;
  }
  .title {
    margin-right: 50px;
    width: 160px;
    float: left;
    .el-menu {
      border-right: none;
      .el-menu-item {
        font-size: 26px;
        border-bottom: 1px solid #e5e5e5;
        &:hover {
          background: #ffffff;
        }
      }
    }
  }
  .detail {
    width: 950px;
    font-size: 18px;
    color: #333333;
    line-height: 32px;
    padding-bottom: 60px;
    ul li {
      list-style: disc;
    }
  }
}
</style>
