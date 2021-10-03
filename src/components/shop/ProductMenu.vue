<template>
  <div class="productMenu">
    <ul class="mainMenuContainer">
      <li>
        <router-link
          :to="{
            name:'ProductExhibit',
            params:{
              group:'all'
            }}"
          @click="getClickedProductGroup('all')"
        >全部商品</router-link>
        <!-- <router-link :to="{name:'Shop'}" @click="getClickedProductGroup('all')">全部商品</router-link> -->
      </li>
      <li>
        <router-link :to="{name:'Bean'}" @click="getClickedProductGroup('bean')">咖啡豆</router-link>
        <!-- <div @click="getClickedProductGroup('bean')">咖啡豆</div> -->
        <ul class="subMenuContainer">
          <li>
            <router-link to="/" @click="getClickedProductGroup('single')">精品單一莊園</router-link>
          </li>
          <li>
            <router-link to="/shop/mix" @click="getClickedProductGroup('mix')">混合</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="getClickedProductGroup('light')">淺烘培</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="getClickedProductGroup('medium')">中烘培</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="getClickedProductGroup('dark')">深烘培</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="getClickedProductGroup('subscription')">訂閱咖啡</router-link>
          </li>
        </ul>
      </li>
      <li>
        <!-- <router-link :to="{name:'Shop'}" @click="getClickedProductGroup('life')">咖啡生活</router-link> -->
        <div @click="getClickedProductGroup('life')">咖啡生活</div>
        <ul class="subMenuContainer">
          <li>
            <router-link :to="{name:'Shop'}" @click="getClickedProductGroup('subscription')">沖煮設備</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="getClickedProductGroup('subscription')">濾杯</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="getClickedProductGroup('subscription')">濾材</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup (_, { emit }) {
    // 點選的商品分類
    const clickedProductGroup = ref('')
    const getClickedProductGroup = (group) => {
      clickedProductGroup.value = group
      emit('clicked-product-group', clickedProductGroup.value)
    }
    return {
      clickedProductGroup,
      getClickedProductGroup
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/components/shop/_productMenu.scss/';
</style>
