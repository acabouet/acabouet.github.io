<template>
  <div class="hello homepage row align-center">
    <section class="intro jumbotron col col-12">
      <h1 class="title">Hi, I'm {{ name }}</h1>
      <p class="large">{{ desc }}</p>
      <span class="arrow-label"> {{ cta }}</span>
    </section>

    <section class="masonry">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: 'Adrienne',
      desc: 'A Full Stack Web Developer',
      cta: 'See What I can Do'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
