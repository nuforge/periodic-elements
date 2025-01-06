<template>
  <PeriodicFlex :elements="elements.elements" />
</template>

<script setup lang="ts">
import PeriodicFlex from '@/components/PeriodicFlex.vue';
import { useElementStore } from '@/stores/elements';
const elements = useElementStore()
</script>
