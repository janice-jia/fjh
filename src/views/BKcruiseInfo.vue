<template>
  <div class="bkcruiseinfo">
    <div class="bkcruiseinfo-banner">
      <HeaderMenu activeIndex="6"></HeaderMenu>
      <img src="../assets/img/bkcruiseinfo.jpg" alt=""/>
      
      <div class="com-page-info">
        <!-- 标题，，， -->
        <div class="info01">
          带儿童上邮轮，有什么需要注意的？
        </div>
        
        <!-- 时间 -->
        <div class="info02">
          <p><img src="../assets/img/time.png" alt/> 更新于 2019-08-29</p>
          <p><img src="../assets/img/youyong.png" alt/> 有用 717</p>
        </div>
      </div>
    </div>

    <div class="container infoCon">
      <div class="infoCon-01">
        <p>来自国际邮轮协会的数据显示，每年有超过150万儿童乘坐邮轮出行。而邮轮省时、省心、省力的特性，使其作为最适
      合阖家出游的旅行方式之一，在中国越来越流行。</p>
        <p>携程邮轮为大家带来一篇史上最干货的儿童邮轮攻略，涵盖预订、选船、出行准备、船上攻略方方面面。</p>
        <p>预订那些事儿</p>
      </div>

      <div class="infoCon-02">
        <p class="tit">各邮轮公司的儿童界定</p>
        <p>邮轮公司不会允许未成人单独出行，且每间舱房居住的客人中，必须有至少1人为成人。</p>
        <p>未成年人如果不随父/母出行，需提供父母签署的委托书及随行监护人签署的承诺书，否则将会被拒绝登船</p>
        <p>不同的邮轮公司，对“未成年人”的年龄界定有不同，常见的两个分界线是18岁和21岁。目前有船常驻中国母港的邮
轮公司政策如下：</p>
        <p class="mb0">• 皇家：21岁以下为儿童，且一间房内必须有至少1人达到年龄18岁。</p>
        <p class="mb0">• 公主：同批客人中至少一人21岁以上，且一间房内至少1人年满16周岁</p>
        <p class="mb0">• 天海：同舱房必须有一位18周岁及以上成人</p>
        <p class="mb0">• 歌诗达：同舱房必须有一位18周岁及以上成人</p>
        <p>天海、公主、皇家、歌诗达这几家邮轮公司都要求登船的婴儿年龄达到6个月以上。而如果是跨洋航线，婴儿年龄须12
个月以上。</p>
        <p class="tit">选房有讲究</p>
        <p>在邮轮上，即使是不占床的婴儿也需要计人头，因为船上的房间数与救生舱可以承载的总人数是成正比的，双人房只能
入住两个人，多了一个婴儿就需要入住三四人房或家庭房。</p>
        <p>这类房型一般会以沙发床（折叠好是沙发，打开后是床）、上格床、上下铺等形式容纳第三、四人。一般三人房/家庭
房会有同行第三、第四人的优惠，会比订两间双人房划算很多。</p>
        <p>这类房型一般会以沙发床（折叠好是沙发，打开后是床）、上格床、上下铺等形式容纳第三、四人。一般三人房/家庭
房会有同行第三、第四人的优惠，会比订两间双人房划算很多。</p>
        <p>内舱、海景、阳台都会有一定比例的三四人房/家庭房，可以根据自己的预算选择。暑期是家庭出游的高峰，家庭房型
也非常抢手，一定要及早预订。</p>
        <img src="../assets/img/bkcruiseinfo01.jpg" alt=""/>
        <p class="center">*图为歌诗达邮轮上的第三四人上格床</p>
        <p>如果阖家出行且预算允许，套房是最佳选择。套房较一般房间外除了更豪华、面积更大之外，还会有一些特权，例如有
登船快速通道、离船快速通道、专享用餐区域等礼遇，这样老人小孩都能享受套房礼遇，上下船、吃饭，全都有VIP特
权，无须排队。</p>
        <p>套房中的“家庭套房”是最适合一家入住的，一般5人起订，最多可住8-10人，布局类似我们的两居，且入住的人越多，
每个人的均价越低，有时甚至能比双人阳台房的人均价更便宜，正因如此，也非常抢手，很难预订。</p>
        <img src="../assets/img/bkcruiseinfo02.jpg" alt=""/>
        <p class="center">图为公主邮轮上的家庭套房</p>
        <p>“连通房”也是一家出行的最佳选择。连通房指的是2-3间间相邻房间，内有连通门可以打开。以海洋量子号上的三代
同堂连通房为例：由标准套房、阳台房及一间单人内舱房组成；三种房型被玄关连通，5人起订，至多能容纳10人。内
含三间卧室、三间浴室、一个连通阳台，即有私人空间，又能三代同堂。</p>
      </div>


      <div class="next">
        下一篇：<router-link to="comingSoon" target="_blank">船上有儿童托管中心吗？是否免费？</router-link>
      </div>
      <div class="youyong">
        <button>
          <span>有用717</span>
        </button>
        <p>如果本文对你有帮助,请点击"有用"</p>
      </div>
      <div style="clear:both">&nbsp;</div>
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
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
    getList(pageval){
      this.list = []
      if(pageval) this.pageInfo.page = pageval
      var paramsData = {
      }
      if(this.searchVal) paramsData.shipcompany = this.searchVal
      this.$http.get('/API/shipcompany.ashx?command=GetShipCompanyPager', {params: paramsData}).then(function (res) {
        this.list = res.body.list
        this.pageInfo.total = parseInt(res.body.count)
      })
    }
  }
}
</script>
<style lang="scss">
.bkcruiseinfo-banner{
  position: relative;
  padding-bottom: 30px;
  img{
    max-width: 100%;
  }
  .com-page-info{
    height: 120px;
    padding: 20px 100px;
    width: 1200px;
    background: #ffffff;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    position: absolute;
    left: 50%;
    bottom: -25px;
    margin-left: -600px;
    .info01{
      font-size: 30px;
      color: #333333;
    }
    .info02{
      font-size: 16px;
      color: #999999;
      margin-top: 12px;
      p{
        display: inline-block;
        line-height: 20px;
        margin-right: 30px;
        img{
          float: left;
          margin-right: 8px;
        }
      }
    }
  }
}

.bkcruiseinfo{
  .infoCon{
    background: #ffffff;
    margin-top: 100px;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    .infoCon-01{
      padding: 30px 0 0 0;
      width: 1000px;
      margin: 0 auto;
      font-size: 18px;
      color: #999999;
      p{
        margin-bottom: 40px;
        &:last-child{
          margin-bottom: 30px!important;
        }
      }
      border-bottom: 1px solid #000000;
    }
    .infoCon-02{
      padding: 30px 100px;
      font-size: 18px;
      color: #999999;
      font-weight: normal;
      text-align: center;
      img{
        max-width: 100%;
      }
      p{
        text-align: left;
        margin-bottom: 30px;
        line-height: 28px;
        &.tit{
          font-weight: bold;
          color: #333333;
        }
        &.mb0{
          margin-bottom: 0;
        }
        &.center{
          text-align: center;
          margin-bottom: 20px;
        }
      }
    }
    .next{
      padding: 0 100px;
      font-size: 18px;
      color: #999999;
      a{
        color: #ee6b03;
      }
    }
    .youyong{
      padding: 0 100px;
      margin-top: 100px;
      text-align: center;
      button{
        height: 40px;
        width: 130px;
        text-align: center;
        border:1px solid #ededed;
        border-radius: 5px;
        font-size: 16px;
        color: #333333;
        cursor: pointer;
        span{
          display: inline-block;
          position: relative;
          padding-left: 25px;
          &::before{
            content: '';
            width: 25px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 1px;
            background: url(../assets/img/youyong.png) no-repeat;
          }
        }
        &:hover{
          span{
            &::before{
              background: none;
            }
          }
        }
      }
      p{
        margin: 10px 0 60px 0;
        color: #999999;
        font-size: 12px;
      }
    }
  }
}
</style>
