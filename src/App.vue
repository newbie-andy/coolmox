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
  height: 100%;
  width: 100%;
}
#app {
  height: inherit;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
#footer {
  display: flex;
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
