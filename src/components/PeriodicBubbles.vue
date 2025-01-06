<template>
  <v-item-group v-model="elements.selected" multiple>
    <span v-for="element in elements.elements" :key="element.symbol">
      <v-item v-slot="{ isSelected, toggle }" :value="element.symbol">
        <v-btn :variant="isSelected ? 'tonal' : 'text'"
          :color="element['cpk-hex'] ? `#${element['cpk-hex']}` : 'surface'" :text="`${element.symbol}`"
          @click="toggle" />
      </v-item>
    </span>
  </v-item-group>
</template>

<script setup lang="ts">
import { useElementStore } from '@/stores/elements';

const elements = useElementStore()


</script>
