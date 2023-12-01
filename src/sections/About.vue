<template>
  <section class="about-section row">
    <div class="about-sticky">
      <h3>{{ title }}</h3>
      <div class="about-diogo-photo-wrapper">
        <img
          src="@/assets/images/about/me_front.png"
          class="about-diogo-photo"
        >
      </div>
    </div>
    <div class="about-quote">
      <template
        v-for="quote in about"
        :key="quote"
      >
        <p> {{ quote }} </p>
      </template>
    </div>
  </section>
</template>

<script>
  import gsap from "gsap"

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "About",
    data() {
      return {
        title: 'Let\'s create beautiful things.',
        about : [
          'Between strokes and notes, my journey is a weaving of passions that unfold into visual and auditory forms. From the first sketches, I found in drawing a unique language to express what words often fail to capture. With every stroke, I construct a universe where creativity flows freely, shaping ideas and emotions.',
          'Music, in turn, is the soundtrack of this artistic journey. Among meticulously curated vinyl records, I discover the sonic richness that complements my moments of creation. Each pop in the turntable needle is an invitation to explore new rhythms, inspiring drawings that come to life to the beat of melodies.',
          'My quest for rare vinyl goes beyond a simple musical hunt; it\'s a search for authenticity and the richness of experiences that only analog sound can provide. Each record is a unique piece that resonates with the nuances of its time, adding vibrant layers to my creative journey.',
          'This relentless pursuit of artistic expression extends beyond paper and vinyl. As a developer who has transitioned into the role of a Product Owner, I\'ve found fascinating parallels between the code I write and the lines I draw. Both are ways of bringing ideas to life, of creating something meaningful from nothing.',
          'In the role of a Product Owner, my journey has taken a new direction, guiding teams to transform concepts into tangible products. The same passion I apply to drawing and music reflects in how I lead, seeking harmony between creative vision and technical execution.',
          'Thus, my trajectory is a symphony of drawings, music, and code – a constant exploration of the boundaries between art and technology. I invite you to join me on this journey where each sketch and chord are chapters shaping the panorama of creativity and innovation.'
        ]
      }
    },
    mounted() {
      gsap.to(".about-intro__text--btn", {
        duration: 1,
        left: "5vw",
        ease: "power4.easeIn",
        stagger: 0.25,
        delay: 0.2
      })
    }
  }
</script>

<style lang="scss" scoped>
  .about-section {
    width: 100%;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    height: 90vh;
  }

  @media only screen and (max-width: 1200px) {
    .about-section {
      padding-left: 64px;
      padding-right: 64px;
    }
  }

  @media only screen and (max-width: 800px) {
    .about-section {
      height: 100%;
    }

    .row {
      display: flex !important;
      flex-direction: column !important;
    }

    .about-quote {
      margin-top: 5vh;
    }
  }

  .row {
    width: 100%;
    max-width: 1080px;
    grid-column-gap: 64px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    padding-top: 128px;
    padding-bottom: 128px;
    display: grid;
    position: relative;

    p {
      margin-bottom: 1em;
    }
  }

  .about-sticky {
    grid-row-gap: 64px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: stretch;
    margin-bottom: 0;
    display: flex;
    position: sticky;
    top: 100px;

    .about-diogo-photo-wrapper {
      width: 100%;
      max-height: 35vh;
      object-fit: cover;
      border-radius: 32px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }

    .about-diogo-photo {
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity .6s;
      position: relative;
    }
  }
</style>
