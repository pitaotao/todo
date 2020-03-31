<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import { isMobileOrPc } from '@/utils/utils';

  // 移动端 rem 单位适配
  if (isMobileOrPc()) {
    // width * 100 / 750 = width / 7.5
    // 1rem = 100px
    const width = window.screen.width;
    window.document.getElementsByTagName('html')[0].style.fontSize =
            width / 7.5 + 'px';
  }

  @Component
  export default class App extends Vue {

  }
</script>

<style lang="less">
  @import url("./less/index.less");
  @import url("./less/mobile.less");
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin: 0 auto;
  }

  body {
    margin: 0;
    padding: 0;
  }
</style>
