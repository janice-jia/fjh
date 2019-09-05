<template>
  <div class="traveloginfo">
    <div class="traveloginfo-banner">
      <HeaderMenu activeIndex="6"></HeaderMenu>
      <img src="../assets/img/bkcruiseinfo.jpg" alt />

      <div class="com-page-info">
        <!-- 标题，，， -->
        <div class="left">
          <div class="info01">成都今夜请将我遗忘</div>

          <!-- 时间 -->
          <div class="info02">2019.08.27</div>
          <div class="tag">
            <div class="toutiao">头条</div>
            <div class="jinghua">精华</div>
          </div>
        </div>
        <div class="right">
          <!-- 标题，，， -->
          <div class="like">
            <el-row :gutter="10">  
              <el-col :span="5">
                <img src="../assets/img/yjicon01.png" alt />
                <span>收藏</span>
              </el-col>
              <el-col :span="6">
                <img src="../assets/img/yjicon02.png" alt />
                <span>喜欢22</span>
              </el-col>
              <el-col :span="6">
                <img src="../assets/img/yjicon03.png" alt />
                <span>评论2</span>
              </el-col>
              <el-col :span="7">
                <img src="../assets/img/yjicon04.png" alt />
                <span>浏览4083</span>
              </el-col>
            </el-row>
          </div>
          <div class="time">
            <el-row :gutter="20">
              <el-col :span="13">
              <img src="../assets/img/yjicon05.png" alt />
              <span>天数：11天</span></el-col>
              <el-col :span="11">
              <img src="../assets/img/yjicon06.png" alt />
              <span>时间：8月</span></el-col>
            </el-row>
          </div>
          <div class="with">
            <el-row :gutter="20">
              <el-col :span="13">
              <img src="../assets/img/yjicon07.png" alt />
              <span>人均：250000元</span></el-col>
              <el-col :span="11">
              <img src="../assets/img/yjicon08.png" alt />
              <span>和谁：和朋友</span></el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <div class="container infoCon">
      <div class="infoCon-01">
        <p>写在前面的话</p>
      </div>

      <div class="infoCon-02">
        <p>
          在邮轮上，即使是不占床的婴儿也需要计人头，因为船上的房间数与救生舱可以承载的总人数是成正比的，双人房只能
          入住两个人，多了一个婴儿就需要入住三四人房或家庭房。
        </p>
        <p>
          这类房型一般会以沙发床（折叠好是沙发，打开后是床）、上格床、上下铺等形式容纳第三、四人。一般三人房/家庭
          房会有同行第三、第四人的优惠，会比订两间双人房划算很多。
        </p>
        <p>
          这类房型一般会以沙发床（折叠好是沙发，打开后是床）、上格床、上下铺等形式容纳第三、四人。一般三人房/家庭
          房会有同行第三、第四人的优惠，会比订两间双人房划算很多。
        </p>
        <p>
          内舱、海景、阳台都会有一定比例的三四人房/家庭房，可以根据自己的预算选择。暑期是家庭出游的高峰，家庭房型
          也非常抢手，一定要及早预订。
        </p>
        <img src="../assets/img/bkcruiseinfo01.jpg" alt />
      </div>
      <div class="infoCon-01">
        <p>关于成都</p>
      </div>

      <div class="infoCon-02">
        <p>
          如果阖家出行且预算允许，套房是最佳选择。套房较一般房间外除了更豪华、面积更大之外，还会有一些特权，例如有
          登船快速通道、离船快速通道、专享用餐区域等礼遇，这样老人小孩都能享受套房礼遇，上下船、吃饭，全都有VIP特
          权，无须排队。
        </p>
        <p>
          套房中的“家庭套房”是最适合一家入住的，一般5人起订，最多可住8-10人，布局类似我们的两居，且入住的人越多，
          每个人的均价越低，有时甚至能比双人阳台房的人均价更便宜，正因如此，也非常抢手，很难预订。
        </p>
        <img src="../assets/img/bkcruiseinfo02.jpg" alt />
        <img src="../assets/img/bkcruiseinfo02.jpg" alt />
        <p>
          “连通房”也是一家出行的最佳选择。连通房指的是2-3间间相邻房间，内有连通门可以打开。以海洋量子号上的三代
          同堂连通房为例：由标准套房、阳台房及一间单人内舱房组成；三种房型被玄关连通，5人起订，至多能容纳10人。内
          含三间卧室、三间浴室、一个连通阳台，即有私人空间，又能三代同堂。
        </p>
      </div>

      <div class="theEnd">~THE END～</div>
    </div>
  </div>
</template>
<script>
import HeaderMenu from "../components/HeaderMenu.vue";
export default {
  name: "ravelog",
  components: {
    HeaderMenu
  },
  data() {
    return {
      list: [],
      searchVal: "",
      activeIndex: 1
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList(pageval) {
      this.list = [];
      if (pageval) this.pageInfo.page = pageval;
      var paramsData = {};
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
.traveloginfo-banner {
  position: relative;
  padding-bottom: 30px;
  img {
    max-width: 100%;
  }
  .com-page-info {
    padding: 25px 100px;
    width: 1200px;
    background: #ffffff;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
    position: absolute;
    left: 50%;
    bottom: -60px;
    margin-left: -600px;
    .info01 {
      font-size: 32px;
      color: #333333;
    }
    .info02 {
      font-size: 26px;
      color: #999999;
      margin-top: 20px;
    }
    .tag div {
      display: inline-block;
      width: 50px;
      height: 20px;
      border-radius: 10px;
      margin-right: 10px;
      text-align: center;
      color: #ffffff;
      margin-top: 20px;
      &.toutiao {
        background: #f7ae0a;
      }
      &.jinghua {
        background: #ee6b03;
      }
    }
    .right {
      position: absolute;
      right: 120px;
      top: 30px;
      width: 30%;
      .like {
        font-size: 14px;
        margin-bottom: 30px;
        img{
          margin-right: 10px;
        }
      }
      .time,.with {
        font-size: 14px;
        margin-bottom: 20px;
        img,
        span {
          margin-right: 20px;
          float: left;
          line-height: 24px;
        }
      }
    }
  }
}

.traveloginfo {
  .infoCon {
    background: #ffffff;
    margin-top: 100px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
    .infoCon-01 {
      padding: 60px 0 30px 0;
      width: 1000px;
      margin: 0 auto;
      font-size: 28px;
      color: #333;
      border-bottom: 1px solid #000000;
    }
    .infoCon-02 {
      padding: 30px 100px 0 100px;
      font-size: 18px;
      color: #333;
      font-weight: normal;
      text-align: center;
      img {
        max-width: 100%;
        margin-bottom: 20px;
      }
      p {
        text-align: left;
        margin-bottom: 30px;
        line-height: 28px;
      }
    }
    .theEnd{
      text-align: center;
      width: 1000px;
      margin: 60px 100px;
      font-size: 28px;
      color: #999999;
      height: 110px;
      line-height: 110px;
      border-top: 1px solid rgba(153, 153, 153, 0.5)
    }
  }
}
</style>
