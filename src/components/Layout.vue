<template>
  <div class="page page-tb-wrap">
    <nav-bar class="flex-0"></nav-bar>
    <div class="page-lr-wrap flex-1">
      <left-menu></left-menu>
      <div class="main-body">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
  
</template>
<script>

  import NavBar from './NavBar/Index'
  import LeftMenu from './LeftMenu/Index'
  export default {
    components: {
      NavBar,
      LeftMenu
    }
  }
</script>
<style>
</style>
