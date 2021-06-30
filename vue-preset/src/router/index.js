import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About';
import WedStd from "../views/6.30/WedStd";
import WedStd2 from "../views/6.30/WedStd2";

import ThuStd2 from "../views/7.1/ThuStd2";
import ButtonPass2 from "../views/7.1/ButtonPass2";

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
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About,
  },
  {
    path: '/test',
    name: 'Test',
    component: WedStd,
  },
  {
    path: '/wed2',
    name: 'WedStd2',
    component: WedStd2
  },
  {
    path: '/701/thu1',
    name: 'Thu std',
    component: ThuStd2
  },
  {
    path: '/701/thu2',
    name: 'ChildrenEventPass',
    component: ButtonPass2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
