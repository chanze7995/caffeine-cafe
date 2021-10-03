<template>
  <div class="productExhibit">
    <div class="productExhibit__path">path</div>
    <div class="productExhibit__display">
      <div class="productBox" v-for="item in props.productInfoList" :key="item.id" >
        <div class="productBox__img">
          <div class="productBox__discountLabel" v-if="item.isDiscount">-{{100-item.discount*100}}%</div>
          <a href="">
            <img :src="require(`@/assets/img/${item.img_name}`)" alt="" class="productBox__productImg">
          </a>
          <ul class="productBox__option">
            <li>
              <div data-tip="加入購物車">
                <SvgIcon icon-name="cart" icon-class="productBox__option__icon" />
              </div>
            </li>
            <li>
              <div data-tip="喜歡" >
                <SvgIcon icon-name="heart" icon-class="productBox__option__icon"/>
              </div>
            </li>
            <li>
              <div data-tip="了解更多" @click="props.showProductLightbox(),getClickedProductId(item.id)" >
                <SvgIcon icon-name="magnifying-glass" icon-class="productBox__option__icon" />
              </div>
            </li>
          </ul>
        </div>
        <div class="productBox__content">
          <div class="productBox__content__Name">
            <a href="">
              <div>{{item.brand}}</div>
              <div>{{item.name}}</div>
            </a>
          </div>
          <div class="productBox__content__Price">
            <div :class="['productBox__content__Price__original',{'productBox__content__Price--discount':item.isDiscount}]">定價：{{item.price}}元</div>
            <div class="productBox__content__Price__discount" v-if="item.isDiscount">特價：{{Math.round(item.price*item.discount)}}元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import '@/assets/img/icons/cart.svg'
import { ref } from 'vue'
export default {
  components: {
  },
  props: {
    productInfoList: {
      type: Array
    },
    showProductLightbox: {
      type: Function,
      default: () => {}
    }
  },
  setup (props, { emit }) {
    // 點選的商品資料
    const clickedProductId = ref(0)
    const getClickedProductId = (idx) => {
      clickedProductId.value = idx
      emit('clicked-product-id', clickedProductId.value)
    }
    // onMounted(() => {
    //   emit('clicked-product-id', clickedProductId.value)
    // })
    return {
      props,
      clickedProductId,
      getClickedProductId
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/shop/_productExhibit.scss/';
</style>
