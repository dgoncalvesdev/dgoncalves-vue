<template>
  <div class="hero-content-wrapper row">
    <intro />
  </div>
</template>

<script>
  import Intro from "@/components/intro/intro.vue"
  import SimpleMarquee from "@/lib/custom-components/simple-marquee/simple-marquee.vue"
  import ImageMarquee from "@/lib/custom-components/image-marquee/image-marquee.vue"

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Hero",
    components: { ImageMarquee, SimpleMarquee, Intro }
  }
</script>

<style lang="scss" scoped>
  .hero-content-wrapper {
    height: 120vh;
    padding: 0 1vw;
    overflow-x: hidden;
  }

  .row {
    width: 100%;
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding: 128px 64px;
  }

  @media only screen and (max-width: 500px) {
    .row {
      height: 100vh;
      padding: 0 64px;
    }
  }
</style>
