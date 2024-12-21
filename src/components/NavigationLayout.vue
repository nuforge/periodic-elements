<template>
  <v-navigation-drawer permanent>
    <v-container>
      <v-row>
        <v-col>
          <v-list>
            <v-list-item v-for="(item, index) in element" :key="index" :title="index"
              :subtitle="typeof item != 'object' ? item : ''">
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">

defineProps({
  element: Object,
})


</script>
