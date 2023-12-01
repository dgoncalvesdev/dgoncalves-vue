<template>
  <div class="contact-view">
    <div class="contact-view-wrapper">
      <div
        class="contact-view-wrapper__social"
        @mouseover="onMousemove"
        @mouseleave="onMouseout"
      >
        <social-list />
      </div>
      <div class="contact-view-wrapper_title">
        <contact-page />
      </div>
    </div>

    <div class="contact-img">
      <contact-image />
    </div>
  </div>
</template>

<script>

  import gsap from "gsap"
  import SocialList from "@/sections/Contact/SocialList.vue"
  import ContactPage from "@/sections/Contact/ContactPage.vue"
  import ContactImage from "@/sections/Contact/ContactImage.vue"

  export default {
    name: "ContactView",
    components: { ContactImage, ContactPage, SocialList },
    mounted() {

    },
    methods: {

      onMousemove() {
        gsap.to(".contact-img", {
          duration: 0.1,
          opacity: 1,
          delay: 0.5
        })
      },
      onMouseout() {
        gsap.to(".contact-img", {
          duration: 0.1,
          opacity: 0,
          delay: 0.5
        })
      }
    }
  }
</script>

<style lang="scss">
  .contact-view {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .contact-view-wrapper {
    display: flex;
    flex-direction: column;
    width: 65vw;
    height: 100vh;
    margin: auto;
    justify-content: center;
    z-index: 2;
    position: absolute;

    &__social {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .contact-img {
    opacity: 0;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    margin-left: 80%;
    margin-top: 35%;
    transform: rotate(-30deg);
  }

</style>
