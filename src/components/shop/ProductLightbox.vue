<template>
  <div class="productLightbox__background" :class="(isProductLightboxOpen)?'openProductLightbox__background':''" @click="showProductLightbox()"></div>
  <div class="productLightbox" :class="(isProductLightboxOpen)?'openProductLightbox':''">
    <div @click="showProductLightbox()">
      <SvgIcon icon-name="close" icon-class="productCard__closeIcon"/>
    </div>
    <ProductCard :productInfo="clickedProductInfo"/>
  </div>
</template>

<script>
// import Button from '@/components/Button.vue'
import ProductCard from '@/components/shop/ProductCard.vue'
import { ref } from 'vue'
// import ProductCard from '../explore/ProductCard.vue'
export default {
  components: {
    // Button
    ProductCard
  },
  props: {
    clickedProductInfo: {
      type: Object
    },
    isProductLightboxOpen: {
      type: Boolean
    },
    showProductLightbox: {
      type: Function
    }
  },
  setup () {
    const addCartBtnMsg = ref('加入購物車')

    return {
      addCartBtnMsg
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/shop/_productLightbox.scss';
</style>
