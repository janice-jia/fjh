<template>
  <div class="HeadModuleYJ">
    <div class="yl_chengshi container">
      <div class="yl_yj">
        <img src="../assets/img/header/pinpai-4.jpg" alt="">
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
  name: 'HeadModuleYJ',
}
</script>
<style lang="scss">
.yl_chengshi{
  .yl_yj{
    img{
      max-width: 100%;
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
