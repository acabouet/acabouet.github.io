<template>
  <div class="main-nav container">
    <input id="toggle" type="checkbox">
    <label class="toggle-container" for="toggle">
      <span class="button button-toggle"></span>
    </label>
    <nav class="nav">
      <a class="nav-item" href="">Home</a>
      <a class="nav-item" href="">About Me</a>
      <a class="nav-item" href="">Projects</a>
      <a class="nav-item" href="">Contact</a>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'main-nav'
  }
</script>

<style scoped lang="scss">
 .nav {
   border: 1px solid black;
 }
</style>
