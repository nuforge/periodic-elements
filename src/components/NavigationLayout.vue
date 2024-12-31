<template>
  <v-navigation-drawer permanent v-if="elements.element">
    <v-container>
      <ElementBox :number="elements.element.number" :isSelected="false" />
      <v-row>
        <v-col>
          <router-link :to="`/element/${elements.element.number}`">{{ elements.element.name
            }}</router-link>
          <v-list>
            <v-list-item v-for="(item, index) in elements.element" :key="index" :title="index"
              :subtitle="typeof item != 'object' ? item : ''">
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useElementStore } from '@/stores/elements';
import ElementBox from './ElementBox.vue';

const elements = useElementStore()


</script>
