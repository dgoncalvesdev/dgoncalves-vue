<template>
  <section class="social-list">
    <div
      v-for="social in socials"
      class="social-links"
    >
      <button @click="openUrl(social.link)">{{ social.network }}</button>
    </div>
  </section>
</template>

<script lang="ts">
  export default {
    name: "SocialList",
    data() {
      return {
        socials: [
          { network: 'Instagram', link: 'https://www.instagram.com/dgoncalves_96/'},
          { network: 'LinkedIn', link: 'https://www.linkedin.com/in/dgoncalves96/'},
          { network: 'Email', link: ''}
        ]
      }
    },
    methods: {
      openUrl(url: string | URL | undefined) {
        window.open(url, '_blank')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .social-list {
    margin-left: 2%;
    margin-bottom: 2vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30%;
  }

  button {
    background-color: $dark-brown;
    color: $light-brown;
    border: 1px solid $dark-brown;
    height: 32px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 24px;
    flex: none;
    justify-content: center;
    align-items: center;
    padding: 3px 12px 2px;
    font-size: 11px;
    line-height: 1;
    transition: all .3s cubic-bezier(.215,.61,.355,1);
    display: flex;
    position: relative;
    overflow: hidden;
    margin-right: 5px;
  }

  button:hover {
    background-color: $light-brown;
    color: $dark-brown;
    border: 1px solid $dark-brown;
    cursor: pointer;
  }

  @media only screen and (max-width: 400px) {
    .social-list {
      margin-left: 0;
      margin-bottom: 2vw;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      width: 30%;
    }

    button {
      margin-bottom: 1vh;
    }
  }
</style>
