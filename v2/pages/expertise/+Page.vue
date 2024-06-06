<template>
<div class="container min-w-full mx-auto flex bg-white justify-center justify-items-center ">
    <div class="flex flex-col flex-wrap justify-center items-center justify-items-center max-w-full">
        
        
        
        <div about="/" typeof="schema:Organization" class="flex flex-col justify-center m-0 max-w-full">
            <h1 class="text-center text-4xl py-16">Nos domaines d'expertise chez 
                <span class="octobre-text-gradient">Octobre Conseil</span></h1>
            <div class="flex flex-row items-start w-full bg-octobre-expertise-intro-bg">
                <div class="md:w-1/2 px-16 w-full md:pl-24 md:pr-16">
                    <div class="py-8"><IconInteractive></IconInteractive></div>
                    <div property="schema:description">
                        <div class="text-2xl octobre-text-gradient">Pionniers de la Transformation</div>
                        <div class="text-2xl octobre-text-gradient">Digitale Soutenue par l'État</div>
                        <div class="mb-0 text-sm text-octobre-dark-grey py-10 octobre-text">
                            Au cœur de l'innovation numérique, Octobre Conseil se distingue comme le maître d'œuvre de votre
                            transition digitale, exploitant de manière stratégique les leviers financiers gouvernementaux.
                            Notre réputation d'excellence découle de notre engagement absolu envers l'élaboration de solutions
                            digitales portées par une équipe d'experts à la pointe de la technologie.
                        </div>
                    </div>
                </div>
                <div class="md:flex md:flex-1 md:w-1/2 hidden h-full bg-cover bg-center max-h-full expertise-intro-image">
                   
                </div>
            </div>
            <div class="flex flex-col justify-center m-0">
                <ExpertiseSection v-for="expertise in expertises" :id="expertise.id" :title="expertise.title" :intro="expertise.intro" :description="expertise.description" :class="expertise.class"><component :is="expertise.illustration"></component></ExpertiseSection>
                 
            </div>
            <div property="schema:description" class="mb-0 text-justify text-octobre-grey px-4 py-6">

                En choisissant Octobre Conseil, vous ne faites pas qu'adopter la transformation digitale;
                vous écrivez une nouvelle ère pour votre entreprise. Nous sommes les alchimistes qui fusionnent technologie,
                avantages gouvernementaux et ressources humaines exceptionnelles. Ensemble, nous sculptons le futur numérique
                de votre entreprise, où l'excellence devient la norme.
            </div>

        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import Architecture from '#root/components/illustrations/Architecture.vue'
import Recrutement from '#root/components/illustrations/Recrutement.vue'
import RealisationProjet from '#root/components/illustrations/RealisationProjets.vue';
import SuiviProd  from '#root/components/illustrations/SuiviProd.vue';
import IconInteractive from '#root/components/icons/IconInteractive.vue';
// import ProjetBgSmall from '#root/components/illustrations/ProjetsBgSmall.vue'
import ExpertiseSection from "#root/components/ExpertiseSection.vue"

const expertises = [
    {
        class: "",
        illustration: Architecture,
        id: "/expertise/#architecture-it",
        title: "Architecture de Solution Digitale",
        intro: `Notre approche commence par un cadrage méticuleux,
                où chaque détail est soigneusement considéré.`,
        description: `De l'expression sur mesure de vos besoins à l'intégration logicielle innovante,
                                        en passant par la rédaction de roadmaps stratégiques,
                                        nous sculptons des architectures digitales en phase avec vos besoins réels.`
    },
    {
        class: "expert-projet bg-octobre-expertise-projet-bg",
        id: "/expertise/#project-management",
        illustration: RealisationProjet,
        title: "Réalisation de Projets",
        intro: `Nous ne nous contentons pas de gérer des projets ; 
                nous les orchestrons avec une précision exceptionnelle.`,
        description: `Nos experts en gestion de projet, tech lead, et en conception et développement sont les artisans de vos aspirations digitales.
                    Le suivi opérationnel minutieux assure une exécution sans faille.`
    },
    {
        class: "expert-prod",
        id: "/expertise/#suivi-production",
        illustration: SuiviProd,
        title: "Suivi de Production",
        intro: "Le suivi opérationnel chez Octobre Conseil est une fusion d'art et de science.",
        description: `Nos services FinOps sculptent les coûts avec une précision chirurgicale,
                    tandis que notre gestion des incidents, avec alerting et détection des menaces,
                    crée une forteresse numérique impénétrable.
                    La prévention des risques IT est inscrite dans notre ADN,
                    garantissant une tranquillité d'esprit à long terme.`
    },
    {
    class: "expert-rh bg-octobre-expertise-rh-bg",
    id: "/expertise/#resources-humaines",
    illustration: Recrutement,
    title: "Recrutement / Stratégie RH",
    intro: `Nous comprenons que la technologie n'est rien sans les talents qui la propulsent.`,
    description: `Octobre Conseil offre bien plus qu'un simple accompagnement ;
                nous sommes les architectes de votre capital humain.
                De la délégation de personnel à la formation et au mentoring,
                notre approche RH aide a concevoir la manière dont votre entreprises va embrasser le changement.`
    }
]

</script>


<style scoped>


/* Common styles */


.case_button_up {
    @apply py-2 px-4 my-4 mb-6 rounded-[30px];
}
.case_button_down {
    @apply py-2 px-4 my-4 mt-6 rounded-[30px];
}


.icon-expertise > svg {
    zoom: 200%;
}
.octobre-text-gradient {
  background: -webkit-linear-gradient(0deg, rgba(189,65,19,1) 0%, rgba(169,112,1,1) 25%, rgba(236,162,0,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.expertise-intro-image {
    background-image: url(/images/expertises/domaines_dexpertise_orig.png);
}
</style>