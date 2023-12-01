<template>
  <button
    ref="CustomBtn"
    class="custom-button"
    @mouseover="onHover"
    @mouseleave="offHover"
  >
    {{ text }}
  </button>
</template>

<script>
  export default {
    name: "CustomButton",
    props: {
      text: {
        type: String,
        required: false,
        default: 'Curious to know more ?'
      },
      hoverText: {
        type: String,
        required: false,
        default: 'Let\'s go !'
      }
    },
    data() {
      return {
        isHover: false,
        customBtn: null
      }
    },
    mounted() {
      this.customBtn = this.$refs.CustomBtn
    },
    methods: {
      onHover() {
        if (this.customBtn)
          this.customBtn.innerText = this.hoverText
      },
      offHover() {
        if (this.customBtn)
          this.customBtn.innerText = this.text
      }
    }
  }
</script>

<style lang="scss">
  button.custom-button {
    background-color: $dark-brown;
    color: $light-brown;
    width: 20vw;
    border: none;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
    text-transform: uppercase;
  }

  button.custom-button:hover {
    background-color: $light-brown;
    color: $dark-brown;
    border: 1px solid $dark-brown;
  }
</style>
