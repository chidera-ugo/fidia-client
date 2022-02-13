<template>
  <div
    class="summary-card col-span-4 my-5 h-158px rounded-lg border border-gray-200 bg-white p-4 sm:h-176px sm:p-6 lg:my-0"
  >
    <div class="flex justify-between align-middle">
      <span class="my-auto font-medium capitalize text-dark-900">
        {{ summaryItem.title }}
      </span>

      <button class="-mr-4 w-10">
        <svg
          width="4"
          height="16"
          class="mx-auto"
          viewBox="0 0 4 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.33333 8.83334C2.79357 8.83334 3.16667 8.46025 3.16667 8.00001C3.16667 7.53977 2.79357 7.16668 2.33333 7.16668C1.8731 7.16668 1.5 7.53977 1.5 8.00001C1.5 8.46025 1.8731 8.83334 2.33333 8.83334Z"
            stroke="#98A2B3"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.33333 3.00001C2.79357 3.00001 3.16667 2.62691 3.16667 2.16668C3.16667 1.70644 2.79357 1.33334 2.33333 1.33334C1.8731 1.33334 1.5 1.70644 1.5 2.16668C1.5 2.62691 1.8731 3.00001 2.33333 3.00001Z"
            stroke="#98A2B3"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.33333 14.6667C2.79357 14.6667 3.16667 14.2936 3.16667 13.8333C3.16667 13.3731 2.79357 13 2.33333 13C1.8731 13 1.5 13.3731 1.5 13.8333C1.5 14.2936 1.8731 14.6667 2.33333 14.6667Z"
            stroke="#98A2B3"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <div class="mt-6 grid grid-cols-12 sm:gap-0">
      <div class="col-span-7 mt-auto sm:col-span-6">
        <span class="text-3xl font-semibold text-dark-900 sm:text-4xl">
          {{ Number(summaryItem.value).toLocaleString() }}
        </span>
        <div class="mt-4 flex align-middle">
          <span class="mr-2 flex flex-col justify-center align-middle">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              class="mx-auto my-auto"
              :class="
                summaryItem.difference < 0
                  ? 'rotate-180 transform text-error-500'
                  : 'text-success-500'
              "
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00002 12.8333V1.16666M7.00002 1.16666L1.16669 6.99999M7.00002 1.16666L12.8334 6.99999"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <span
            class="my-auto mr-1 text-sm font-medium"
            :class="
              summaryItem.difference < 0 ? 'text-error-700' : 'text-success-700'
            "
          >
            {{
              summaryItem.difference > 0
                ? summaryItem.difference
                : String(summaryItem.difference).split('-')[1]
            }}%
          </span>
          <span class="text-sm font-medium text-dark-500 line-clamp-1"
            >vs last month</span
          >
        </div>
      </div>

      <div class="col-span-5 ml-auto sm:col-span-6">
        <ApexChart
          type="area"
          height="75"
          :options="chartOptions"
          :series="series"
        ></ApexChart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ISummary } from '~/utils/types'

export default Vue.extend({
  props: {
    summaryItem: {
      type: Object as PropType<ISummary>,
      required: true,
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: `/${this.summaryItem}`,
          sparkline: {
            enabled: true,
          },
        },
        xaxis: {
          categories: this.summaryItem.data.map(({ date }) =>
            new Date(date).toUTCString()
          ),
        },
        colors: this.summaryItem.difference > 0 ? ['#12B76A'] : ['#F04438'],
        stroke: {
          curve: 'smooth',
        },
        fill: {
          opacity: 0.3,
        },
      },
      series: [
        {
          name: this.summaryItem.title,
          data: this.summaryItem.data.map(({ count }) => count),
        },
      ],
    }
  },
})
</script>

<style scoped>
.summary-card {
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
}
</style>
