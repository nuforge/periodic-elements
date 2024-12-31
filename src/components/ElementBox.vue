<template>
  <v-card :color="element['cpk-hex'] ? `#${element['cpk-hex']}` : 'surface'" :variant="isSelected ? 'tonal' : 'text'"
    density="compact" :value="element.symbol" :to="`/element/${element.number}`">
    <v-card-text :class="['text-center']">
      <div>{{ element.number }} </div>
      <div class="text-h5">{{ element.symbol }}</div>
      <div class="text-body">{{ element.atomic_mass.toPrecision(4) }} </div>
    </v-card-text>
    <v-tooltip activator="parent">{{ element.number }}. {{ element.name }}</v-tooltip>
  </v-card>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useElementStore } from '@/stores/elements';

const elements = useElementStore()

const props = defineProps({
  number: {
    type: Number,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})

const element = computed(() => elements.periodicTable.byAtomicNumber[props.number])



</script>
