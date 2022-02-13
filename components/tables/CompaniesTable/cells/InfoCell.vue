<template>
  <div class="flex min-w-180px align-middle">
    <img :src="rowData.company.icon" class="mr-3" />
    <div class="my-auto">
      <div class="text-sm font-medium capitalize text-dark-900">
        {{ rowData.company.name }}
      </div>
      <div class="text-sm font-normal text-dark-500">
        {{ rowData.company.url }}
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
