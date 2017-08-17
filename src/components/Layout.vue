<template>
  <div class="page">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
  
</template>
<script>

  import NavBar from './NavBar/Index'
  export default {
    components: {
      NavBar
    }
  }
</script>
<style>
</style>
