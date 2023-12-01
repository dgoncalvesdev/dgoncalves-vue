<template>
  <section class="footer-section">
    <div class="footer-grid w-layout-grid">
      <p>Diogo Gonçalves © 2023</p>
      <p>Based in Portugal 🇵🇹 <br/> but active worldwide.</p>
    </div>
    <div class="row marquee">
      <simple-marquee type="take me back to top" />
    </div>
  </section>
</template>

<script>
  import SimpleMarquee from "@/lib/custom-components/simple-marquee/simple-marquee.vue"

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "CustomFooter",
    components: { SimpleMarquee }
  }
</script>

<style lang="scss" scoped>
  .footer-section {
    padding-top: 5vh;
    width: 100vw;
    height: 13vh;
    overflow: hidden;
  }

  .footer-grid {
    padding: 0 5%;
  }

  .footer-grid p {
    display: flex;
    align-items: center;
  }

  .footer-grid p:nth-child(1) {
    justify-content: flex-start;
  }

  .footer-grid p:nth-child(2) {
    justify-content: flex-end;
  }

  .w-layout-grid {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr  1fr;
    grid-auto-columns: 1fr;
    display: grid;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .marquee {
    height: 5vh;
  }

  h2 , p {
    font-size: .8em;
  }

  @media only screen and (max-width: 420px) {
    .footer-section {
      height: 15vh;
    }
  }
</style>
