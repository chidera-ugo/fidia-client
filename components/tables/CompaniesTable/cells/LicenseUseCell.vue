<template>
  <div class="relative flex align-middle">
    <div
      class="relative my-auto h-2 w-full rounded-full bg-primary-50"
      style="width: 88px"
    >
      <div
        class="absolute inset-0 h-full rounded-full bg-primary-600"
        :style="`width: ${Number(rowData.licenseUse)}%`"
      ></div>
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
