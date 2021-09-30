<template>
  <div class="cartContainer">
    <div class="cartContent">
      <h1>購物車</h1>
      <!-- <svg><use xlink:href="#cart" /></svg> -->
      <p>This is an informative card that will tell you something that's... well, important!</p>
      <div class="cartIcon">
        <SvgIcon icon-name="cart" icon-class="cart__icon" />
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CartBotton',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/_cartBotton.scss';
</style>
