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
        <div slot="company.name" slot-scope="props">
          <InfoCell :row-data="props.rowData" />
        </div>

        <div slot="status" slot-scope="props">
          <StatusCell :row-data="props.rowData" />
        </div>

        <div slot="about" slot-scope="props">
          <AboutCell :row-data="props.rowData" />
        </div>

        <div slot="users" slot-scope="props">
          <UsersCell :row-data="props.rowData" />
        </div>

        <div slot="licenseUse" slot-scope="props">
          <LicenseUseCell :row-data="props.rowData" />
        </div>

        <div slot="actions">
          <ActionsCell />
        </div>
      </vuetable>
    </div>
  </client-only>
</template>

<script>
import Vue from 'vue'
import Vuetable from 'vuetable-2'
import fields from './fields'
import css from './styles'

export default Vue.extend({
  name: 'CompaniesTable',
  components: {
    Vuetable,
  },
  data() {
    return {
      fields,
      css,
      companies: [],
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
