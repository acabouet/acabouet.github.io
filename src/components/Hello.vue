<template>
  <div class="hello homepage row align-center">
    <section class="intro col col-8">
      <h1 class="title">{{ name }}</h1>
      <p class="large">{{ jobTitle }}</p>
      <p class="small muted"> {{ desc }}</p>
    </section>

    <section class="featured col col-8" id="content-grid">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: 'Lorem Ipsum',
      jobTitle: 'Lorem Ipsum Doler',
      desc: 'Full Stack Dev specializing in PHP and Javascript. Drupal and Wordpress theming and plugin development. Vue.js, Angular, Ionic, and Native Android Apps Too. Based in Portland, Oregon.',
      greeting: 'Nice to meet you!'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
