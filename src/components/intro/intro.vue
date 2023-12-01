<template>
  <div class="info-wrapper">
    <div class="info-names">
      <h2 class="info-head-text">{{ info.name }}</h2>
      <h2 class="info-text">{{ info.surname }}</h2>
    </div>
    <div class="info-diogo-photo-wrapper">
      <distortion-image />
    </div>
    <div class="info-quote">
      <h1 class="info-head-text">{{ info.quote }}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Intro",
    data() {
      return {
        info: {
          name: 'Diogo',
          surname: 'Gonçalves',
          quote: '"In the dance of strokes and vinyl, I bridge creativity and code as a Product Owner. Join me in this symphony of innovation, where each sketch and chord contributes to a vibrant tapestry of expression."'
        }
      }
    }
  }
</script>

<style lang="scss">
  .info-wrapper {
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    .info-names {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2:nth-child(1) {
        font-size: 3em;
      }

      h2:nth-child(2) {
        font-size: 6em;
      }
    }

    .info-diogo-photo-wrapper {
      margin-top: -3vh;
      max-height: 50vh;
      object-fit: cover;
      border-radius: 32px;
      position: relative;
      overflow: hidden;

      distortion-image {
        width: 25vw;
      }
    }

    .info-quote {
      margin-top: 10%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      h1 {
        width: 50%;
      }
    }
  }

  @media only screen and (max-width: 500px) {

    .info-wrapper {
      overflow: hidden;

      .info-names {
        h2:nth-child(1) {
          font-size: 1em !important;
        }

        h2:nth-child(2) {
          font-size: 3em !important;
        }
      }

      .info-diogo-photo-wrapper {
        margin-top: -1.5vh;

        distortion-image {
          width: 35vw;
        }
      }

      .info-quote {
        overflow: hidden;

        h1 {
          font-size: .75em;
          width: 50%;
        }
      }
    }
  }
</style>
