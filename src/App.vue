<template>
  <div id="app">
    <div id="nav">
      <router-view/>
    </div>
  </div>
</template>

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
