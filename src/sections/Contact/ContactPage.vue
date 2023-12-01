<template>
  <section class="contact-page">
    <div class="contact-page">
      <div class="contact-page__quick-info">{{ info.quickInfo }}</div>
      <div class="contact-page__contact-title">{{ info.title }}</div>
    </div>
    <div class="contact-page">
      <div class="contact-page__contact-title">{{ info.subTitle }}</div>
    </div>
  </section>
</template>

<script lang="ts">
  export default {
    name: "ContactPage",
    data() {
      return {
        info: {
          quickInfo: 'I\'m currently unavailable for freelance work,\n' +
            'but I always love hearing new some ideas and I\'m\n' +
            'more than happy to chat about anything.',
          title: 'REACH ME',
          subTitle: 'OUT ✺ ANY TIME'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.contact-page {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;

    &__quick-info {
      width: 40%;
      font-size: 1.2em;
    }

    &__contact-title {
      font-family: "Roslindale Variable Display Regular", sans-serif;
      font-size: 7em;
    }
  }

  @media only screen and (max-width: 800px) {
    div.contact-page {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      &__quick-info {
        margin: 10% 0;
        width: 100%;
        font-size: 1.2em;
      }

      &__contact-title {
        font-family: "Roslindale Variable Display Regular", sans-serif;
        font-size: 4em;
      }
    }
  }
</style>
