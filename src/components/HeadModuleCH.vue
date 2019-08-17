<template>
  <div class="HeadModuleCH">
    <div class="yl_chengshi container">
      <div class="yl_chengshi_01">
        <el-row>
          <el-col :span="15">
            <img src="../assets/img/header/pinpai-4.jpg" alt="">
          </el-col>
          <el-col :span="9" class="">
            <div class="yl_chengshi_po">
            <div class="yl_chengshi_tit">日本</div>
            <div class="yl_chengshi_con">
              日本有众多港口，如冲绳，福冈，熊本，神户，鹿儿岛，长崎，细岛，油津等。您可去有东方夏威夷之称的冲绳观览白色的南国海滨；去亚洲的大门福冈享受海洋体育活动；带上
  宝贝去熊本拜访可爱的熊本熊；在异国风情的神户体验西洋与东瀛文化的交汇…
            </div>
            <div class="yl_chengshi_more">
              <a href="">查看更多 ></a> 
            </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <el-row :gutter="30">
      <el-col :span="8">
        <div class="yl_chengshi_img">
          <img src="../assets/img/header/pinpai-3.jpg" alt="">
        </div>
        <div class="yl_chengshi_name">
          <p class="tit"><a href="">福冈</a></p>
          <p class="con">福冈县位于九州北端，东北部濒临周防滩，西北部面对
玄海滩，西南部面对有明海。这里与朝鲜半岛和中...</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="yl_chengshi_img">
          <img src="../assets/img/header/pinpai-3.jpg" alt="">
        </div>
        <div class="yl_chengshi_name">
          <p class="tit"><a href="">长崎</a></p>
          <p class="con">福冈县位于九州北端，东北部濒临周防滩，西北部面对
玄海滩，西南部面对有明海。这里与朝鲜半岛和中...</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="yl_chengshi_img">
          <img src="../assets/img/header/pinpai-3.jpg" alt="">
        </div>
        <div class="yl_chengshi_name">
          <p class="tit"><a href="">大阪</a></p>
          <p class="con">福冈县位于九州北端，东北部濒临周防滩，西北部面对
玄海滩，西南部面对有明海。这里与朝鲜半岛和中...</p>
        </div>
      </el-col>
    </el-row>


    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadModuleCH',
}
</script>
<style lang="scss">
.yl_chengshi{
  .yl_chengshi_01{
    background: #ffffff;
    height: 280px;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    border-radius: 8px;
    margin-bottom: 30px;
    // 第一部分
    .yl_chengshi_tit{
      font-size: 32px;
      color: #333333;
      padding: 30px 20px;
    }
    .yl_chengshi_con{
      font-size: 14px;
      color: #666666;
      line-height: 22px;
      height: 130px;
      overflow: hidden;
      padding: 0 20px;
    }
    .yl_chengshi_more{
      text-align: right;
      color: #ee6b03;
      padding: 0 20px;
      font-size: 14px;
      a{
        color: #ee6b03;
      }
    }
    .yl_chengshi_po{
      position: relative;
      height: 280px;
      &::before{
        z-index: 1;
        content: "1";
        position:absolute;
        left: -23px;
        top: 50%;
        width: 23px;
        height: 47px;
        margin-top: -24px;
        background: url("../assets/img/header/left.png") no-repeat;
      }
    }
  }

  // 第二部分
  .yl_chengshi_img{
    height: 230px;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  .yl_chengshi_name{
    color: #333333;
    height: 90px;
    padding: 0 8px;
    .tit{
      font-size: 24px;
      height: 40px;
      line-height: 40px;
      a{
        color: #333333;
      }
    }
    .con{
      font-size: 14px;
      line-height: 22px;
      color: #666666;
    }
    background: #ffffff;
    box-shadow:5px 5px 5px rgba(0,0,0,.35);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
</style>
