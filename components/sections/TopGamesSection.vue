<template>
  <section id="track-record" class="bg-primary-dark-blue bg-cover">
    <div class="mx-auto max-w-7xl px-6 py-44">
      <div class="relative">
        <h1
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          class="relative z-10 mb-3 text-center font-secondary text-5xl font-bold capitalize leading-none text-white text-shadow-lg"
        >
          Top Games
        </h1>
        <img
          data-aos="fade"
          data-aos-delay="1200"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          src="/images/smudge-two.png"
          class="absolute inset-0 z-0 col-span-6 mx-auto my-auto h-44"
        />
      </div>
      <div class="mt-24 grid-cols-12 gap-8 lg:grid">
        <TopGamesCard
          v-for="(game, index) in topGames"
          :key="game.title"
          :game-info="game"
          data-aos="fade-top"
          :data-aos-delay="index * 300"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { IGame } from '~/utils/types'

export default Vue.extend({
  data() {
    const topGames: IGame[] = [
      {
        image: 'http://pixner.net/ophela/demo/assets/images/games/1.jpg',
        title: 'lord clan',
        icon: '/images/icons/1.png',
        description:
          'Esse voluptate eiusmod eu reprehenderit mollit in cupidatat ex aliqua.',
        rating: 4,
      },
      {
        image: 'http://pixner.net/ophela/demo/assets/images/games/2.jpg',
        title: 'gal gadot',
        icon: '/images/icons/2.png',
        description:
          'Esse voluptate eiusmod eu reprehenderit mollit in cupidatat ex aliqua.',
        rating: 4,
      },
      {
        image: 'http://pixner.net/ophela/demo/assets/images/games/3.jpg',
        title: 'clash of clans',
        icon: '/images/icons/3.png',
        description:
          'Esse voluptate eiusmod eu reprehenderit mollit in cupidatat ex aliqua.',
        rating: 4,
      },
      {
        image: 'http://pixner.net/ophela/demo/assets/images/games/4.jpg',
        title: 'pixner assiar',
        icon: '/images/icons/1.png',
        description:
          'Esse voluptate eiusmod eu reprehenderit mollit in cupidatat ex aliqua.',
        rating: 4,
      },
    ]

    return {
      topGames,
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
