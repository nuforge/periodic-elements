<template>
  <v-app>
    <v-main>
      <v-fab icon="mdi-atom-variant" location="top end" size="small" absolute app appear
        @click="drawer = !drawer"></v-fab>
      <v-app-bar app>
        <v-toolbar-title><router-link to="/">Periodic Table</router-link></v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <NavigationLayout v-model="drawer" location="end" :element="elements.element" app />
      <v-container>
        <RouterView />
      </v-container>
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
