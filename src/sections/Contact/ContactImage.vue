<template>
  <section class="contact-image">
    <div class="contact-image-section--img">
      <div class="contact-image-section--img-eyes">
        <div class="eye left" />
        <div class="eye right" />
      </div>
      <img
        src="@/assets/contact-img.png"
        alt=""
      >
    </div>
  </section>
</template>

<script lang="ts">
  export default {
    name: "ContactImage"
  }
</script>

<style lang="scss" scoped>
  .contact-image-section {
    width: 8vw;

    &--img-eyes {
      position: absolute;
      margin: 10em 0 0 11em;
    }
  }

  .eye {
      background: $grey;
      position: relative;
      display: inline-block;
      border-radius: 50%;
      height: 30px;
      width: 30px;
  }

  .left {
    margin-right: 2em;
  }
</style>
