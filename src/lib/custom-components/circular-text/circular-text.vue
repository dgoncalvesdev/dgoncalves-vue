<template>
  <svg
    viewBox="0 0 100 100"
    width="100"
    height="100"
  >
    <defs>
      <path
        id="circle"
        d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
      />
    </defs>
    <text font-size="17">
      <textPath xlink:href="#circle">
        Keep scrolling...       Keep scrolling...
      </textPath>
    </text>
  </svg>
</template>

<script>
  export default {
    name: "CircularText",
    methods: {
    }
  }
</script>

<style lang="scss">
  svg {
    fill: currentColor;
    height: auto;
    max-width: 66vmin;
    transform-origin: center;
    width: 66%;
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
