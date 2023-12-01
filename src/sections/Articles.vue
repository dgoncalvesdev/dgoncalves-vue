<template>
  <section class="articles-section ">
    <div class="articles-grid row">
      <h3 class="articles-sticky">Articles I<br>wrote</h3>
      <div>
        <div class="articles-logo-grid">
          <custom-table-links :content="articles"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import CustomTableLinks from "@/lib/custom-components/custom-table-links/custom-table-links.vue"

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Articles",
    components: { CustomTableLinks},
    data() {
      return {
        articles: [
          {
            name: 'Mastering React.js: Tips and Tricks for More Effective Development', link: 'https://diogoandre-goncalves96.medium.com/mastering-react-js-tips-and-tricks-for-more-effective-development-7a27067c88ac'
          },
          {
            name: 'Unveiling the Marvels of Micro Frontends with Vue 3, Vite, and TypeScript', link: 'https://blog.stackademic.com/unveiling-the-marvels-of-micro-frontends-with-vue-3-vite-and-typescript-1cdeafa092c1'
          },
          {
            name: 'Tips & Best Pratices for Vue 3', link: 'https://diogoandre-goncalves96.medium.com/tips-best-pratices-for-vue-3-149f6440ffa4'
          },
          {
            name: 'Simplify your JavaScript', link: 'https://diogoandre-goncalves96.medium.com/simplify-your-javascript-7becd7a08cdd'
          },
          {
            name: '12 JavaScript Best Practices for Beginners', link: 'https://diogoandre-goncalves96.medium.com/8-javascript-best-practices-for-beginners-af8f9c41aa3f'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 800px) {
    .row,
    .articles-grid {
      display: flex !important;
      flex-direction: column;
    }

    .articles-logo-grid {
      margin-top: 3vh;
    }
  }

  .row {
    height: 60vh;
    width: 100%;
    max-width: 1080px;
    grid-column-gap: 64px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    padding-top: 128px;
    padding-bottom: 128px;
    display: grid;
    position: relative;
  }
  .articles-section {
    width: 100%;
    height: 100%;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 64px;
    padding-right: 64px;
  }

  .articles-grid {
    grid-column-gap: 64px;
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr;
    padding-top: 128px;
    padding-bottom: 128px;
    position: relative;
  }

  .w-layout-grid {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
  }

  .articles-logo-grid {
    perspective: 1200px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    transform: perspective(1200px);
  }
</style>
