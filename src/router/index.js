import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const index = () => import('@/components/index.vue');
const home = () => import('@/components/home.vue');

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/home',
          component: home,
          meta: {title: '首页'}
        }
      ]
    }
  ]
})
