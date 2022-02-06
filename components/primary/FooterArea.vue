<template>
  <section class="bg-primary-dark-blue">
    <div class="mx-auto max-w-7xl px-6 pt-36 pb-12">
      <div class="grid-cols-12 text-4xl text-white sm:grid">
        <div
          v-for="option in footerOptions"
          :key="option.title"
          class="col-span-6 lg:col-span-3"
        >
          <div
            class="mb-3 mt-10 font-secondary text-lg font-bold uppercase text-white"
          >
            {{ option.title }}
          </div>

          <NuxtLink
            v-for="link in option.links"
            :key="link"
            :to="`/#`"
            class="block py-2 text-base capitalize duration-300 ease-linear hover:text-primary-pink"
          >
            {{ link }}
          </NuxtLink>
        </div>
      </div>

      <div class="py-12"></div>

      <div class="justify-between align-middle lg:flex">
        <div class="font-sm my-auto text-white">
          Copyright © 2020. All Rights Reserved
          <span class="font-bold text-primary-pink"> Metasino </span>
        </div>

        <div class="ml:mt-0 my-auto mt-4 -ml-5 flex align-middle">
          <a
            v-for="social in socialMedia"
            :key="social.url"
            href="https://google.com"
            target="_blank"
            rel="me nofollow noopener noreferrer"
            class="ml-2 p-1.5 text-gray-300 transition duration-300 hover:text-primary-pink"
          >
            <SocialMedia :title="social.title" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    const footerOptions: { title: string; links: string[] }[] = [
      {
        title: 'about',
        links: ['about us', 'contact us', 'customer reviews', 'privacy policy'],
      },
      {
        title: 'my account',
        links: ['manage account', 'account verification', 'safety & security'],
      },
      {
        title: 'help center',
        links: ['about us', 'quick start', 'help center', 'FAQ'],
      },
      {
        title: 'legal info',
        links: ['security', 'terms of service', 'complaints policy'],
      },
    ]

    const socialMedia = [
      {
        title: 'linkedIn',
        url: 'https://google.com',
      },
      {
        title: 'github',
        url: 'https://google.com',
      },
      {
        title: 'twitter',
        url: 'https://google.com',
      },
      {
        title: 'instagram',
        url: 'https://google.com',
      },
    ]

    return {
      footerOptions,
      socialMedia,
    }
  },
})
</script>

<style scoped></style>
