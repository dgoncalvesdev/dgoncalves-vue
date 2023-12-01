<template>
  <div class="articles-wrapper">
    <div class="articles-wrapper__header">
      STORIES
    </div>

    <div class="articles-wrapper__content">
      <div class="articles-list">
        <template
          v-for="storie in stories"
          :key="storie.id"
        >
          <div class="articles-list__content">
            <div class="articles-list__content--name">
              {{ storie.title }}
            </div>
            <div class="articles-list__content--desc">
              {{ storie.desc }}
            </div>
            <div class="articles-list__content--year">
              {{ storie.year }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

  export default {
    name: "Stories",
    data() {
      return {
        stories: []
      }
    },
    created() {
      // ts@ignore
      this.stories = [
        {
          id: "1",
          title: "arc 1",
          desc: "sadas difuhd adjdsh hsdua",
          year: "2020"
        },
        {
          id: "2",
          title: "arc 2",
          desc: "sadas difuhd adjdsh hsdua",
          year: "2020"
        },
        {
          id: "3",
          title: "arc 3",
          desc: "sadas difuhd adjdsh hsdua",
          year: "2020"
        },
        {
          id: "4",
          title: "arc 4",
          desc: "sadas difuhd adjdsh hsdua",
          year: "2020"
        }
      ]

      console.log(this.stories)
    }
  }
</script>

<style lang="scss" scoped>
.articles-wrapper {
  &__content {
    display: flex;
    justify-content: flex-end;
  }
}

.articles-list {
  width: 50%;
  height: 50%;

  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2%;
    height: 50px;

    border-top: 1px solid $lightest-blue;
  }

  &__content:last-child {
    border-bottom: 1px solid $lightest-blue;
  }

  &__content:hover {
    color: red;
  }
}
</style>
