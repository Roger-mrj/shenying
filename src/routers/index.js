import Vue from 'vue'
import VueRouter from 'vue-router'
import cinema from './cinema';
import mine from './mine';
import movie from './movie';

Vue.use(VueRouter)

const routes = [
  /*    {
        path: '',
        redirect: '/a'
      },*/
  {
    path: '/b',
    component: ()=>import('../components/Header')
  },
  {
    path: '/a',
    component: () => import('../components/TabBar')
  },
  cinema,
  mine,
  movie
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
