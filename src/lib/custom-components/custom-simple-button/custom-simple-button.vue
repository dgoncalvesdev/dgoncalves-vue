<template>
  <button
    ref="CustomSimpleBtn"
    class="custom-simple-button"
    @click="openUrl(link)"
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
        required: true,
        default: ''
      },
      link: {
        type: String,
        required: true
      }
    },
    methods: {
      openUrl(url) {
        window.open(url, '_blank')
      }
    }
  }
</script>

<style lang="scss">
  button.custom-simple-button {
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
  }

  button:hover {
    background-color: $light-brown;
    color: $dark-brown;
    border: 1px solid $dark-brown;
    cursor: pointer;
  }
</style>
