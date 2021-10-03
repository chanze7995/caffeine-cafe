<template>
  <div class="productCardContainer">
    <div class="productCard">
      <div class="productCard__background">
        <div class="colorCard" :style="{'--productInfoColor':productInfo.color}"></div>
        <h1 class="logoName">Caffeine With Mike</h1>
        <a href="#" class="share">
          <SvgIcon icon-name="share-symbol" icon-class="shareIcon"/>
        </a>
        <img :src="require(`@/assets/img/${productInfo.img_name}`)" alt="" class="productImg">
      </div>
      <div class="productCard__info">
        <div class="productCard__info__title">
          <h1 class="productName">{{productInfo.name}}</h1>
          <h3 class="productGroup">淺烘培</h3>
        </div>
        <div class="productCard__info__description">
          <h3 class="title">商品資訊</h3>
          <p class="text" v-html="productInfo.description"></p>
        </div>
        <div class="productCard__info__grind">
          <h3 class="title">研磨度</h3>
          <div class="sizeContainer">
            <div class="size">原豆</div>
            <div class="size">粗</div>
            <div class="size">細</div>
          </div>
        </div>
        <div class="productCard__info__size">
          <h3 class="title">份量</h3>
          <div class="sizeContainer">
            <div class="size">250g</div>
            <div class="size">500g</div>
            <div class="size">1kg</div>
          </div>
        </div>
        <div class="productCard__info__price">
          <a href="#" class="buy">
            <SvgIcon icon-name="cart" icon-class="buyIcon"/>
            <p>加入購物車</p>
          </a>
          <div class="price">
            <h1>520元</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productInfo: Object
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/shop/_productCard.scss';
</style>
