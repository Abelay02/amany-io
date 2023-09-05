<template>
  <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/helloworld">Helloworld</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/blog">Blog</router-link>
  </nav> -->
  <router-view></router-view>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// // import BlogSection from './components/Blog.vue'
// // import AboutSection from './components/About.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // BlogSection,
    // AboutSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body, html {
  margin: 0;
  padding: 0;
}

img {
  width: 100px;
  height: auto;
}
</style>
