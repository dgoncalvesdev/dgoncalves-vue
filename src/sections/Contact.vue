<template>
  <div class="contact-view row">
    <div class="contact-view-wrapper">
      <div
        class="contact-view-wrapper__social"
      >
        <social-list />
      </div>
      <div class="contact-view-wrapper_title">
        <contact-page />
      </div>
    </div>

    <div class="contact-img">
      <img
        src="@/assets/images/contact/paint_star_wars.png"
        alt=""
      >
    </div>
  </div>
</template>

<script>

  import SocialList from "@/sections/Contact/SocialList.vue"
  import ContactPage from "@/sections/Contact/ContactPage.vue"

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Contact",
    components: { ContactPage, SocialList },
    mounted() {

    },
    methods: {
      // onMousemove() {
      //   gsap.to(".contact-img", {
      //     duration: 0.1,
      //     opacity: 1,
      //     delay: 0.5
      //   })
      // },
      // onMouseout() {
      //   gsap.to(".contact-img", {
      //     duration: 0.1,
      //     opacity: 0,
      //     delay: 0.5
      //   })
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    width: 100%;
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 128px;
    padding-bottom: 128px;
    display: grid;
    position: relative;
    height: 60vh;
  }

  .contact-img {
    opacity: 0;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    margin-left: 75%;
    transform: rotate(347deg);
    margin-top: -25%;
  }

  @media only screen and (max-width: 1200px) {
    .row {
      padding-left: 64px;
      padding-right: 64px;
    }
  }

  @media only screen and (max-width: 800px) {
    .contact-view-wrapper_title {
      width: 70vw;
    }
  }

  @media only screen and (max-width: 420px) {
    .row {
      height: 100vh;
    }
  }

</style>
