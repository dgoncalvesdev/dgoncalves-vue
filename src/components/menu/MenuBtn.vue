<template>
  <div class="menu-btn-wrapper row">
    <span class="menu-btn-text">Menu</span>
    <img
      class="menu-btn"
      src="@/assets/svgs/menu2.svg"
      alt="Menu button"
    />
  </div>
</template>

<script>
  export default {
    name: "MenuBtn",
    data() {},
    created() {
      this.isMenuOpen = false
    }
  }
</script>

<style scoped lang="scss">
.menu-btn-wrapper {
  width: 6vw;
  height: 10vh;
  border-radius: 60px;

  color: $light-black;
  background-color: $light;

  justify-content: space-evenly;
}

img.menu-btn {
  width: 2vw;
}
</style>
