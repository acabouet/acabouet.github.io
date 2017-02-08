<template>
  <div class="proj">
    <h3>Name</h3>
  </div>

</template>

<script>
  export default {
    data: {
      projects: {
        1: {
          name: 'Phame PDX',
          type: 'Website',
          technology: ['Drupal 7', 'custom theme', 'PHP', 'jquery', 'html5', 'css3', 'responsive'],
          desc: 'Mobile-freindly website redesign.',
          screenshots: {}
        },
        2: {
          name: 'Clearesult Subsolar',
          type: 'Web App',
          technology: ['Drupal 7', 'custom theme', 'module development', 'AJAX', 'JSON', 'SOLR', 'PHP', 'javascript', 'html5', 'css3', 'responsive'],
          desc: 'A web app to make signing up for solar power intuitive and user friendly',
          screenshots: {}
        },
        3: {
          name: 'In Other Words Feminist Commuity Center',
          type: 'Website',
          technology: ['Wordpress', 'custom theme', 'plugin development', 'PHP', 'jquery', 'html5', 'css3', 'responsive'],
          desc: 'An online presence overhaul for a Portland institution. Featuring a robust suite of event book and management tools, guest blogging functionality, industry standard social media integration, and an attractive mobile-friendly custom theme.',
          screenshots: {}
        },
        4: {
          name: 'Labnet Centrifuge Buying Guide',
          type: 'Android App',
          technology: ['Drupal 7', 'Ionic', 'AngularJS', 'REST API', 'JSON', 'Foundation 3', 'PHP', 'javascript', 'html5', 'css3', 'responsive'],
          desc: 'A fast and user-friendly mobile app with a headless Drupal 7 backend, built using AngularJS and ported to Android with Ionic framework',
          screenshots: {}
        },
        5: {
          name: 'Murdock Trust',
          type: 'Website',
          technology: ['Wordpress', 'custom theme', 'plugin development', 'PHP', 'jquery', 'html5', 'css3', 'responsive'],
          desc: 'Website redesign',
          screenshots: {}
        },
        6: {
          name: 'Wyeast',
          type: 'Website',
          technology: ['Drupal 8', 'custom theme', 'module development', 'PHP', 'jquery', 'html5', 'css3', 'responsive', 'Google Maps'],
          desc: 'Transition from custom PHP CMS to a mobile-friendly Drupal 8 website featuring custom order submission and management functionality, a store locator, and user accounts.',
          screenshots: {}
        }

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
