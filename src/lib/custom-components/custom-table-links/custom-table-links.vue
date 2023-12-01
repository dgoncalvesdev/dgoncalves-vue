<template>
  <div class="custom-table-wrapper">
    <template v-for="text in content" :key="text.name">
      <div class="custom-table-row">
        <div class="custom-table-row-content">
          <div class="custom-table-title">
            <span>{{ text.name }}</span>
          </div>
          <div class="custom-table-links">
            <custom-simple-button
              text="Read me"
              :link="text.link"
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import { CustomSimpleButton } from "@/lib/custom-components"

  export default {
    name: "CustomTableLinks",
    components: { CustomSimpleButton },
    props: {
      content: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .custom-table-row {
    width: 100%;
    min-height: 5vh;
    height: auto;
    border-bottom: 1px solid $dark-brown;

    .custom-table-row-content {
      display: grid;
      grid-column-gap: 64px;
      grid-template-rows: auto;
      grid-template-columns: 1fr 1fr;
      min-height: 5vh;
      height: auto;
    }

    .custom-table-title,
    .custom-table-links
    {
      display: flex;
      align-items: center;
      padding: 10px;
    }

    .custom-table-links {
      justify-content: flex-end;
      margin-right: 0;
    }
  }

  .custom-table-row-content:hover {
    background-color: #70706871;
    margin: 0 30px;
    border-radius: 10px;
    min-height: 5vh;
    height: auto;
    transition: 0.3s;

    .custom-table-links {
      margin-right: 0;
    }
  }

  svg {
    fill: currentColor;
    height: auto;
    max-width: 66vmin;
    transform-origin: center;
    width: 66%;
  }

  @keyframes marquee-animation {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
</style>
