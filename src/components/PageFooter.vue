<template>
  <footer>
    <div class="newsLetterContainer">
      <p>註冊我們的時事通訊以接收特別優惠、活動邀請等。</p>
      <router-link to="/account">加入我們</router-link>
    </div>
    <div class="footerInfoContainer">
      <div class="footerInfoContent">
        <div class="footerInfoContent__title">Caffeine with Mike or Coffee with Milk</div>
        <div class="footerInfoContent__text">Calling：01-2345-6789</div>
        <div class="footerInfoContent__text">caffeineWithMike@gmail.com</div>
      </div>
      <div class="copyright">ⓒ 2020-2021 Created by Chanze Wu .<br>僅個人練習使用，不做任何商業用途<br>Only personal practice, not for any commercial application.</div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/component/_pageFooter.scss';
</style>
