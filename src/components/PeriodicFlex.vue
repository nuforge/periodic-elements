<script setup lang="ts">
import ElementBox from './ElementBox.vue';
interface ElementData {
  xpos: number;
  ypos: number;
  number: number;
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
  <v-container class="periodic-table" max-width="1200">
    <v-btn :variant="true ? 'tonal' : 'text'" :color="element['cpk-hex'] ? `#${element['cpk-hex']}` : 'surface'"
      :text="`${element.symbol}`" v-for="element in elements" :key="element.number" class="element-cell"
      :style="getPositionStyle(element)" />
  </v-container>
</template>

<style scoped>
.periodic-table {
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  /* Adjust as per periodic table layout */
  /* Adjust height as needed */
  gap: 4px;
  /* Space between elements */
}

.element-cell {
  text-align: center;
}
</style>
