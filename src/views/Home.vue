<template>
  <div class="home">
    <Banner></Banner>
    <!-- 游轮品牌 -->
    <HeadModuleTit class="container" tit="游轮品牌" enTit="Cruise brand"/>
    <HeadModuleNav class="container" :navData="navDataYL" moreName="更多游轮公司" moreLink="1.html"></HeadModuleNav>
    <HeadModulePP></HeadModulePP>
    
    <!-- 游轮百科 -->
    <HeadModuleTit class="container" tit="游轮百科" enTit="Cruise encyclopedia"/>
    <HeadModuleNav class="container" :navData="navDataBK" moreName="更多百科内容" moreLink="1.html"></HeadModuleNav>
    <HeadModuleBK></HeadModuleBK>

    <!-- 港口城市 -->
    <HeadModuleTit class="container" tit="港口城市" enTit="The port city of"/>
    <HeadModuleNav class="container" :navData="navDataGK" moreName="更多港口城市" moreLink="1.html"></HeadModuleNav>
    <HeadModuleCH></HeadModuleCH>

    <!-- 邮轮游记 -->
    <HeadModuleTit class="container" tit="邮轮游记" enTit="Cruise travel"/>
    <HeadModuleNav class="container" :navData="navDataYJ" moreName="更多游记内容" moreLink="1.html"></HeadModuleNav>
    <HeadModuleYJ></HeadModuleYJ>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
// 模块名称
import HeadModuleTit from '../components/HeadModuleTit.vue'
// 导航
import HeadModuleNav from '../components/HeadModuleNav.vue'
// 品牌
import HeadModulePP from '../components/HeadModulePP.vue'
// 百科
import HeadModuleBK from '../components/HeadModuleBK.vue'
// 港口城市
import HeadModuleCH from '../components/HeadModuleCH.vue'
// 游记
import HeadModuleYJ from '../components/HeadModuleYJ.vue'

export default {
  name: 'home',
  data() {
    return {
      navDataYL:['皇家加勒比','歌诗达邮轮','公主邮轮','星梦邮轮','地中海邮轮'],
      navDataBK:['新手入门','游轮介绍','预定锦囊','出行准备','游轮专栏'],
      navDataGK:['日本','东南亚','地中海','中东','加勒比海','夏威夷','阿拉斯加'],
      navDataYJ:['皇家加勒比国际游轮','公主邮轮','歌诗达邮轮','星梦邮轮','维京游轮'],
    }
  },
  components: {
    Banner,
    HeadModuleTit,
    HeadModuleNav,
    HeadModulePP,
    HeadModuleBK,
    HeadModuleCH,
    HeadModuleYJ
  }
}
</script>

<style lang="scss">

</style>
