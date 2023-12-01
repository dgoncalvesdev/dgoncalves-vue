<template>
  <div id="navbar">
    <div class="nav-wrapper row">
      <div class="col">dgonçalves</div>
      <div class="col col-btn">
        <custom-simple-button :text="socials.Instagram.network"
                              :link="socials.Instagram.link" />
        <custom-simple-button :text="socials.LinkedIn.network"
                              :link="socials.LinkedIn.link" />
        <custom-simple-button text="F/23" />
      </div>
    </div>
  </div>
</template>

<script>
  import { CustomSimpleButton } from "@/lib/custom-components"

  export default {
    // eslint-disable-next-line vue/no-reserved-component-names,vue/multi-word-component-names
    name: "NavBar",
    components: { CustomSimpleButton },
    data() {
      return {
        socials: {
          Instagram: { network: "Instagram", link: "https://www.instagram.com/dgoncalves_96/" },
          LinkedIn: { network: "LinkedIn", link:"https://www.linkedin.com/in/dgoncalves96/"}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #navbar {
    background: $light-brown;
    color: $dark-brown;
    top: 0;
    height: 6vh;
    line-height: 6vh;
    width: 100vw;
    z-index: 10;

    .row {
      width: 100vw;
      padding: 0 2vw;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      .col {
        width: 33vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      .col-btn {
        justify-content: flex-end;

        button {
          margin-right: 0.5vw;
        }
      }
    }
  }
</style>
