<template>
  <section class="brands-section ">
    <div class="brand-grid row">
      <h3 class="brand-sticky">Brands I<br>worked with</h3>
      <div>
        <div class="brand-logo-grid w-layout-grid">
          <pad brand="vwds" />
          <pad brand="man" />
          <pad brand="bmw" />
          <pad brand="mini" />
          <pad brand="critical" />
          <pad brand="milenar" />
          <pad brand="nova" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Pad from "@/lib/custom-components/pad/pad.vue"

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Brands",
    components: { Pad }
  }
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 400px) {
    .brands-section {
      height: 100vh !important;
    }
  }

  @media only screen and (max-width: 800px) and (min-width: 400px)  {
    .brands-section {
      height: 60vh !important;
    }
  }

  @media only screen and (max-width: 800px) {
    .row {
      display: flex !important;
      flex-direction: column !important;
      height: 100%;
    }

    .brand-logo-grid {
      margin-top: 2vh;
    }
  }

  .row {
    width: 100%;
    height: 70vh;
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

  .brands-section {
    width: 100%;
    height: 100%;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 64px;
    padding-right: 64px;
  }

  .w-layout-grid {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
  }

  .brand-logo-grid {
    perspective: 1200px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    transform: perspective(1200px);
  }
</style>
