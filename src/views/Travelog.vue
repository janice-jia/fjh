
<template>
  <div class="company travelog">
    <div class="company-banner">
      <HeaderMenu></HeaderMenu>
      <img src="../assets/img/banner.jpg" alt />
      <div class="com-search container">
        <el-input placeholder="如：丽星邮轮" v-model="searchVal"></el-input>
        <img class="com-search-btn" @click="getList" src="../assets/img/header/search.png" alt />
      </div>
    </div>
    <div class="container">
      <!-- 过滤选项 start -->
      <div class="travelog-filter">
        <el-row type="flex" justify="space-around">
          <el-col v-for="(item,index) in filter" :key="index">
            <div class="filter-option">
              <span>{{item.option}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 过滤选项 end -->
      <!-- 游记 item -->
      <div class="travelog-item">
        <el-row :gutter="30">
          <el-col :span="8">
            <div class="item-detail">
              <div class="item-img">
                <img :src="travelImg" />
                <div class="tag tag-lead">头条</div>
                <div class="tag tag-cream">精华</div>
              </div>
              <div class="item-info">
                <p>
                  张家界：左手长沙右手张家界，初探湘西武陵源
                  张家界：左手长沙右手张家界，初探湘西武陵源
                  张家界：左手长沙右手张家界，初探湘西武陵源
                  张家界：左手长沙右手张家界，初探湘西武陵源
                </p>
                <div class="item-active">
                  <span class="item-read">
                    <img :src="iconRead" />
                    <span>17856</span>
                  </span>
                  <span class="item-like">
                    <img :src="iconLik" />
                    <span>78</span>
                  </span>
                  <span class="item-comment">
                    <img :src="iconComment" />
                    <span>30</span>
                  </span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item-detail">
              <div class="item-img">
                <img :src="travelImg" />
              </div>
              <div class="item-info">
                <p>张家界：左手长沙右手张家界，初探湘西武陵源</p>
                <div class="item-active">
                  <span class="item-read">
                    <img :src="iconRead" />
                    <span>17856</span>
                  </span>
                  <span class="item-like">
                    <img :src="iconLik" />
                    <span>78</span>
                  </span>
                  <span class="item-comment">
                    <img :src="iconComment" />
                    <span>30</span>
                  </span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item-detail">
              <div class="item-img">
                <img :src="travelImg" />
              </div>
              <div class="item-info">
                <p>张家界：左手长沙右手张家界，初探湘西武陵源</p>
                <div class="item-active">
                  <span class="item-read">
                    <img :src="iconRead" />
                    <span>17856</span>
                  </span>
                  <span class="item-like">
                    <img :src="iconLik" />
                    <span>78</span>
                  </span>
                  <span class="item-comment">
                    <img :src="iconComment" />
                    <span>30</span>
                  </span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item-detail">
              <div class="item-img">
                <img :src="travelImg" />
              </div>
              <div class="item-info">
                <p>张家界：左手长沙右手张家界，初探湘西武陵源张家界：左手长沙右手张家界，初探湘西武陵源 张家界：左手长沙右手张家界，初探湘西武陵源 张家界：左手长沙右手张家界，初探湘西武陵源</p>
                <div class="item-active">
                  <span class="item-read">
                    <img :src="iconRead" />
                    <span>17856</span>
                  </span>
                  <span class="item-like">
                    <img :src="iconLik" />
                    <span>78</span>
                  </span>
                  <span class="item-comment">
                    <img :src="iconComment" />
                    <span>30</span>
                  </span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item-detail">
              <div class="item-img">
                <img :src="travelImg" />
              </div>
              <div class="item-info">
                <p>张家界：左手长沙右手张家界，初探湘西武陵源</p>
                <div class="item-active">
                  <span class="item-read">
                    <img :src="iconRead" />
                    <span>17856</span>
                  </span>
                  <span class="item-like">
                    <img :src="iconLik" />
                    <span>78</span>
                  </span>
                  <span class="item-comment">
                    <img :src="iconComment" />
                    <span>30</span>
                  </span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 游记 item end -->
      <!-- 分页 start -->
      <div class="page">
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
import travelImg from "../assets/logo.png";
import iconRead from "../assets/img/icon-1.png";
import iconLik from "../assets/img/icon-2.png";
import iconComment from "../assets/img/icon-3.png";
import HeaderMenu from "../components/HeaderMenu.vue";
export default {
  name: "Travelog",
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
        limit: 15,
        total: 0
      },
      filter: [
        { option: "全部" },
        { option: "国内" },
        { option: "亚洲" },
        { option: "欧洲" },
        { option: "北美洲" },
        { option: "大洋洲" },
        { option: "其他州" },
        { option: "和谁出行" },
        { option: "游记玩法" }
      ],
      travelImg: travelImg,
      iconRead: iconRead,
      iconLik: iconLik,
      iconComment: iconComment
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList(pageval) {
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
.travelog-filter {
  width: 1180px;
  height: 60px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.35);
  margin-top: 60px;
  padding: 20px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  & .el-col .filter-option {
    border-right: 1px solid #ccc;
  }
  & .el-col:last-child .filter-option {
    border: none;
  }
}
.travelog-item {
  width: 1180px;
  & .item-detail {
    margin-top: 30px;
    width: 100%;
    border: 1px solid #ccc;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
    position: relative;
    & .item-img {
      max-width: 100%;
      & .tag {
        position: absolute;
        left: 0;
        width: 54px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-size: 16px;
        padding-left: 10px;
        letter-spacing: 1px;
        border-radius: 0 30px 30px 0;
        &.tag-lead {
          top: 40px;
          background: orange;
        }
        &.tag-cream {
          top: 85px;
          background: orangered;
        }
      }
    }
    & .item-info {
      padding: 20px;
      & p {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      & .item-active {
        margin-top: 10px;
        font-size: 12px;
        color: gray;
        & span {
          margin-right: 10px;
          & img {
            margin-right: 5px;
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
