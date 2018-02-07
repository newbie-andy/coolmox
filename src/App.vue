<template>
  <div id="app">
    <header-component id="header"></header-component>
    <router-view id="content"/>
    <footer-component id="footer"></footer-component>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name: 'App',
  components: {
    'headerComponent': Header,
    'footerComponent': Footer
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,body {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
}
#app {
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}
#header {
  display: flex;
}
#content {
  display: flex;
  flex: 1;
  padding: 50px;
}
#footer{
    width: 100%;
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: center;
    background: #212121;
    color: #CCCCCC;
}
ul {
  list-style: none;
}
li {
  float: left;
}
a {
  text-decoration: none;
}
</style>
