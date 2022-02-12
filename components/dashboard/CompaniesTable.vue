<template>
  <client-only>
    <div class="auto overflow-x-auto">
      <vuetable
        ref="vuetable"
        :api-mode="false"
        :data="companies"
        :fields="fields"
        :css="css.table"
        class="min-w-laptop"
        track-by="company"
      >
        <div
          slot="company.name"
          slot-scope="props"
          class="flex min-w-180px align-middle"
        >
          <img :src="props.rowData.company.icon" class="mr-3" />
          <div class="my-auto">
            <div class="text-sm font-medium capitalize text-dark-900">
              {{ props.rowData.company.name }}
            </div>
            <div class="text-sm font-normal text-dark-500">
              {{ props.rowData.company.url }}
            </div>
          </div>
        </div>

        <div
          slot="status"
          slot-scope="props"
          class="relative flex align-middle"
        >
          <div
            class="my-auto rounded-full py-0.5 px-2 text-xs font-medium capitalize"
            :class="
              props.rowData.status === 'customer'
                ? 'bg-success-50 text-success-700'
                : 'bg-dark-100 text-dark-700'
            "
          >
            {{ props.rowData.status }}
          </div>
        </div>

        <div
          slot="about"
          slot-scope="props"
          class="flex flex-col justify-center align-middle"
        >
          <div class="my-auto">
            <div class="text-sm capitalize text-dark-900 line-clamp-1">
              {{ props.rowData.about.snippet }}
            </div>
            <div class="text-sm text-dark-500 line-clamp-1">
              {{ props.rowData.about.description }}
            </div>
          </div>
        </div>

        <div
          slot="users"
          slot-scope="props"
          class="flex flex-col justify-center align-middle"
        >
          <div
            class="relative my-auto flex w-full flex-col justify-center align-middle"
          >
            <img
              v-for="(user, index) in props.rowData.users.slice(0, 5)"
              :key="user"
              :src="user"
              :style="`left: ${index * 20}px`"
              class="absolute my-auto h-6 w-6 rounded-full border-1.5"
            />
            <span
              v-if="props.rowData.users.length - 5 > 0"
              style="left: 100px"
              class="absolute my-auto flex h-6 w-6 flex-col justify-center rounded-full border-1.5 bg-primary-50 align-middle text-xs font-medium text-primary-600"
            >
              <span class="text-center">
                +{{ props.rowData.users.length - 5 }}
              </span>
            </span>
          </div>
        </div>

        <div
          slot="licenseUse"
          slot-scope="props"
          class="relative flex align-middle"
        >
          <div
            class="relative my-auto h-2 w-full rounded-full bg-primary-50"
            style="width: 88px"
          >
            <div
              class="absolute inset-0 h-full rounded-full bg-primary-600"
              :style="`width: ${Number(props.rowData.licenseUse)}%`"
            ></div>
          </div>
        </div>

        <div slot="actions" class="flex justify-center align-middle">
          <button class="icon">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              class="my-auto text-dark-500"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 5.00001H3.16667M3.16667 5.00001H16.5M3.16667 5.00001V16.6667C3.16667 17.1087 3.34226 17.5326 3.65482 17.8452C3.96738 18.1577 4.39131 18.3333 4.83333 18.3333H13.1667C13.6087 18.3333 14.0326 18.1577 14.3452 17.8452C14.6577 17.5326 14.8333 17.1087 14.8333 16.6667V5.00001H3.16667ZM5.66667 5.00001V3.33334C5.66667 2.89131 5.84226 2.46739 6.15482 2.15483C6.46738 1.84227 6.89131 1.66667 7.33333 1.66667H10.6667C11.1087 1.66667 11.5326 1.84227 11.8452 2.15483C12.1577 2.46739 12.3333 2.89131 12.3333 3.33334V5.00001M7.33333 9.16667V14.1667M10.6667 9.16667V14.1667"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button class="icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              class="my-auto text-dark-500"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1667 2.5C14.3855 2.28113 14.6454 2.10752 14.9313 1.98906C15.2173 1.87061 15.5238 1.80965 15.8333 1.80965C16.1429 1.80965 16.4493 1.87061 16.7353 1.98906C17.0213 2.10752 17.2811 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.0109 3.26468C18.1294 3.55064 18.1903 3.85714 18.1903 4.16667C18.1903 4.4762 18.1294 4.7827 18.0109 5.06866C17.8925 5.35463 17.7189 5.61447 17.5 5.83334L6.24999 17.0833L1.66666 18.3333L2.91666 13.75L14.1667 2.5Z"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </vuetable>
    </div>
  </client-only>
</template>

<script>
import Vue from 'vue'
import Vuetable from 'vuetable-2'
import CheckBox from '../inputs/CheckBox.vue'
import tableStyles from '~/utils/tables/table.styles'

export default Vue.extend({
  components: {
    Vuetable,
  },
  data() {
    return {
      fields: [
        {
          name: CheckBox,
          titleClass: 'bg-white',
          dataClass: 'table-checkbox',
        },
        {
          name: 'company.name',
          title: 'Company',
          titleClass: 'table-header pl-0',
          dataClass: 'table-data-cell pl-0',
        },
        {
          name: 'licenseUse',
          title: 'License Use',
          titleClass: 'table-header',
          dataClass: 'table-data-cell',
          width: '136px',
        },
        {
          name: 'status',
          titleClass: 'table-header',
          dataClass: 'table-data-cell',
          width: '121px',
        },
        {
          name: 'users',
          title: 'Users',
          titleClass: 'table-header',
          dataClass: 'table-data-cell',
          width: '172px',
        },
        {
          name: 'about',
          title: 'About',
          titleClass: 'table-header',
          dataClass: 'table-data-cell',
          width: '301px',
        },
        {
          name: 'actions',
          title: '',
          titleClass: 'table-header',
        },
      ],
      companies: [],
      css: tableStyles,
    }
  },
  mounted() {
    this.loadItems()
  },
  methods: {
    loadItems() {
      setTimeout(() => {
        this.companies = this.$store.state.companies
      }, 0)
    },
  },
})
</script>

<style>
tr:nth-child(even) {
  background: #fff;
}
tr:nth-child(odd) {
  background: #f9fafb;
}
</style>
