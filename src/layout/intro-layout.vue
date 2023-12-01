<template>
  <div
    ref="preLoader"
    class="pre-loader"
  >
    <div class="pre-loader-container">
      <div class="pre-loader-header">
        <div class="header contact">
          <h1>A</h1>
          <div class="header-wrapper"></div>
        </div>
        <div class="header">
          <h1 data-text="coding">
            coding
          </h1>
          <h1 data-text="skin">
            skin
          </h1>
          <div class="header-wrapper"></div>
        </div>
        <div class="header">
          <h1>with a</h1>
          &nbsp;&nbsp;
          <div class="header-wrapper"></div>
        </div>
        <div class="header">
          <h1 data-text="design">
            design
          </h1>
          <h1 data-text="soul">
            soul
          </h1>
          <div class="header-wrapper"></div>
        </div>
        <div class="header">
          <h1>in, the</h1>
          <div class="header-wrapper"></div>
        </div>
        <div class="header">
          <h1 data-text="digital">
            digital
          </h1>
          <h1 data-text=" era">
            era
          </h1>
          <div class="header-wrapper"></div>
        </div>
      </div>

      <div
        ref="preLoaderBtn"
        class="pre-loader-btn"
        @click="revealSite"
      >
        <div class="btn">
          click anywhere
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 68 10"
          >
            <defs />
            <path
              fill="#e2e2dd"
              d="M59.2,9.6V6.2h-58v-2c0,0,0,0,0,0h58V0.7L67,5.1L59.2,9.6z"
            />
          </svg>
          to start exploring
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gsap from "gsap"

  import { useUserStore } from "@/stores/userSession"
  export default {
    name: "IntroLayout",
    setup() {
      const userStore = useUserStore()
      return { userStore }
    },
    methods: {
      revealSite() {
        const timeline = gsap.timeline()
        const { preLoader, preLoaderBtn } = this.$refs

        timeline.to(preLoader, 1, {
          opacity: 0,
          display: "none",
          ease: "power2.inOut"
        })

        timeline
          .to(".header > h1", 2, {
            top: 0,
            ease: "power3.inOut",
            stagger: {
              amount: 0.3
            }
          })
          .to(preLoaderBtn, 0.3, {
            opacity: 1,
            delay: 2
          })

        this.userStore.setUserFirstEntrance()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pre-loader {
    position: fixed;
    width: 100%;
    height: 100%;
    background: $dark-brown;
    color: $light-brown;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .pre-loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .pre-loader-container .header {
    position: relative;
    width: max-content;
    margin: 0 auto;
  }

  .contact {
    display: flex;
  }

  .header h1 {
    position: relative;
    top: 125px;
    text-transform: uppercase;
    font-size: 7vw;
    line-height: 90%;
    color: $dark-brown;
    -webkit-text-stroke: .2px $light-brown;
    display: contents;
    font-family: 'Space Grotesk Medium', sans-serif;
    font-style: italic;
    font-weight: 600;
  }

  .header h1::before {
    content: attr(data-text);
    position: absolute;
    color: $light-brown;
    overflow: hidden;
    width: 0;
    transition: 1s;
    animation: fill 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
    animation-delay: 1s;
  }

  @keyframes fill {
    0% {
      width: 0;
    }

    100% {
      width: 100%;
    }
  }

  .header-wrapper:after {
    content: "";
    position: absolute;
    top: 120px;
    left: -20px;
    width: 110%;
    height: 120px;
    margin: 0 auto;
  }

  .pre-loader-btn {
    position: relative;
    margin: 3em 0 1em 0;
    font-size: 1.2em;
    cursor: pointer;
    z-index: 2;
  }

  .pre-loader-btn svg {
    position: relative;
    width: 70px;
    top: 0;
    padding: 0 0.4em;
  }
</style>
