<template>
    <div  
        class="expertise group flex flex-col-reverse md:even:flex-row md:odd:flex-row-reverse justify-center items-center w-full  py-20"
        :class="props.class">
        <div class="illustration hidden lg:flex lg:p-2 lg:basis-1/2"><slot/></div>
        <div class="lg:basis-1/2 md:w-full sm:w-full pr-2 pl-2 spe-col">
            <div typeof="skos:Concept owl:Thing" :resource="props.id" property="schema:knowsAbout"
                    class="relative flex min-w-0 break-words expertise-small-card h-full lg:px-14 xl:px-20">
                <div class="flex-auto p-3 sm:p-6 xl:px-14">
                    <div property="skos:prefLabel" class="mb-1 sm:mb-2 p-1 sm:p-3 card-title" >
                        {{ props.title }}
                    </div>
                    <div>
                        <div property="skos:editorialNote" class="mb-0  text-octobre-dark-grey px-2 py-6">
                            {{ props.intro }}
                        </div>
                        <div property="skos:definition" class="mb-0 text-octobre-grey px-2 py-6">
                            {{ props.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    class: String,
    id: string,
    title: string,
    intro: string,
    description: string
    }>()
</script>
<style scoped>

.expertise {
    @apply my-2;
}

.expertise .spe-col .expertise-small-card .card-title {
    font-size: 30px;
    letter-spacing: 0;
    width: 100%;
    text-transform: uppercase;
}

@flex items-start (min-width: 992px)
.expertise .spe-col .expertise-small-card .card-title {
    text-align: left!important;
    width: 80%;
}

.illustration > svg {
    width: 100%;
    height: 100%;
}
</style>