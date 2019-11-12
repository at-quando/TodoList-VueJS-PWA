import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/auth',
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue'),
    },
    {
      path: '/feature',
      name: 'feature',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "feature" */ '../views/Feature.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path.split('/')[1] === 'auth') {
    if (localStorage.getItem('ACCESS_TOKEN')) {
      next({path: '/feature'});
    } else {
      next();
    }
  } else {
    if (localStorage.getItem('ACCESS_TOKEN')) {
      next();
    } else {
      next({path: '/auth'});
    }
  }
});
export default router;
