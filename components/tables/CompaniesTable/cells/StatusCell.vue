<template>
  <div class="relative flex align-middle">
    <div
      class="my-auto rounded-full py-0.5 px-2 text-xs font-medium capitalize"
      :class="
        rowData.status === 'customer'
          ? 'bg-success-50 text-success-700'
          : 'bg-dark-100 text-dark-700'
      "
    >
      {{ rowData.status }}
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
