<template>
  <section
    id="track-record"
    style="background-image: url('/images/overview.jpg')"
    class="bg-primary-dark-blue bg-cover"
  >
    <div class="mx-auto max-w-7xl px-6 py-44">
      <h1
        data-aos="fade"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        class="relative z-10 text-center font-secondary text-5xl font-bold capitalize leading-none text-white text-shadow-lg"
      >
        Track Record
      </h1>
      <div class="mt-24 grid-cols-12 gap-8 lg:grid">
        <div
          v-for="(record, index) in records"
          :key="record.title"
          data-aos="fade-top"
          :data-aos-delay="index * 300"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          class="col-span-4 my-4 flex rounded-xl bg-white bg-opacity-10 p-6 align-middle shadow-md backdrop-blur-xl backdrop-filter"
        >
          <img :src="record.image" class="my-auto mr-5 h-20 md:h-16 lg:h-20" />
          <div class="my-auto">
            <div class="text-3xl font-bold text-white">
              {{ Number(record.value).toLocaleString() }}
            </div>

            <div class="mt-2 font-secondary text-lg uppercase text-white">
              {{ record.title }}
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="py-3"></div>

      <div class="flex w-full justify-center align-middle">
        <div class="carousel absolute -bottom-36 z-40 mx-auto">
          <VueSlickCarousel :arrows="true">
            <CarouselCard
              v-for="carouselInfo in carouselItems"
              :key="carouselInfo.person"
              :carousel-info="carouselInfo"
            />
          </VueSlickCarousel>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    const records = [
      {
        image: '/images/icons/1.png',
        value: 12,
        title: 'games',
      },
      {
        image: '/images/icons/2.png',
        value: 12000,
        title: 'players',
      },
      {
        image: '/images/icons/3.png',
        value: 420,
        title: 'champions',
      },
    ]

    return {
      records,
    }
  },
})
</script>

<style scoped lang="scss">
[data-aos='fade-top'] {
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    opacity: 1;
  }

  transform: translateY(50px);

  &.aos-animate {
    transform: translateY(0);
  }
}

.carousel {
  width: 750px;
}
</style>
