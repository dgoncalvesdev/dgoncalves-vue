<template>
  <div
    class="marquee"
    :class="`marquee-${ animation }`"
  >
    <span
      ref="marquee"
    > {{ getMarqueeText() }} </span>
  </div>
</template>

<script>
  import isElementInViewport from "@/utils/isElementInViewport"

  export default {
    name: "SimpleMarquee",
    props: {
      type: {
        type: String,
        required: true
      },
      animation: {
        type: String,
        required: false,
        default: 'onHover'
      }
    },
    mounted() {
      if (this.animation === 'scroll') window.addEventListener('scroll', this.updateMarqueePosition)
    },
    beforeUnmount() {
      if (this.animation === 'scroll') window.removeEventListener('scroll', this.updateMarqueePosition)
    },
    methods: {
      getMarqueeText() {
        return (this.type + ' - ').repeat(60)
      },
      updateMarqueePosition() {
        const marquee = this.$refs.marquee
        if(!isElementInViewport(marquee))  return
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        marquee.style.transform = `translateX(-${ scrollTop }px)`
      }
    }
  }
</script>

<style lang="scss">

  .marquee {
    width: 100%;
    margin: 0 auto;
    padding: 1em 0;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .marquee span {
    text-transform: uppercase;
    font-weight: 400;
    mix-blend-mode: normal !important;
    font-size: 10em;
    padding-left: -10%;
  }

  .marquee-onHover span {
    font-size: 3em;
  }

  .marquee-onHover span:hover {
    animation: marquee-animation 180s linear infinite;
    background-color: $dark-brown;
    color: $light-brown;
    font-size: 3em;
    font-style: italic;
    cursor: pointer;
  }

  @keyframes marquee-animation {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
</style>
