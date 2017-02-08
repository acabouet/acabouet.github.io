<template>
  <div id="app">
    <main-nav></main-nav>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./scss/global.scss" lang="scss"></style>
