<template>
  <div>
    <NavigationBar />
    <Nuxt />
    <FooterArea />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
})
</script>

<style scoped></style>
