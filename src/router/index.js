import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const home = () => import('@/components/home.vue');

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    }
  ]
})
