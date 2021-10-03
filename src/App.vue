<template>
  <PageHeader/>
  <router-view/>
  <CartBotton />
  <PageFooter/>
</template>
<script>
import PageHeader from '@/components/PageHeader.vue'
import CartBotton from '@/components/CartBotton.vue'
import PageFooter from '@/components/PageFooter.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'App',
  components: {
    PageHeader,
    CartBotton,
    PageFooter
  },
  setup () {
    const store = useStore()
    const productInfoLoad = () => {
      store.dispatch('getProductData')
    }
    onMounted(
      () => {
        productInfoLoad()
      }
    )
    return {
    }
  }
}
</script>
<style>
</style>
