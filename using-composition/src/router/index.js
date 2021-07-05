import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mixins from "../views/Mixins.vue";
import Calculator0705 from "../views/Calculator0705";
import CalculatorSetup from "../views/CalculatorSetup";
import CompositionCalculRef from "../views/CompositionCalculRef";
import Mixins2 from "../views/Mixins2";
import LanguagePlugins from "../views/LanguagePlugins";

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
  },
  {
    path: '/0705/calculator',
    name: 'setUp-Composition',
    component: Calculator0705,
  },
  {
    path: '/0705/setup',
    name: 'setup-composition',
    component: CalculatorSetup
  },
  {
    path: '/0705/toRefs',
    name: 'toRefs - calculator',
    component: CompositionCalculRef
  },
  {
    path: '/0705/mix-ins',
    name: 'mixins',
    component: Mixins2,
  },
  {
    path: '/0705/i18n',
    name: 'i18n plugins',
    component: LanguagePlugins,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
