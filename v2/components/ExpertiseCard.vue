<template>
    <div class="w-full lg:w-1/4 md:w-1/2 px-2 mb-4 justify-center justify-items-center content-center ">
        <div class="md:flex md:flex-wrap grid grid-cols-4 justify-items-start md:flex-row px-6 md:pl-0 md:pt-12 md:grow md:w-full break-words rounded-[30px] bg-white border border-gray-300 h-full md:justify-center md:justify-items-center md:content-center">
            <div class="col-span-1 py-6 grid content-center md:flex md:flex-wrap text-wrap md:w-full md:justify-center md:justify-items-center md:content-center">
                    <slot/>
            </div>
            <div class="col-span-3 grid content-center pl-2 md:flex-auto md:p-10 md:justify-center md:justify-items-center md:content-center">
                <p class="md:mb-5 md:text-center" property="schema:description">{{ props.title }}</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    title: string
}>()
</script>