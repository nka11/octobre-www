<template>
    <section class="flex flex-col w-full bg-octobre-cream domaine-expertise justify-items-center" 
        typeof="schema:Organization"
        resource=".">
        <div class="container flex flex-wrap max-w-screen-xl mx-auto justify-items-center justify-center">
            <div class="flex flex-wrap w-full justify-items-center justify-center">
                <div class="flex flex-col w-full px-4 justify-items-center justify-center">
                    <h2 class="w-full justify-items-center text-lg text-center text-octobre-mid-grey justify-center mt-[6rem]">
                        <a id="expertises" href="#expertises">DOMAINES D’EXPERTISE</a></h2>
                </div>
            </div>
            <div class="flex flex-wrap justify-items-center justify-center">
                <div class="flex flex-grow max-w-full px-4 justify-items-center justify-center mt-16 mb-16 text-3xl" property="schema:description">
                    <p class="octobre_deepdark_desc">À la croisée des chemins entre l'IT et les Métiers</p>
                </div>
            </div>
            <div class="container px-4 mt-4 expertise-presentation pb-10">
                <div class="flex flex-wrap justify-center justify-items-center">
                    <ExpertiseCard v-for="expertise in expertises" :title="expertise.title"><component :is="expertise.icon"></component></ExpertiseCard>
                    
                </div>
            </div>
            <div class="flex flex-wrap button_row text-center ">
                <div class="relative flex-grow max-w-full flex-1 px-4 py-8">
                    <button class="bg-octobre-dark-grey text-white align-middle text-center py-4 px-8"><a href="/expertise">Découvrez toutes nos expertises</a></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconArchi from '#root/components/icons/IconArchi.vue';
import IconProd from '#root/components/icons/IconProd.vue';
import IconProjet from '#root/components/icons/IconProjet.vue';
import IconRH from '#root/components/icons/IconRH.vue';
import ExpertiseCard from '#root/components/ExpertiseCard.vue';
const expertises = [{
        icon: IconArchi,
        title: "Architecture de solution Digitale"
    },{
        icon: IconProd,
        title: "Suivi de production"
    },{
        icon: IconProjet,
        title: "Gestion de projets"
    },{
        icon: IconRH,
        title: "Recrutement & Strategie RH"
    }
]

</script>