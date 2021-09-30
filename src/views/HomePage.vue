<template>
  <div class="homePageContainer">
    <section class="homeBannerSection homePageSection">
      <div class="homeBannerSection__content">
        <div class="homeBannerSection__content__textBox">
          <h1 class="sectionTitle">咖啡與你的故事</h1>
          <p>為您量身定制<br>完美、確實且新鮮烘培的咖啡。<br>符合社會與環境責任，追蹤麥克咖啡因。</p>
        </div>
        <div class="homeBannerSection__content__img">
          <img src="@/assets/img/homePage/coffeeDoddle.svg" alt="">
        </div>
      </div>
    </section>
    <section class="recommendSection homePageSection">
      <div class="showCardContainer">
        <div class="showCard">
          <img src="@/assets/img/homePage/smallpinkcoffee0.png" alt="">
          <div class="showCard__content">
            <span>單一來源</span><br>
            <span>巴西</span>
            <h2>麥克＆褪去的思念</h2>
            <p>定價：520元</p>
          </div>
        </div>
        <div class="showCard">
          <img src="@/assets/img/homePage/smallbluecoffee0.png" alt="">
          <div class="showCard__content">
            <span>單一來源</span><br>
            <span>哥倫比亞</span>
            <h2>麥克＆活在夢中</h2>
            <p>定價：520元</p>
          </div>
        </div>
      </div>
      <div class="recommendContent">
        <span>新品上市</span>
        <h1 class="sectionTitle">最新鮮的完美</h1>
        <p>精選我們全年採購的完美時令中最新鮮的咖啡</p>
      </div>
    </section>
    <section class="igSection homePageSection">
      <div class="igBlockContainer">
        <div class="igMainBlock">
          <img src="@/assets/img/homePage/ig-logo.png" alt="" class="igMainBlock__icon">
          <div class="igMainBlock__content">
            <h1 class="sectionTitle">提振精神、找尋生活中的不一樣</h1>
            <p>關注新活動、產品等。</p>
          </div>
        </div>
        <div class="igSubBlock">
          <img src="@/assets/img/homePage/main.jpg" alt="" class="igSubBlock__mainImg">
          <ul class="igSubBlock__groupImg">
            <li class="blockItem">
              <img src="@/assets/img/homePage/sub1.jpg" alt="">
            </li>
            <li class="blockItem">
              <img src="@/assets/img/homePage/sub2.jpg" alt="">
            </li>
            <li class="blockItem">
              <img src="@/assets/img/homePage/sub3.jpg" alt="">
            </li>
            <li class="blockItem">
              <img src="@/assets/img/homePage/sub4.jpg" alt="">
            </li>
            <li class="blockItem">
              <img src="@/assets/img/homePage/sub5.jpg" alt="">
            </li>
            <li class="blockItem">
              <img src="@/assets/img/homePage/sub6.jpg" alt="">
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'HomePage',
  components: {
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/views/_homePage.scss';
</style>
