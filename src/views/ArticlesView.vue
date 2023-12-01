<template>
  <div class="contact-view__wrapper">
    <div class="contact-view__info">
      Based in Portugal but active worldwide.
    </div>
    <div class="contact-view__social">
      <div class="contact-view__social--linkedin">
        <label>LINKEDIN</label>
      </div>
      <div class="contact-view__social--medium">
        <label>MEDIUM</label>
      </div>
    </div>
    <div class="contact-view__email">
      <scrolling-text text="fwefwefwe"></scrolling-text>
    </div>
  </div>
</template>

<script>
  import ScrollingText from "@/lib/custom-components/scrolling-text/scrolling-text.vue"

  export default {
    name: "ArticlesView",
    components: { ScrollingText }
  }
</script>

<style lang="scss" scoped>
.contact-view {
  min-width: 100vw;
  max-height: 50vh;

  &__wrapper {
    display: grid;
    grid-template-columns: 0.5fr 0.2fr 1fr;
    align-content: center;
    align-items: center;

    border-top: 2px solid $lightest-blue;
    border-bottom: 2px solid $lightest-blue;
  }

  &__social {
    &--linkedin {
      border-bottom: 2px solid $lightest-blue;
    }

    &--linkedin,
    &--medium {
      min-height: 30vh;

      display: flex;
      align-items: center;
      justify-content: center;

      border-left: 2px solid $lightest-blue;
      border-right: 2px solid $lightest-blue;
    }
  }
}
</style>
