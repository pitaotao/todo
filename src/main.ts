import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button, Input, Form, FormItem, Message } from 'element-ui';
import 'lib-flexible/flexible.js';
import urls from '@/utils/urls';
import service from '@/utils/https';

Vue.config.productionTip = false;
Vue.prototype.$urls = urls; // 其他页面在使用 URLS 的时候直接  this.$urls 就可以了
Vue.prototype.$https = service; // 其他页面在使用 axios 的时候直接  this.$http 就可以了

Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Message.name, Message);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
