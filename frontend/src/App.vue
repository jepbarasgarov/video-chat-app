<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/AppComponents/TheHeader.vue";
</script>

<template>
  <div class="w-screen h-screen px-20 relative">
    <div class="absolute top-0 left-0">
      <TheHeader />
    </div>
    <div class="w-full h-full flex justify-center items-center">
      <RouterView />
    </div>
  </div>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
