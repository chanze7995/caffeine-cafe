import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    coffeeBeanInfo: [],
    coffeeEquipmentInfo: [],
    allProductInfo: []
  },
  actions: {
    getProductData ({ commit }) {
      axios.get('http://localhost:3000/product').then(res => {
        commit('productInfoInit', res.data)
      })
    }
    // setClickedCoffeeId({commit}){
    //   commit('')
    // }
  },
  mutations: {
    productInfoInit (state, payload) {
      const coffeeBeanProductData = payload[0].items
      const coffeeEquipmentProductData = payload[1].items
      const allProductData = coffeeBeanProductData.concat(coffeeEquipmentProductData)
      state.coffeeBeanInfo = coffeeBeanProductData
      state.coffeeEquipmentInfo = coffeeEquipmentProductData
      state.allProductInfo = allProductData
    }
    // clickedCoffeeId ()
  },
  getters: {
    allProductInfo (state) {
      return state.allProductInfo
    },
    allCoffeeBeanInfo (state) {
      return state.coffeeBeanInfo
    },
    allCoffeeEquipmentInfo (state) {
      return state.coffeeEquipmentInfo
    }
  }
})
