<template>
  <th v-if="isHeader">
    <label
      class="mx-auto my-auto inline-flex cursor-pointer justify-center align-middle"
      for="header"
    >
      <input
        id="header"
        name="header"
        type="checkbox"
        class="hidden"
        :checked="isAllItemsInCurrentPageSelected()"
        @change="toggleAllCheckbox($event)"
      />
      <div
        class="checkbox mx-auto my-auto flex h-5 w-5 justify-center rounded-md border border-primary-600 bg-primary-50 align-middle"
      ></div>
    </label>
  </th>
  <td v-else class="my-auto flex h-full flex-col justify-center align-middle">
    <label
      class="mx-auto my-auto flex h-72px cursor-pointer flex-col justify-center align-middle"
      :for="rowData.id"
    >
      <input
        :id="rowData.id"
        :name="rowData.id"
        type="checkbox"
        class="hidden"
        :checked="isSelected(rowData)"
        @change="doToggle(rowData, $event)"
      />

      <div
        class="checkbox mx-auto my-auto flex h-5 w-5 justify-center rounded-md border border-primary-600 bg-primary-50 align-middle"
      ></div>
    </label>
  </td>
</template>

<script>
import VuetableFieldCheckboxMixin from 'vuetable-2/src/components/VuetableFieldCheckboxMixin.vue'

export default {
  mixins: [VuetableFieldCheckboxMixin],
  methods: {
    doToggle(dataItem, event) {
      this.vuetable.fireEvent(
        'checkbox-toggled-custom',
        event.target.checked,
        dataItem
      )
      this.vuetable.onCheckboxToggled(
        event.target.checked,
        this.rowField.name,
        dataItem
      )
    },
  },
}
</script>

<style scoped>
.checkbox::before {
  content: '';
  background-image: url('/icons/check.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  margin: auto;
  transform: scale(0) rotateZ(180deg);
  transition: all 0.1s ease-in-out;
}

.checkbox {
  padding: 1.2px;
  margin: auto;
}

input[type='checkbox']:checked + .checkbox::before {
  transform: scale(1) rotateZ(0deg);
  margin: auto;
}

input[type='checkbox']:indeterminate + .checkbox::before {
  background-image: url('/icons/minus.svg');
  transform: scale(1) rotateZ(0deg);
  margin: auto;
}
</style>
