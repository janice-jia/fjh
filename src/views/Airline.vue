<template>
  <div class="airline">
    <div class="company-banner">
      <HeaderMenu activeIndex="2"></HeaderMenu>
      <img src="../assets/img/banner.jpg" alt />
      <div class="com-search container">
        <el-input placeholder="如：丽星邮轮" v-model="searchVal"></el-input>
        <img class="com-search-btn" @click="getList('1')" src="../assets/img/header/search.png" alt />
      </div>
    </div>
    <div class="container">
      <div class="airline-filter">
        <div class="airline-filter-count">
          <p>
            共
            <span>{{ airlineCount }}</span>个产品
          </p>
          <el-tag
            v-for="tag in tags"
            :key="tag"
            closable
            @close="handleClose(tag)"
            type="info"
            color="#ffffff"
          >{{tag}}</el-tag>
        </div>
        <div class="airline-filter-city content">
          <p class="filter-title">出发城市：</p>
          <div class="filter-detail">
            <p class="hot">热门港口</p>
            <p v-for="item in hotCity" :key="item">{{ item }}</p>
          </div>
        </div>
        <div class="airline-filter-city content"></div>
        <div class="airline-filter-line content">
          <p class="filter-title">游轮航线：</p>
          <div class="filter-detail">
            <p v-for="item in lines" :key="item">{{ item }}</p>
          </div>
        </div>
        <div class="airline-filter-logo content">
          <p class="filter-title">游轮品牌：</p>
          <div class="filter-detail">
            <p v-for="item in logo" :key="item">{{ item }}</p>
          </div>
        </div>
        <div class="airline-filter-days content">
          <p class="filter-title">行程天数：</p>
          <div class="filter-detail">
            <p v-for="item in days" :key="item">{{ item }}</p>
          </div>
        </div>
        <div class="airline-filter-country content">
          <p class="filter-title">途经国家：</p>
          <div class="filter-detail">
            <p v-for="item in country" :key="item">{{ item }}</p>
          </div>
        </div>
      </div>
      <div class="airline-list">
        <div class="airline-item">
          <div class="airline-item-img">
            <img :src="airlineImg" />
          </div>
          <div class="airline-item-info">
            <p class="info-title">歌诗达邮轮【幸运号】 16天14晚 跟团游·亚洲风情全览(新加坡-兰卡威-新加坡-兰卡威新加坡-兰卡威新加坡-兰卡威新加坡-兰卡威)</p>
            <p class="address">北京出发 | 新加坡抵港</p>
            <p class="light">
              <span>推荐班期：</span> 2019 12-10 周二
            </p>
            <p class="light">
              <span>班期特色：</span>亚洲风情全览
            </p>
            <p class="light">
              <span>当前卖家：</span>北京七海假期国际旅行社有限公司
            </p>
            <div class="eval">
              <p>3764条评价</p>
              <p>
                <span>4.6</span>/5分
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="page" v-if="list.length > 0">
        <div class="block">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageInfo.page"
            :page-size="pageInfo.limit"
            layout="prev, pager, next, jumper"
            :total="pageInfo.total"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import airlineImg from "../assets/logo.png";
import HeaderMenu from "../components/HeaderMenu.vue";
export default {
  name: "Airline",
  components: {
    HeaderMenu
  },
  data() {
    return {
      list: [],
      searchVal: "",
      activeIndex: 1,
      pageInfo: {
        page: 1,
        limit: 10,
        total: 0
      },
      airlineImg: airlineImg,
      airlineCount: 474,
      tags: ["标签：上海"],
      hotCity: ["香港", "上海", "香港", "上海", "香港", "上海", "香港", "上海"],
      lines: [
        "日本航线",
        "东南亚航线",
        "港澳台航线",
        "阿拉斯加航线",
        "日本航线",
        "东南亚航线",
        "港澳台航线",
        "阿拉斯加航线"
      ],
      logo: [
        "皇家加勒比国际航线",
        "歌诗达邮轮",
        "公主邮轮",
        "皇家加勒比国际航线",
        "歌诗达邮轮",
        "公主邮轮"
      ],
      days: [
        "1~3天",
        "4~6天",
        "7~9天",
        "10~11天",
        "12~16天",
        "17~33天",
        "33天以上"
      ],
      country: ["亚洲", "欧洲", "北美洲", "南美洲", "大洋洲", "南极洲", "非洲"]
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
    },
    // 标签关闭
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    handleSizeChange(val) {
      // console.log(`每页 ${limit} 条`);
      this.getList(val);
    },
    handleCurrentChange(val) {
      this.getList(val);
    },
    currentPage() {
      console.info(11);
    }
  }
};
</script>
<style lang="scss">
.company-banner {
  position: relative;
  text-align: center;
  padding-bottom: 30px;
  img {
    max-width: 100%;
  }
  .com-search {
    height: 80px;
    padding: 10px;
    width: 1180px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
    position: absolute;
    left: 50%;
    bottom: -5px;
    margin-left: -590px;
    input {
      background: #ededed;
      height: 60px;
      font-size: 24px;
      color: #cacaca;
    }
    .com-search-btn {
      position: absolute;
      right: 30px;
      bottom: 50%;
      margin-bottom: -12px;
      cursor: pointer;
    }
  }
}
// 航线filter
.airline-filter {
  width: 1180px;
  margin-top: 60px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.35);
  & .airline-filter-count {
    padding-left: 30px;
    padding-right: 30px;
    height: 50px;
    line-height: 50px;
    background: rgba(238, 107, 3, 0.06);
    & p,
    .el-tag {
      display: inline-block;
      margin-right: 10px;
    }
    & p span {
      color: #ee6b03;
      font-size: 22px;
    }
  }
  & .content {
    margin-left: 30px;
    margin-right: 30px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e5e5e5;
    & .filter-title {
      display: inline-block;
      font-size: 14px;
      color: #333333;
      font-weight: 700;
    }
    & .filter-detail {
      display: inline-block;
      margin-left: 40px;
      font-size: 14px;
      color: #333333;
      & p {
        display: inline-block;
        margin-right: 40px;
      }
      & .hot {
        color: #999999;
      }
    }
  }
}
.airline-list {
  width: 1180px;
  & .airline-item {
    background: #ffffff;
    margin-top: 30px;
    height: 300px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.35);
    & .airline-item-img {
      width: 400px;
      height: 300px;
      display: inline-block;
    }
    & .airline-item-info {
      width: 780px;
      display: inline-block;
      font-size: 14px;
      position: relative;
      padding-right: 200px;
      padding-top: 30px;
      & .info-title {
        font-size: 22px;
        color: #333333;
      }
      & .address {
        margin-top: 15px;
        margin-bottom: 30px;
        color: #333333;
      }
       & .light {
        margin-bottom: 20px;
        color: #333333;
        & span {
          color: #999999;
        }
      }
      & .eval {
        position: absolute;
        top: 30px;
        right: 0;
        color: #999999;
        & p {
          display: inline-block;
          margin-right: 20px;
          & span {
            font-size: 22px;
            color: #ee6b03;
          }
        }
      }
    }
  }
}

// 分页
.page {
  width: 100%;
  text-align: center;
  .block {
    padding: 30px 0;
    text-align: center;
    display: inline-block;
    box-sizing: border-box;
    margin: 0 auto;
  }
}
</style>
