<template>
  <v-container>
    <v-row dense>
      <v-col cols="auto" v-for="(element, index) in elements.elements" :key="index">
        <v-card :color="element['cpk-hex'] ? `#${element['cpk-hex']}` : 'surface'" variant="tonal"
          @click="selectElement(element)" density="compact">
          <v-card-text class="text-center">
            <div>{{ element.number }} </div>
            <div class="text-h5">{{ element.symbol }} </div>
            <div class="text-body">{{ element.atomic_mass.toPrecision(4) }} </div>
          </v-card-text>
          <v-tooltip activator="parent">{{ element.number }}. {{ element.name }}</v-tooltip>
        </v-card>

      </v-col>
    </v-row>
    <NavigationLayout v-model="drawer" location="end" :element="element" />

  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavigationLayout from '@/components/NavigationLayout.vue';
const drawer = ref(true)
import elementsData from '@/assets/table/PeriodicTableJSON.json'

const elements = ref(elementsData)
const element = ref({})

const selectElement = (newElement: object) => {
  element.value = newElement
}


</script>
