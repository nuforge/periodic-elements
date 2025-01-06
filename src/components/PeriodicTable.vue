<template>
  <v-item-group v-model="elements.selected" multiple>
    <v-container>
      <v-row dense>
        <v-col cols="auto" v-for="element in elements.elements" :key="element.symbol">
          <v-item v-slot="{ isSelected }">
            <ElementBox :number="element.number" :isSelected="isSelected || false" />
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script setup lang="ts">
import { useElementStore } from '@/stores/elements';
import ElementBox from './ElementBox.vue';
const elements = useElementStore()


// Filter: Get all metalloids in period 2

</script>
