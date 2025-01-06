<template>
  <div class="element">
    <h1 v-if="element"><router-link :to="`/element/${element.number}`">{{ element.name }}</router-link></h1>
    <v-list>
      <v-list-item v-for="(item, index) in element" :key="index" :title="index">
        <v-list-item-title v-if="typeof item != 'object'">
          <v-chip :text="(typeof item != 'object') ? item.toString() : ''" prepend-icon="mdi-information-symbol"
            class="ma-1 rounded" density="compact" variant="plain">
          </v-chip>
        </v-list-item-title>
      </v-list-item>
    </v-list>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute();
const alias = computed(() => route.params.alias);

import { useElementStore } from '@/stores/elements';

const elements = useElementStore()
const element = elements.periodicTable.byAtomicNumber[Number(alias.value)];

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
