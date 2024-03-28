<template>
  <div class="relative flex w-full justify-center top-20">
      <slot />
    </div>
    <TopNav></TopNav>
    <Footer></Footer>
</template>

<script lang="ts" setup>
import './css/index.css'
import TopNav from "#root/components/TopNav.vue"
import Footer from '#root/components/Footer.vue';
</script>