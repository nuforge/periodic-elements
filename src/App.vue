<template>
  <v-app>
    <NavigationLayout v-model="drawer" location="end" :element="elements.element" />
    <v-main>
      <RouterView />
    </v-main>
    <v-footer class="opacity-20">
      <a href="https://github.com/Bowserinator/Periodic-Table-JSON" target="_blank">Periodic Table JSON</a>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useElementStore } from '@/stores/elements';
import NavigationLayout from '@/components/NavigationLayout.vue';
const elements = useElementStore()
const drawer = ref(true)


</script>
