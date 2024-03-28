<template>
  <div class="relative flex w-full justify-center top-20">
      <slot />
    </div>
    <TopNav></TopNav>
    <Footer></Footer>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import './css/index.css'
import TopNav from "#root/components/TopNav.vue"
import Footer from '#root/components/Footer.vue';
onMounted(() => {
  //get the div widget
  let widget = document.getElementById("calendlyInlineWidget")
  //get calendly script
  let script = document.getElementById("widgetScript")
  if(widget && script && !widget.children.length){
    script.remove()
    var newScript = document.createElement("script");
    newScript.id = "widgetScript";
    newScript.type = "text/javascript";
    newScript.src = "https://assets.calendly.com/assets/external/widget.js";
    newScript.async = true;
    document.head.appendChild(newScript);
  } 
});
</script>