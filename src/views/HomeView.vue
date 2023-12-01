<template>
  <div
    v-motion
    :initial="{ y: 100, opacity: 0 }"
    :enter="{
      y: 0,
      opacity: 1,
      transition: {
        duration: 1600,
        type: 'keyframes',
        ease: 'easeIn',
      }, }"
  >
    <div class="nav-wrapper">
      <nav-bar />
    </div>
    <div class="home-wrapper">
      <hero />
      <about />
      <brands />
      <articles />
    </div>
    <contact />
    <custom-footer />
  </div>
</template>

<script lang="ts">

  import { defineComponent } from "vue"
  import NavBar from "@/components/nav/navbar.vue"
  import Hero from "@/sections/Hero.vue"
  import Brands from "@/sections/Brands.vue"
  import About from "@/sections/About.vue"
  import Articles from "@/sections/Articles.vue"
  import CustomFooter from "@/sections/Footer.vue"
  import Contact from "@/sections/Contact.vue"
  import gsap from "gsap"

  export default defineComponent({
    name: "HomeView",
    components: { Contact, CustomFooter, Articles, About, Brands, Hero, NavBar },
    mounted() {
      gsap.to(".nav-wrapper", {
        duration: 1,
        left: "5vw",
        ease: "power4.easeIn",
        stagger: 0.25,
        delay: 0.2
      })
    }
  })
</script>

<style lang="scss" scoped>
  .home-wrapper {
    margin-top: 6vh;
    width: 100vw;
    overflow-x: hidden;
  }
</style>
