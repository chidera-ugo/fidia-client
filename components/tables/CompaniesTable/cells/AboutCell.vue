<template>
  <div class="flex flex-col justify-center align-middle">
    <div class="my-auto">
      <div class="text-sm capitalize text-dark-900 line-clamp-1">
        {{ rowData.about.snippet }}
      </div>
      <div class="text-sm text-dark-500 line-clamp-1">
        {{ rowData.about.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/require-prop-types */
import Vue from 'vue'

export default Vue.extend({
  props: ['rowData'],
})
</script>

<style scoped></style>
