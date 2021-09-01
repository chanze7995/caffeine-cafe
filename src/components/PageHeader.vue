<template>
  <header>
    <!-- <div :class="['mobileHeader',{ mobileMenuOpen:isMobileMenuOpen }]">
      <div class="mobileHeader__logoImg" v-show="!isMobileMenuOpen" >
        <router-link to="/">
          <img src="@/assets/img/logo.svg" alt="logo">
        </router-link>
      </div>
      <div :class="['mobileHeader__toggleMenuBtn',{ open:isMobileMenuOpen }]" @click="toggleMobileMenu">
        <Icon icon-name="menu" icon-class="mobileHeader__icon--menu" v-if="!isMobileMenuOpen" />
        <Icon icon-name="remove" icon-class="mobileHeader__icon--menu" v-if="isMobileMenuOpen" />
      </div>
    </div> -->
    <ul :class="['headerNavbar',{ mobileMenuOpen:isMobileMenuOpen }]">
      <li class="headerNavbar__item" @click="toggleMobileMenu">
        <router-link to="/">首頁</router-link>
      </li>
      <li class="headerNavbar__item" @click="toggleMobileMenu">
        <router-link to="/explore">探索咖啡</router-link>
      </li>
      <li class="headerNavbar__item" @click="toggleMobileMenu">
        <router-link to="/shop">線上購物</router-link>
      </li>
      <li class="headerNavbar__logoImg">
        <router-link to="/">
          <img src="@/assets/img/logo.svg" alt="logo">
        </router-link>
      </li>
      <li class="headerNavbar__item" @click="toggleMobileMenu">
        <router-link to="/locations">門市據點</router-link>
      </li>
      <li class="headerNavbar__item" @click="toggleMobileMenu">
        <router-link to="/course">咖啡課程</router-link>
      </li>
      <li class="headerNavbar__item" @click="toggleMobileMenu">
        <router-link to="/account">會員</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/component/_pageHeader.scss';
</style>
