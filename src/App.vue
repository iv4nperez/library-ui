<script setup lang="ts">
import FccButton from "./components/FccButton.vue";
// import { FccButton } from 'test-component-lib'
// import "test-component-lib/style.css";
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <FccButton text="Run the Tests" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
