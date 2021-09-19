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
export default {
  name: 'App',
  components: {
    PageHeader,
    CartBotton,
    PageFooter
  }
}
</script>
<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
