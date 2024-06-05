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

                <div typeof="skos:Concept owl:Thing" resource="/expertise/#architecture-it" property="schema:knowsAbout" 
                    class="expertise group flex flex-col-reverse md:even:flex-row md:odd:flex-row-reverse justify-center items-center w-full py-20">
                   <div class="hidden lg:flex"><Architecture></Architecture></div> 
                    <div class="lg:w-1/2 md:w-full sm:w-full pr-4 pl-4 spe-col">
                        <div class="relative flex min-w-full min-h-fit break-words expertise-small-card h-full lg:px-14 xl:px-20">
                            <div class="flex-auto p-3 sm:p-6 xl:px-14 z-10">
                                <div class="mb-1 sm:mb-2 p-1 sm:p-3 card-title" >
                                    <span property="skos:prefLabel">Architecture de Solution Digitale</span>
                                </div>
                                <div>
                                    <div property="skos:editorialNote" class="mb-0  text-octobre-dark-grey px-4 py-6">
                                        Notre approche commence par un cadrage méticuleux,
                                        où chaque détail est soigneusement considéré.
                                    </div>
                                    <div property="skos:definition" class="mb-0 text-octobre-grey px-4 py-6">
                                        
                                        De l'expression sur mesure de vos besoins à l'intégration logicielle innovante,
                                        en passant par la rédaction de roadmaps stratégiques,
                                        nous sculptons des architectures digitales en phase avec vos besoins réels.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div typeof="skos:Concept owl:Thing" resource="/expertise/#project-management" property="schema:knowsAbout"
                    class="expertise group flex flex-col-reverse md:even:flex-row md:odd:flex-row-reverse justify-center items-center w-full  py-20 expert-projet bg-octobre-expertise-projet-bg">
                    <div class="hidden lg:flex"><RealisationProjet></RealisationProjet></div>
                    <div class="lg:w-1/2 md:w-full sm:w-full pr-4 pl-4 spe-col">
                        <div class="relative flex min-w-0 break-words expertise-small-card h-full lg:px-14 xl:px-20">
                            <div class="flex-auto p-3 sm:p-6 xl:px-14">
                                <div class="mb-1 sm:mb-2 p-1 sm:p-3 card-title" >
                                    <span property="skos:prefLabel">
                                        Réalisation de Projets
                                    </span>
                                </div>
                                <div>
                                    <div property="skos:editorialNote" class="mb-0  text-octobre-dark-grey px-4 py-6">
                                        Nous ne nous contentons pas de gérer des projets ; 
                                        nous les orchestrons avec une précision exceptionnelle.
                                    </div>
                                    <div property="skos:definition" class="mb-0 text-octobre-grey px-4 py-6">
                                        
                                        Nos experts en gestion de projet, tech lead, et en conception et développement sont les artisans de vos aspirations digitales.
                                        Le suivi opérationnel minutieux assure une exécution sans faille.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div typeof="skos:Concept owl:Thing" resource="/expertise/#suivi-production" property="schema:knowsAbout" 
                    class="expertise group flex flex-col-reverse md:even:flex-row md:odd:flex-row-reverse justify-center items-center w-full  py-20 expert-prod">
                    <div class="hidden lg:flex"><SuiviProd></SuiviProd></div>
                    <div class="lg:w-1/2 md:w-full sm:w-full pr-4 pl-4 spe-col">
                        <div class="relative flex min-w-0 break-words expertise-small-card h-full lg:px-14 xl:px-20">
                            <div class="flex-auto p-3 sm:p-6 xl:px-14">
                                <div class="mb-1 sm:mb-2 p-1 sm:p-3 card-title" >
                                    <span property="skos:prefLabel">
                                        Suivi de Production
                                    </span>
                                </div>
                                <div>
                                    <div property="skos:editorialNote" class="mb-0  text-octobre-dark-grey px-4 py-6">
                                        Le suivi opérationnel chez Octobre Conseil est une fusion d'art et de science.
                                    </div>
                                    <div property="skos:definition" class="mb-0 text-octobre-grey px-4 py-6">
                                        Nos services FinOps sculptent les coûts avec une précision chirurgicale,
                                        tandis que notre gestion des incidents, avec alerting et détection des menaces,
                                        crée une forteresse numérique impénétrable.
                                        La prévention des risques IT est inscrite dans notre ADN,
                                        garantissant une tranquillité d'esprit à long terme.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div typeof="skos:Concept owl:Thing" resource="/expertise/#resources-humaines" property="schema:knowsAbout" 
                    class="expertise group flex flex-col-reverse md:even:flex-row md:odd:flex-row-reverse justify-center items-center w-full  py-20 expert-rh bg-octobre-expertise-rh-bg">
                    <div class="hidden lg:flex"><Recrutement></Recrutement></div>
                    <div class="lg:w-1/2 md:w-full sm:w-full pr-4 pl-4 spe-col ">
                        <div class="relative flex min-w-0 break-words expertise-small-card h-full lg:px-14 xl:px-20">
                            <div class="flex-auto p-3 sm:p-6 xl:px-14">
                                <div class="mb-1 sm:mb-2 p-1 sm:p-3 card-title" >
                                    <span property="skos:prefLabel">
                                        Recrutement / Stratégie RH
                                    </span>
                                </div>
                                <div>
                                    <div property="skos:editorialNote" class="mb-0  text-octobre-dark-grey px-4 py-6">
                                        Nous comprenons que la technologie n'est rien sans les talents qui la propulsent.
                                    </div>
                                    <div property="skos:definition" class="mb-0 text-octobre-grey px-4 py-6">
                                        Octobre Conseil offre bien plus qu'un simple accompagnement ;
                                        nous sommes les architectes de votre capital humain.
                                        De la délégation de personnel à la formation et au mentoring,
                                        notre approche RH aide a concevoir la manière dont votre entreprises va embrasser le changement.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="p-5 mb-2 lg:px-6 text-justify bg-octobre-white rounded-[30px] text-lg">
                <div class="mb-0 text-justify text-octobre-grey px-4 py-6">

                    En choisissant Octobre Conseil, vous ne faites pas qu'adopter la transformation digitale;
                    vous écrivez une nouvelle ère pour votre entreprise. Nous sommes les alchimistes qui fusionnent technologie,
                    avantages gouvernementaux et ressources humaines exceptionnelles. Ensemble, nous sculptons le futur numérique
                    de votre entreprise, où l'excellence devient la norme.
                </div>
            </p>

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
</script>

<style scoped>


/* Common styles */


.case_button_up {
    @apply py-2 px-4 my-4 mb-6 rounded-[30px];
}

.expertise {
    @apply my-2;
}

.case_button_down {
    @apply py-2 px-4 my-4 mt-6 rounded-[30px];
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