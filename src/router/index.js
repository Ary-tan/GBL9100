import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const home = () => import('@/components/index.vue');

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    }
  ]
})
