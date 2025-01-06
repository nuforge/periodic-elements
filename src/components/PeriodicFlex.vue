<script setup lang="ts">
interface ElementData {
  xpos: number;
  ypos: number;
  number: number;
  atomic_mass: number;
  [key: string]: unknown;
}

function getPositionStyle(element: Partial<ElementData>) {
  return {
    gridColumn: element.xpos,
    gridRow: element.ypos,
  };
}

import type { PropType } from 'vue';

defineProps({
  elements: {
    type: Array as PropType<ElementData[]>,
    required: true,
  },
});
</script>

<template>
  <v-container class="periodic-table">
    <v-btn :variant="true ? 'tonal' : 'text'" :color="element['cpk-hex'] ? `#${element['cpk-hex']}` : 'surface'"
      :text="`${element.symbol}`" v-for="element in elements" :key="element.number" class="element-cell"
      :style="getPositionStyle(element)" size="x-small" stacked>
      <template #prepend>
        <span>{{ element.number }}</span>
      </template>
      <template #default>
        <b class="text-white">{{ element.symbol }}</b>
      </template>
      <template #append>{{ element.atomic_mass.toPrecision(4) }}
      </template>
    </v-btn>
  </v-container>
</template>

<style scoped>
.periodic-table {
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  /* Adjust as per periodic table layout */
  /* Adjust height as needed */
  gap: 1px;
  /* Space between elements */
}

.element-cell {
  text-align: center;
}
</style>
