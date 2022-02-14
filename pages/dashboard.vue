<template>
  <div class="mx-auto h-full max-w-laptop">
    <WelcomeArea />
    <div class="mt-8 grid-cols-12 gap-6 px-4 sm:px-8 lg:grid">
      <SummaryCard
        v-for="item in dashboardSummary"
        :key="item.title"
        :summary-item="item"
      />
    </div>
    <div class="mt-8"></div>
    <CompaniesTableWrapper />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { prefillDateRange } from '~/utils/helpers'
import { ISummary } from '~/utils/types'

export default Vue.extend({
  name: 'DashboardIndex',
  data() {
    const res = [
      {
        date: '2022-02-13T23:00:00.000Z',
        count: 41,
      },
      {
        date: '2022-02-12T23:00:00.000Z',
        count: 50,
      },
      {
        date: '2022-02-11T23:00:00.000Z',
        count: 40,
      },
      {
        date: '2022-02-10T23:00:00.000Z',
        count: 35,
      },
      {
        date: '2022-02-08T23:00:00.000Z',
        count: 55,
      },
      {
        date: '2022-02-06T23:00:00.000Z',
        count: 49,
      },
    ]

    const dashboardSummary: ISummary[] = [
      {
        title: 'Total Customers',
        value: 2420,
        difference: 40,
        data: prefillDateRange(res, 7),
      },
      {
        title: 'Members',
        value: 1210,
        difference: -10,
        data: prefillDateRange(res, 7).reverse(),
      },
      {
        title: 'Active Now',
        value: 316,
        difference: 20,
        data: prefillDateRange(res, 7),
      },
    ]

    return {
      dashboardSummary,
    }
  },
})
</script>

<style scoped></style>
