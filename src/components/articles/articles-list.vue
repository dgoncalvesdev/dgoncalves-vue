<template>
  <section class="articles-section">
    <div class="cursor" />
    <div class="wrapper">
      <div class="articles-list">
        <div
          class="articles p-1"
          @mouseover="changeCursor('https://vueschool.io/storage/media/8f311ddd15cd61143c9306ec6a073fae/vue-3-fundamentals-transparent.png')"
          @mouseleave="onMouseout"
        >
          <div class="articles-title"><h1>Tips & Best Pratices for Vue 3</h1></div>
          <div class="articles-categ">Vue 3</div>
          <div
            ref="overlay"
            class="articles-overlay"
            @mousemove="onMousemove"
          />
        </div>
      </div>
    </div>

    <div class="wrapper-btn">
      <custom-button
        text="Curious to read and learn more ?"
        hover-text="Take me there!"
      />
    </div>
  </section>
</template>

<script>
  import CustomButton from "@/lib/custom-components/custom-button/custom-button.vue"

  export default {
    name: "ArticlesList",
    components: { CustomButton },
    data() {
      return {
        flag: false
      }
    },
    methods: {
      changeCursor(imageUrl) {
        const $cursor = document.querySelector('.cursor')
        $cursor.style.backgroundImage = `url(${ imageUrl })`
      },
      onMousemove(e) {
        if (!this.flag) {
          this.flag = true
          TweenLite.to('.cursor', 0.3, { scale: 1, autoAlpha: 1 })
          this.$refs.overlay.addEventListener('mousemove', this.moveCircle)
        }
        this.moveCircle(e)
      },
      onMouseout() {
        this.flag = false
        TweenLite.to('.cursor', 0.3, { scale: 0.1, autoAlpha: 0 })
      },
      moveCircle(e) {
        const $cursor = document.querySelector('.cursor')
        TweenLite.to($cursor, 0.5, {
          css: {
            left: e.pageX,
            top: e.pageY
          },
          delay: 0.03
        })
      }
    }
  }
</script>

<style scoped>
  .articles-title h1 {
      font-weight: 300;
  }

  .articles-categ {
      font-weight: lighter;
  }

  .cursor {
      position: absolute;
      width: 15%;
      height: 20%;
      top: 50%;
      left: 50%;
      transform: scale(0.1);
      opacity: 0;
      margin: -100px 0 0 -100px;
      background-size: 70%;
      background-repeat: no-repeat;
      z-index: 1;
  }

  .wrapper {
      width: 80%;
      margin: 180px auto;
      height: 100%;
  }

  .articles {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 2;
      color: white;
      mix-blend-mode: difference;
  }

  .articles-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 50%;
      z-index: 1;
  }

  .wrapper {
      width: 80%;
      margin: 100px 180px 0;
      height: 20%;
  }

  .wrapper-btn {
      display: flex;
      align-items: center;
      justify-content: center;
  }
</style>
