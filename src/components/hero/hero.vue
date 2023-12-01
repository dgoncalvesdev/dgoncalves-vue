<template>
  <div class="hero-wrapper">
    <div class="hero__intro">
      <div class="hero__top-section">
        <div class="hero__top-section--text">
          <span class="info-head-text">{{ info.name }}</span>
          <h2 class="info-text">{{ info.surname }}</h2>
        </div>
      </div>

      <div class="hero__middle-section">
        <div class="hero__middle-section--img">
          <div class="hero__middle-section--img-eyes">
            <div class="eye left">
              <div class="pupil" />
            </div>
            <div class="eye right">
              <div class="pupil" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Hero",
    data() {
      return {
        info: {
          name: 'Diogo',
          surname: 'Gonçalves',
          title: 'Software Developer',
          subTitle: 'Full stack capable'
        }
      }
    }
  }
</script>

<style lang="scss">
  .hero-wrapper {
      width: 100vw;
      overflow: hidden;
      height: 100vh;
  }
</style>
