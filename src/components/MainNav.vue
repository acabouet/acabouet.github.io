<template>
  <div class="main-nav container row">
    <input id="toggle" type="checkbox">
    <label class="toggle-container" for="toggle">
      <span class="button button-toggle"></span>
    </label>
    <nav class="nav col col-12">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/about" class="nav-item">About Me</router-link>
      <router-link to="/projects" class="nav-item">Projects</router-link>
      <router-link to="/contact" class="nav-item">Get in Touch</router-link>
    </nav>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
