<template>
  <div class="flex flex-col justify-center align-middle">
    <div
      class="relative my-auto flex w-full flex-col justify-center align-middle"
    >
      <img
        v-for="(user, index) in rowData.users.slice(0, 5)"
        :key="user"
        :src="user"
        :style="`left: ${index * 20}px`"
        class="absolute my-auto h-6 w-6 rounded-full border-1.5"
      />
      <span
        v-if="rowData.users.length - 5 > 0"
        style="left: 100px"
        class="absolute my-auto flex h-6 w-6 flex-col justify-center rounded-full border-1.5 bg-primary-50 align-middle text-xs font-medium text-primary-600"
      >
        <span class="text-center"> +{{ rowData.users.length - 5 }} </span>
      </span>
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
