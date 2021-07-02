import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mixins from "../views/Mixins.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/without/composition',
    name: 'Without Composition Calculator',
    component:() => import(/* webpackChunkName: 'Calculator' */ '../views/Calculator.vue')
  },
  {
    path: '/with/composition',
    name: 'With composition',
    component: () => import('../views/CalculatorComposition.vue')
  },
  {
    path: '/withtoRefs/composition',
    name: 'With toRef composition',
    component: () => import('../views/CalculatorToRef.vue')
  },
  {
    path: '/compositionApiProvider',
    name: 'Composition Api with Provider',
    component: () => import ('../views/CompositionApiProvider.vue')
  },
  {
    path: '/api/mixins',
    name: 'Mixins axios',
    component: Mixins,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
