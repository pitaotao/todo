import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';
// import Store from 'vuex';

declare module 'vue/types/vue' {
  export interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    // $store: Store<any>;
    // 以下是在main.ts中挂载到Vue.prototype上的变量
    $https: any;
    $urls: any;
    $Message: any;
    $Modal: any;
  }
}
