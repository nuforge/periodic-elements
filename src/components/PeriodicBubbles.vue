<template>
  <v-btn-toggle class="flex-wrap h-auto ga-1 " v-model="elements.selected" multiple>
    <v-btn class="rounded-lg" variant="plain" icon v-for="element in elements.elements" :key="element.symbol"
      :value="element.symbol" :color="element['cpk-hex'] ? `#${element['cpk-hex']}` : 'surface'"
      :text="`${element.symbol}`" />
  </v-btn-toggle>
</template>

<script setup lang="ts">
import { useElementStore } from '@/stores/elements';

const elements = useElementStore()


</script>
