<template>
  <div class="about-logo-wrapper">
    <img v-if="brand === 'mini'" src="@/assets/svgs/brands/mini-logo-1.svg" width="50">
    <img v-if="brand === 'critical'" src="@/assets/svgs/brands/svgexport-1.svg" width="50">
    <img v-if="brand === 'bmw'" src="@/assets/svgs/brands/logo-bmw-2020.svg" width="50">
    <img v-if="brand === 'milenar'" src="@/assets/svgs/brands/favicon.jpeg" width="50">
    <img v-if="brand === 'vwds'" src="@/assets/svgs/brands/vwds.svg" width="50">
    <img v-if="brand === 'man'" src="@/assets/svgs/brands/MAN.svg" width="50">
    <img v-if="brand === 'nova'" src="@/assets/svgs/brands/NOVA%20FCSH.svg" width="50">
    <div class="about-logo w-embed ">
    </div>
    <div class="about-logo-background"></div>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Pad",
    props: {
      brand: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: false,
        default: 'Curious to know more ?'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-logo-wrapper {
    width: 100%;
    min-height: 120px;
    perspective: 1200px;
    perspective-origin: 50%;
    transform-origin: 50%;
    border-radius: 12px;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    transition: all .5s cubic-bezier(.175,.885,.32,1.275);
    display: flex;
    position: relative;
    overflow: hidden;
    transform: perspective(1200px);
  }

  .w-embed:before, .w-embed:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table;
  }
  .about-logo {
    z-index: 1;
    width: 70%;
    max-height: 35px;
    max-width: 130px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    overflow: auto;
  }

  .about-logo-background {
    width: 100%;
    height: 100%;
    opacity: .06;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }

  .about-divider, .about-logo-background, .video-role-divider {
     background: black;
   }

  .about-logo-wrapper:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    background: radial-gradient(600px circle at var(--x-px) var(--y-px), rgba(255, 255, 255, 0.14), transparent 40%);
  }

  .bmw {
    background-image: url("@/assets/svgs/brands/svgexport-1.svg");
  }
</style>
