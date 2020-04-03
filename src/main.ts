import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Component } from 'vue-property-decorator';
import store from './store';
import { Button,
  Input,
  Form,
  FormItem,
  Message,
  Menu,
  RadioGroup,
  RadioButton,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Select,
  Col,
  Option,
  Icon,
  Table,
  TableColumn,
  Upload,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Dialog,
  Radio,
  Popover,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import 'lib-flexible/flexible.js';
import urls from '@/utils/urls';
import service from '@/utils/https';
import Router from 'vue-router';

Vue.config.productionTip = false;
Vue.prototype.$urls = urls; // 其他页面在使用 URLS 的时候直接  this.$urls 就可以了
Vue.prototype.$https = service; // 其他页面在使用 axios 的时候直接  this.$http 就可以了
Vue.prototype.$Message = Message;

Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Message.name, Message);
Vue.component(Menu.name, Menu);
Vue.component(Submenu.name, Submenu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(RadioButton.name, RadioButton);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Select.name, Select);
Vue.component(Col.name, Col);
Vue.component(Option.name, Option);
Vue.component(Icon.name, Icon);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Upload.name, Upload);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Dialog.name, Dialog);
Vue.component(Radio.name, Radio);
Vue.component(Popover.name, Popover);
Vue.component(CollapseTransition.name, CollapseTransition);

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

const routerPush = Router.prototype.push;
// Router.prototype.push = function push(location: any) {
//   return routerPush.call(this, location).catch((error: any) => error);
// };

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
