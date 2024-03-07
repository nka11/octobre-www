<template>
  <div class="relative flex w-full justify-center top-20">
      <slot />
  </div>
  <TopNav></TopNav>
</template>

<script lang="ts" setup>
import './css/index.css'
import TopNav from "#root/components/TopNav.vue"
</script>