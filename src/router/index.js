import { createRouter, createWebHistory } from 'vue-router'
// import Home1 from '../views/Home1.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: "HomePage" */ '../views/HomePage.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    redirect: '/shop/all',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop.vue'),
    children: [
      {
        path: ':group',
        name: 'ProductExhibit',
        component: () =>
          import(/* webpackChunkName: "ProductExhibit" */ '../components/shop/ProductExhibit.vue')
      },
      {
        path: 'bean',
        name: 'Bean',
        component: () =>
          import(/* webpackChunkName: "ProductExhibit" */ '../components/shop/ProductExhibit.vue')
      }
    ]
  }
  // {
  //   path: '/Home1',
  //   name: 'Home1',
  //   component: Home1
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
