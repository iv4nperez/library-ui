<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <button class="cu-bg-red-500 cu-p-3 classH">{{ text }}</button>
</template>

<style scoped>
.classH {
  color: white;
}
</style>
