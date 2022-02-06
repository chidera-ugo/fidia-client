<template>
  <section id="home" class="bg-primary-dark-blue bg-cover xl:min-h-screen">
    <div class="mx-auto max-w-7xl px-6 py-44">
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
              class="t-primary mt-5 text-3xl font-bold tracking-wider text-primary-pink sm:mt-0 md:text-4xl"
            >
              METASINO
            </h3>

            <div class="py-2 lg:py-4"></div>

            <h1
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              class="font-secondary text-5xl font-bold leading-none text-white text-shadow-lg md:text-6xl xl:text-7.5xl"
            >
              THE FUTURE OF GAMING
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
              Assertively Communicate An Expanded Array Of Mindshare Rather Than
              Diverse Technologies For Magnetic Applications Eamlessly Virtual
              Then Conveniently Monetize Synergistic Human Capital
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
