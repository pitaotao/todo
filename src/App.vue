<template>
  <div id="app">
    <div id="nav">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
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
  export default class App extends Vue {}
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
    width: 1200px;
    margin: 0 auto;
    padding-top: 61px;
  }
  img {
    vertical-align: bottom;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
