<template>
<div class="flex bg-white justify-center justify-items-center mx-1 sm:mx-2">
    <div class="flex flex-col flex-wrap justify-center items-center justify-items-center">
        
        
        
        <div class="flex flex-col justify-center m-0">
            <div class="p-5 mb-2 lg:px-6 text-justify bg-octobre-cream rounded-[30px] text-lg">
                <h1 class="text-center text-3xl font-bold mb-6">Bienvenue chez Octobre Conseil<br/>
                    <span class="text-sm">Pionniers de la Transformation Digitale Soutenue par l'État</span></h1>
                    <div class="mb-0 text-justify rounded-[30px] bg-white text-octobre-grey px-4 py-6">
                        Au cœur de l'innovation numérique, Octobre Conseil se distingue comme le maître d'œuvre de votre transition digitale, exploitant de manière stratégique les leviers financiers gouvernementaux. Notre réputation d'excellence découle de notre engagement absolu envers l'élaboration de solutions digitales portées par une équipe d'experts à la pointe de la technologie.
                    </div>
            </div>
            <div class="expertise group flex flex-col md:odd:flex-row md:even:flex-row-reverse rounded-[30px] justify-center items-center w-full expert-archi">
                <div class="hidden md:flex flex-wrap lg:w-1/2 md:w-full pr-4 pl-4 justify-center h-full content-center">
                    <div class="flex flex-wrap w-full justify-around">
                        <div class="expert-archi case_button_up">
                            Cadrage
                        </div>
                        <div class="expert-archi case_button_up">
                            Roadmap et plan strategique
                        </div>
                    </div>
                    <div class="icon-expertise">
                        <IconArchi></IconArchi>
                    </div>
                    <div class="flex flex-wrap w-full justify-around">
                        <div class="expert-archi case_button_down">
                            Intégration logicielle
                        </div>
                        <div class="expert-archi case_button_down">
                            Expression de besoins
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 md:w-full sm:w-full pr-4 pl-4 spe-col rounded-[30px] md:rounded-none md:group-odd:rounded-r-[30px] md:group-even:rounded-l-[30px]">
                    <div class="relative flex min-w-0 break-words expertise-small-card h-full">
                        <div class="flex-auto p-3 sm:p-6">
                            <div class="mb-1 sm:mb-2 p-1 sm:p-3 card-title" >
                                <span>Architecture de Solution Digitale</span>
                            </div>
                            <div>
                                <div class="mb-0 text-justify rounded-[30px] bg-white text-octobre-grey px-4 py-6">
                                    Notre approche commence par un cadrage méticuleux,
                                    où chaque détail est soigneusement considéré.
                                    De l'expression sur mesure de vos besoins à l'intégration logicielle innovante,
                                    en passant par la rédaction de roadmaps stratégiques,
                                    nous sculptons des architectures digitales en phase avec vos besoins réels.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="expertise group flex flex-col md:odd:flex-row md:even:flex-row-reverse rounded-[30px] justify-center items-center w-full expert-projet">
                <div class="hidden md:flex flex-wrap lg:w-1/2 md:w-full pr-4 pl-4 justify-center h-full content-center">
                    <div class="flex flex-wrap w-full justify-around">
                        <div class="case_button_up">
                            Tech Lead
                        </div>
                        <div class="case_button_up">
                            Gestion de Projet
                        </div>
                    </div>
                    <div class="icon-expertise">
                        <IconProjet></IconProjet>
                    </div>
                    <div class="flex flex-wrap w-full justify-around">
                        <div class="case_button_down">
                            Conception
                        </div>
                        <div class="case_button_down">
                            Developpement
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 md:w-full sm:w-full pr-4 pl-4 spe-col rounded-[30px] md:rounded-none md:group-odd:rounded-r-[30px] md:group-even:rounded-l-[30px]">
                    <div class="relative flex min-w-0 break-words expertise-small-card h-full">
                        <div class="flex-auto p-6">
                            <div class="mb-3 card-title" >
                                <span>
                                    Réalisation de Projets
                                </span>
                            </div>
                            <div>
                                <div class="mb-0 text-justify rounded-[30px] bg-white text-octobre-grey px-4 py-6">
                                    Nous ne nous contentons pas de gérer des projets ; 
                                    nous les orchestrons avec une précision exceptionnelle.
                                    Nos experts en gestion de projet, tech lead, et en conception et développement sont les artisans de vos aspirations digitales.
                                    Le suivi opérationnel minutieux assure une exécution sans faille.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="expertise group flex flex-col md:odd:flex-row md:even:flex-row-reverse rounded-[30px] justify-center items-center w-full expert-prod">
                <div class="hidden md:flex flex-wrap lg:w-1/2 md:w-full pr-4 pl-4 justify-center h-full content-center">
                    <div class="flex flex-wrap w-full justify-around">
                        <div class="case_button_up">
                            FinOps
                        </div>
                        <div class="case_button_up">
                            Detection de menaces
                        </div>
                    </div>
                    <div class="icon-expertise">
                        <IconProd></IconProd>
                    </div>
                    <div class="flex flex-wrap w-full justify-around">
                        <div class="case_button_down">
                            Monitoring
                        </div>
                        <div class="case_button_down">
                            Prevention Risques
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 md:w-full sm:w-full pr-4 pl-4 spe-col rounded-[30px] md:rounded-none md:group-odd:rounded-r-[30px] md:group-even:rounded-l-[30px]">
                    <div class="relative flex min-w-0 break-words expertise-small-card h-full">
                        <div class="flex-auto p-6">
                            <div class="mb-3 card-title" >
                                <span>
                                    Suivi de Production
                                </span>
                            </div>
                            <div>
                                <div class="mb-0 text-justify rounded-[30px] bg-white text-octobre-grey px-4 py-6">
                                    Le suivi opérationnel chez Octobre Conseil est une fusion d'art et de science.
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

            <div class="expertise group flex flex-col md:odd:flex-row md:even:flex-row-reverse rounded-[30px] justify-center items-center w-full expert-rh">
                <div class="hidden md:flex flex-wrap lg:w-1/2 md:w-full pr-4 pl-4 justify-center h-full content-center">
                    <div class="flex flex-wrap w-full justify-around">
                        <div class="case_button_up">
                            Formation / Mentoring
                        </div>
                        <div class="case_button_up">
                            Delegation de personnel
                        </div>
                    </div>
                    <div class="icon-expertise">
                        <IconRH></IconRH>
                    </div>
                    <div class="flex flex-wrap w-full justify-around">
                        <div class="case_button_down">
                            Accompagnement au changement
                        </div>
                        <div class="case_button_down">
                            Marque employeur
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 md:w-full sm:w-full pr-4 pl-4 spe-col rounded-[30px] md:rounded-none md:group-odd:rounded-r-[30px] md:group-even:rounded-l-[30px]">
                    <div class="relative flex min-w-0 break-words expertise-small-card h-full">
                        <div class="flex-auto p-6">
                            <div class="mb-3 card-title" >
                                <span>
                                    Recrutement / Stratégie RH
                                </span>
                            </div>
                            <div>
                                <div class="mb-0 text-justify rounded-[30px] bg-white text-octobre-grey px-4 py-6">
                                    Nous comprenons que la technologie n'est rien sans les talents qui la propulsent.
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
            <p class="p-5 mb-2 lg:px-6 text-justify bg-octobre-cream rounded-[30px] text-lg">
                En choisissant Octobre Conseil, vous ne faites pas qu'adopter la transformation digitale; vous écrivez une nouvelle ère pour votre entreprise. Nous sommes les alchimistes qui fusionnent technologie, avantages gouvernementaux et ressources humaines exceptionnelles. Ensemble, nous sculptons le futur numérique de votre entreprise, où l'excellence devient la norme.
            </p>

        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import IconArchi from '#root/components/icons/IconArchi.vue'
import IconProjet from '#root/components/icons/IconProjet.vue';
import IconProd  from '#root/components/icons/IconProd.vue';
import IconRH from '#root/components/icons/IconRH.vue';
</script>
<style scoped>
/* Expertise theme Archi */

.expert-archi .spe-col {
    @apply bg-octobre-light-green;
}
.expert-archi .case_button_up {
    @apply bg-octobre-green text-white;
}
.expert-archi .case_button_down {
    @apply bg-octobre-green text-white;
}


/* Expertise theme Projet */
.expert-projet .case_button_up {
    @apply bg-octobre-blue text-white;
}
.expert-projet .case_button_down {
    @apply bg-octobre-blue text-white;
}
.expert-projet .spe-col {
    @apply bg-octobre-light-blue;
}

/* Expertise theme Prod */
.expert-prod .case_button_up {
    @apply bg-octobre-ocre text-white;
}
.expert-prod .case_button_down {
    @apply bg-octobre-ocre text-white;
}
.expert-prod .spe-col {
    @apply bg-octobre-light-ocre;
}

/* Expertise theme RH */
.expert-rh .case_button_up {
    @apply bg-octobre-violet text-white;
}
.expert-rh .case_button_down {
    @apply bg-octobre-violet text-white;
}
.expert-rh .spe-col {
    @apply bg-octobre-light-violet;
}

.expertise {
    @apply bg-octobre-cream;
}

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
    color: #000;
    font-size: 30px;
    letter-spacing: 0;
    width: 100%;
    text-transform: uppercase;
    text-align: center;
}

@flex items-start (min-width: 992px)
.expertise .spe-col .expertise-small-card .card-title {
    text-align: left!important;
    width: 80%;
}
.icon-expertise > svg {
    zoom: 200%;
}
</style>