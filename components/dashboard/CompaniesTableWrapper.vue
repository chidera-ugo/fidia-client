<template>
  <div class="sm:px-8">
    <CompaniesTableHeader />
    <div class="mt-7"></div>
    <div
      class="overflow-hidden rounded-lg border border-dark-200 sm:shadow-primary-md"
    >
      <CompaniesTable />
      <div class="flex justify-between bg-white px-4 py-4 align-middle md:px-6">
        <button class="block sm:hidden">
          <div class="button-slot">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8334 7.00002H1.16669M1.16669 7.00002L7.00002 12.8334M1.16669 7.00002L7.00002 1.16669"
                stroke="#667085"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
        <div class="hidden align-middle sm:flex">
          <button class="secondary-button mr-3">
            <div class="button-slot">
              <span> Previous</span>
            </div>
          </button>

          <button class="secondary-button">
            <div class="button-slot">
              <span> Next </span>
            </div>
          </button>
        </div>

        <div class="my-auto text-sm font-medium text-dark-700">
          Page 1 of 10
        </div>

        <button class="block sm:hidden">
          <div class="button-slot">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.16669 7.00002H12.8334M12.8334 7.00002L7.00002 1.16669M12.8334 7.00002L7.00002 12.8334"
                stroke="#667085"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>
