<template>
  <v-chip :color="element.categoryColor" class="ma-1">
    <v-avatar>
      <v-icon>{{ element.symbol }}</v-icon>
    </v-avatar>
    {{ element.name }}

  </v-chip>
</template>

<script setup lang="ts">

import { defineProps } from 'vue'

defineProps<{ element }>

</script>
