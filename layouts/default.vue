<template>
  <div>
    <NavigationBar />
    <div class="mt-24 mb-0 sm:mb-12 sm:mt-120px lg:mt-185px">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
})
</script>

<style scoped></style>
