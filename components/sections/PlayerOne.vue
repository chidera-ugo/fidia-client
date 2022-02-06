<template>
  <section
    id="about-us"
    class="relative bg-primary-dark-blue bg-cover xl:min-h-screen"
  >
    <div
      class="absolute inset-0 bottom-0 hidden h-full w-full flex-col justify-center align-middle lg:flex"
    >
      <img
        data-aos="slide-left"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        src="/images/boxes-right.png"
        class="absolute right-0 z-20 my-auto mr-auto flex h-104 align-middle md:mx-auto"
      />

      <img
        data-aos="slide-right"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        src="/images/boxes-left.png"
        class="absolute left-0 z-20 my-auto mr-auto flex h-104 align-middle md:mx-auto"
      />
    </div>
    <div class="mx-auto max-w-7xl px-6 py-44">
      <div class="grid-cols-12 lg:grid">
        <div class="col-span-6 flex flex-col justify-center align-middle">
          <div class="my-auto">
            <div class="relative">
              <h1
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                class="relative z-10 font-secondary text-5xl font-bold capitalize leading-none text-white text-shadow-lg"
              >
                we focus on quality entertainment
              </h1>

              <img
                data-aos="fade"
                data-aos-delay="1200"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                src="/images/smudge.png"
                class="absolute -top-32 z-0 col-span-6 my-auto mr-auto flex h-64 align-middle md:mx-auto"
              />
            </div>

            <h4
              data-aos="fade-top"
              data-aos-delay="300"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              class="mt-6 text-lg font-light leading-relaxed text-gray-200"
            >
              Our main focus is to provide the best entertainment possible for
              our players. We place key emphasis on creating games that are of a
              high quality in every way possible. This means that we ensure that
              all our games themes are engaging, our features unique and
              captivating and our art, stunning and precise! We don’t cut
              corners and do whatever is necessary to offer a memorable gameplay
              experience.
            </h4>

            <div class="py-4"></div>

            <div
              data-aos="fade"
              data-aos-delay="600"
              data-aos-offset="200"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              class="flex align-middle"
            >
              <nuxt-link
                to="#"
                class="primary-button hover:translate-x-1 hover:translate-y-1"
              >
                learn more
              </nuxt-link>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in-left"
          data-aos-delay="900"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          class="relative col-span-6 mt-24 flex h-104 justify-center align-middle lg:mt-0"
        >
          <img
            src="/images/about-player.png"
            class="absolute bottom-10 z-20 my-auto mr-auto flex h-104 animate-float align-middle md:mx-auto"
          />
          <img
            src="/images/about-phone.png"
            class="absolute bottom-0 z-10 my-auto mr-auto flex h-64 align-middle md:mx-auto"
          />
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
