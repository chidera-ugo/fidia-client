<template>
  <section
    id="home"
    style="background-image: url('/images/hero-bg.webp')"
    class="relative bg-primary-dark-blue bg-cover xl:min-h-screen"
  >
    <div class="absolute inset-0 z-0 h-full w-full xl:w-2/3">
      <img
        data-aos="fade"
        data-aos-delay="1800"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        src="/images/hero/el-6.png"
        class="absolute left-0 top-32 h-72 animate-float"
      />

      <img
        data-aos="fade"
        data-aos-delay="2100"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        src="/images/hero/el-10.png"
        class="absolute right-16 top-80 hidden h-10 animate-roose md:block"
      />

      <img
        data-aos="fade"
        data-aos-delay="1500"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        src="/images/hero/el-11.png"
        class="absolute right-32 top-64 hidden h-10 animate-fleet md:block"
      />
    </div>
    <div class="relative z-10 mx-auto max-w-7xl px-6 py-44">
      <div class="grid-cols-12 lg:grid">
        <div class="col-span-6 flex flex-col justify-center align-middle">
          <div class="my-auto">
            <h3
              data-aos="fade-down"
              data-aos-offset="-100"
              data-aos-delay="1200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              class="mt-5 text-xl font-bold uppercase tracking-wider text-primary-pink sm:mt-0 md:text-2xl"
            >
              more than just an idea
            </h3>

            <div class="py-2 lg:py-4"></div>

            <h1
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              class="font-secondary text-5xl font-bold uppercase leading-tight text-white text-shadow-lg md:text-6xl md:leading-none xl:text-7xl"
            >
              casino in the metaverse
            </h1>

            <h4
              data-aos="fade-top"
              data-aos-offset="-100"
              data-aos-delay="900"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              class="mt-6 text-lg font-light leading-relaxed text-gray-200"
            >
              Metasino is a decentralized virtual casino built on the blockchain
              to be played in the Metaverse using the Metasino native token -
              $CASINO. Participants all around the world will come to Metasino
              to play different casino games and win redeemable rewards.
            </h4>

            <div class="py-4"></div>

            <div
              data-aos="fade"
              data-aos-delay="1200"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              class="flex align-middle"
            >
              <nuxt-link to="#" class="primary-button"> play now </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
[data-aos='fade-down'] {
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    opacity: 1;
  }

  transform: translateY(-20px);

  &.aos-animate {
    transform: translateY(0);
  }
}

[data-aos='fade-top'] {
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    opacity: 1;
  }

  transform: translateY(10px);

  &.aos-animate {
    transform: translateY(0);
  }
}
</style>
