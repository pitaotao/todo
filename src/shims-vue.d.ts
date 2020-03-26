declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  import VueRouter, { Route } from 'vue-router';
  export interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    $https: any;
    $urls: any;
    $Message: any;
    $Modal: any;
  }
}
