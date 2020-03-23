import Vue from 'vue';
import VueRouter from 'vue-router';
import route from './router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: route,
});

export default router;
