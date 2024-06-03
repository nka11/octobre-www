<template>
    <section class="px-3 container min-w-md mx-auto sm:px-4 case_studies mt-14 pt-16 border-t border-octobre-cream" typeof="schema:Organization" resource=".">
      <div class="flex flex-wrap ">
        <div class="relative flex-grow max-w-full flex-1 px-4 py-4">
          <h2 class="text-center text-octobre-grey text-[1.5em]"><a id="case-studies" href="#case-studies">CAS CLIENTS</a></h2>
        </div>
      </div>
      <div class="flex flex-wrap  case_studies_intro mb-6">
        <div class="relative flex-grow max-w-full flex-1 pt-4 text-octobre-dark-grey text-center text-[1.8em]">Nos clients témoignent</div>
      </div>
      <CaseStudyBox v-for="case_study in case_studies" v-bind="case_study" :class="case_study.class"></CaseStudyBox>
      <!-- <div class="case-study block-color-green group flex flex-col-reverse rounded-[30px] justify-center items-center w-full"
      property="schema:review" typeof="schema:Review">
      <div class="flex group-odd:flex-col-reverse group-even:flex-col lg:group-odd:flex-row-reverse lg:group-even:flex-row lg:flex-auto rounded-[30px] w-full justify-center lg:justify-normal h-full">
      <div class="flex w-full h-full lg:h-auto justify-around lg:group-even:flex-row-reverse lg:group-odd:flex-row lg:justify-normal lg:justify-items-start lg:bg-[url('/public/images/use-cases/case_study_1_back.jpeg')] bg-left-top bg-cover lg:group-odd:rounded-r-[30px] lg:group-even:rounded-l-[30px]">
          <div class="flex flex-col-reverse h-auto flex-grow">
              <div class="flex justify-self-end p-6 mt-auto strong-block lg:w-1/2 rounded-b-[30px] lg:group-odd:rounded-bl-none lg:group-odd:rounded-r-[30px] lg:group-odd:rounded-t-[30px] lg:group-even:rounded-br-none lg:group-even:rounded-l-[30px] lg:group-even:rounded-t-[30px]">
                  <div class="flex flex-col justify-center lg:justify-start"  property="schema:reviewBody">
                      <div class="mb-3 w-full text-center text-lg">PLUS DE</div>
                      <strong class="text-7xl w-full text-center pt-1 pb-3">80%</strong>
                      <div class="mb-0 text-sm text-center">des utilisateurs estiment que les évolutions ont un impact positif sur leur efficacité.</div>
                  </div>
              </div>
          </div>
                    <div class="lg:grow lg:contents">
                    </div>
                </div>
                <div class="p-4 md:w-full sm:w-full pr-4 pl-4 spe-col rounded-t-[30px] lg:group-odd:rounded-l-[30px] lg:group-odd:rounded-tr-none lg:group-even:rounded-r-[30px] lg:group-even:rounded-tl-none">
                    <div class="relative flex flex-col w-full break-words case-study-small-card h-full">
                        <div property="schema:reviewBody" class="flex flex-col w-full p-6 justify-center justify-items-center content-center ">
                            <div class="mb-3 text-center uppercase text-xl font-bold py-5" >
                                <span property="schema:name">Digitalisation de l'operationnel</span>
                            </div>
                            <div class="auteur strong-block w-fit self-center rounded-[30px] py-4 px-5">
                                <div class="photo-auteur hidden"><img src="./assets/photos/profil-pic.png"></div>
                                <div class="infos-auteur" property="schema:name">
                                    <div id="new" class="mb-0" property="schema:givenName">
                                        <strong>Eric</strong>
                                    </div>
                                <div class="mb-0" property="schema:jobTitle">
                                    Directeur des opérations
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col justify-items-center justify-center content-center bg-white rounded-[30px] px-6 py-4 mt-6">
                                <div class="text-center py-2" property="schema:memberOf" typeof="schema:Organization">
                                    <span property="schema:name">
                                        PME dans le domaine de la logistique
                                    </span>
                                </div>
                                <div class="mb-0 text-justify text-octobre-mid-grey" property="schema:reviewBody">
                                    "Octobre nous a aidés à mettre en oeuvre un nouvel
                                    <span property="schema:keywords"> outil de gestion "ERP" </span>
                                    en s'appuyant sur notre système existant, et l'a configuré de sorte qu'il reponde à nos besoins et nos
                                    <span property="schema:keywords"> processus métiers</span>."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div> -->
      <!-- <div class="case-study block-color-blue   group flex flex-col-reverse md:odd:flex-row-reverse md:even:flex-row rounded-[30px] justify-center items-center lg:items-end content-stretch w-full bg-[url('/public/images/use-cases/case_study_2_back.jpg')]" property="schema:review" typeof="schema:Review"
        resource="#review-devops">
            <div class="lg:grow flex flex-row w-full lg:w-1/2 justify-center lg:flex-col-reverse h-full content-stretch">
                <div class="flex flex-col lg:group-even:flex-row-reverse lg:group-odd:flex-row w-full h-full justify-around lg:justify-normal lg:justify-items-start">
                    <div class="p-6 mt-auto strong-block lg:w-1/2 rounded-b-[30px] lg:group-odd:rounded-bl-none lg:group-odd:rounded-r-[30px] lg:group-odd:rounded-t-[30px] lg:group-even:rounded-br-none lg:group-even:rounded-l-[30px] lg:group-even:rounded-t-[30px]">
                        <div class="flex flex-col justify-center lg:justify-start"  property="schema:reviewBody">
                            <div class="mb-3 w-full text-center text-lg">AMÉLIORATION DE</div>
                            <strong class="text-7xl w-full text-center pt-1 pb-3">20%</strong>
                            <div class="mb-0 text-sm text-center">de satisfaction client en augmentant la fréquence de mise à jour de notre produit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 md:w-full sm:w-full pr-4 pl-4 spe-col rounded-t-[30px] lg:group-odd:rounded-l-[30px] lg:group-odd:rounded-tr-none lg:group-even:rounded-r-[30px] lg:group-even:rounded-tl-none">
                <div class="relative flex flex-col w-full break-words case-study-small-card h-full">
                    <div property="schema:reviewBody" class="flex flex-col w-full p-6 justify-center justify-items-center content-center ">
                        <div class="mb-3 text-center uppercase text-xl font-bold py-5" >
                        <span
                        property="schema:name">USINE LOGICIELLE</span></div>
                        <div class="auteur strong-block w-fit self-center rounded-[30px] py-4 px-5">
                            <div class="photo-auteur hidden"><img src="./assets/photos/profil-pic.png"></div>
                            <div class="infos-auteur" property="schema:name">
                                <div id="new" class="mb-0" property="schema:givenName">
                                    <strong>Robert</strong></div>
                        <div class="mb-0" property="schema:jobTitle">Directeur général</div>
                        </div>
                    </div>
                    <div class="flex flex-col justify-items-center justify-center content-center bg-white rounded-[30px] px-6 py-4 mt-6">
                            <div class="text-center py-2" property="schema:memberOf" typeof="schema:Organization">
                                <span property="schema:name">
                                    Editeur BtB de solutions métiers</span></div>
                        <div class="mb-0 text-justify text-octobre-mid-grey" property="schema:reviewBody">"La pratique <span
                            property="schema:keywords">agile</span> et l'expertise <span
                            property="schema:keywords">Devops</span> d'Octobre ont permis d'accélérer l'évolution des
                        fonctionnalités de notre produit et d'apporter des réponses adaptées aux demandes des clients."</div>
                    </div>
                    </div>
                </div>
            </div>
      </div> -->
      <!-- <div class="case-study block-color-ocre   group flex flex-col-reverse md:odd:flex-row-reverse md:even:flex-row rounded-[30px] justify-center items-center lg:items-end content-stretch w-full bg-[url('/public/images/use-cases/case_study_3_back.jpeg')]" property="schema:review" typeof="schema:Review"
        resource="#review-conformite">
            <div class="lg:grow flex flex-row w-full lg:w-1/2 justify-center lg:flex-col-reverse h-full content-stretch">
                <div class="flex flex-col lg:group-even:flex-row-reverse lg:group-odd:flex-row w-full h-full justify-around lg:justify-normal lg:justify-items-start">
                    <div class="p-6 mt-auto strong-block lg:w-1/2 rounded-b-[30px] lg:group-odd:rounded-bl-none lg:group-odd:rounded-r-[30px] lg:group-odd:rounded-t-[30px] lg:group-even:rounded-br-none lg:group-even:rounded-l-[30px] lg:group-even:rounded-t-[30px]">
                        <div class="flex flex-col justify-center lg:justify-start"  property="schema:reviewBody">
                        <div class="mb-3 w-full text-center text-lg">UNE ÉLIGIBILITÉ SUR</div>
                        <strong class="text-7xl w-full text-center pt-1 pb-3 text-nowrap">+ 30%</strong>
                        <div class="mb-0 text-sm text-center">d'appels d'offres en moins d'un an.</div>
                    </div>
                </div>
          </div>
        </div>
        <div class="lg:w-1/2 p-4 md:w-full sm:w-full pr-4 pl-4 spe-col rounded-t-[30px] lg:group-odd:rounded-l-[30px] lg:group-odd:rounded-tr-none lg:group-even:rounded-r-[30px] lg:group-even:rounded-tl-none">
                <div class="relative flex flex-col w-full break-words case-study-small-card h-full">
                    <div property="schema:reviewBody" class="flex flex-col w-full p-6 justify-center justify-items-center content-center ">
                        <div class="mb-3 text-center uppercase text-xl font-bold py-5" >
                <span
                  property="schema:name">PERFORMANCE SÉCURISÉE / CYBER-HYGIÈNE</span>
                </div>
                <div class="auteur strong-block w-fit self-center rounded-[30px] py-4 px-5">
                            <div class="photo-auteur hidden"><img src="./assets/photos/profil-pic.png"></div>
                            <div class="infos-auteur" property="schema:name">
                                <div id="new" class="mb-0" property="schema:givenName">
                                    <strong>Pascal</strong></div>
                  <div class="mb-0"><span property="schema:jobTitle">Directeur commercial</span></div>
                </div>
              </div>
              <div class="flex flex-col justify-items-center justify-center content-center bg-white rounded-[30px] px-6 py-4 mt-6">
                            <div class="text-center py-2" property="schema:memberOf" typeof="schema:Organization">
                                <span property="schema:name">
                                    PME dans le domaine aéronautique (BtB)</span></div>
                <div class="mb-0 text-justify text-octobre-mid-grey" property="schema:reviewBody">"Octobre a réalisé un <span
                    property="schema:keywords">audit</span> de notre <span property="schema:keywords">système
                    d'information</span> et nous a accompagnés pour obtenir les <span
                    property="schema:keywords">certifications</span> de <span
                    property="schema:keywords">conformité</span> exigées par nos partenaires."</div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="case-study block-color-violet group flex flex-col-reverse md:odd:flex-row-reverse md:even:flex-row rounded-[30px] justify-center items-center lg:items-end content-stretch w-full bg-[url('/public/images/use-cases/case_study_4_back.jpg')]" property="schema:review" typeof="schema:Review"
        resource="#review-bramding">
        <div class="lg:grow flex flex-row w-full lg:w-1/2 justify-center lg:flex-col-reverse h-full content-stretch">
                <div class="flex flex-col lg:group-even:flex-row-reverse lg:group-odd:flex-row w-full h-full justify-around lg:justify-normal lg:justify-items-start">
                    <div class="p-6 mt-auto strong-block lg:w-1/2 rounded-b-[30px] lg:group-odd:rounded-bl-none lg:group-odd:rounded-r-[30px] lg:group-odd:rounded-t-[30px] lg:group-even:rounded-br-none lg:group-even:rounded-l-[30px] lg:group-even:rounded-t-[30px]">
                        <div class="flex flex-col justify-center lg:justify-start"  property="schema:reviewBody">
                <div class="mb-3 w-full text-center text-lg" property="schema:keywords">ACQUISITION DE</div><strong
                  class="text-7xl w-full text-center pt-1 pb-3">40%</strong>
                <div class="mb-0 text-sm text-center"> sur les fonctions supports et commerciales et une réduction significative du
                  Turn Over.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 p-4 md:w-full sm:w-full pr-4 pl-4 spe-col rounded-t-[30px] lg:group-odd:rounded-l-[30px] lg:group-odd:rounded-tr-none lg:group-even:rounded-r-[30px] lg:group-even:rounded-tl-none">
                <div class="relative flex flex-col w-full break-words case-study-small-card h-full">
                    <div property="schema:reviewBody" class="flex flex-col w-full p-6 justify-center justify-items-center content-center ">
                        <div class="mb-3 text-center uppercase text-xl font-bold py-5" >
                            <span property="schema:name">MARQUE EMPLOYEUR 3.0</span>
                        </div>
              <div class="auteur strong-block w-fit self-center rounded-[30px] py-4 px-5">
                            <div class="photo-auteur hidden"><img src="./assets/photos/profil-pic.png"></div>
                            <div class="infos-auteur" property="schema:name">
                                <div id="new" class="mb-0" property="schema:givenName">
                                    <strong>Xavier</strong></div>
                  <div class="mb-0" property="schema:jobTitle">Directeur des ressources humaines</div>
                </div>
              </div>
              <div class="flex flex-col justify-items-center justify-center content-center bg-white rounded-[30px] px-6 py-4 mt-6">
                            <div class="text-center py-2" property="schema:memberOf" typeof="schema:Organization">
                                <span property="schema:name">
                                    ETI dans le domaine de la logistique
                                </span>
                </div>
                <div class="mb-0 text-justify text-octobre-mid-grey" property="schema:reviewBody">"L'amélioration de notre CRM et de
                  notre processus de recrutement ont eu un impact positif sur l'expérience&nbsp;candidats."</div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="flex flex-wrap  octobre_row text-center">
        <div class="relative flex-grow max-w-full flex-1 px-4"><button class="octobre_black" style="display: none;">Voir + d’étude de cas</button></div>
      </div>
    </section>
</template>

<script setup lang="ts">
import CaseStudyBox from '#root/components/CaseStudyBox.vue';

const case_studies = [{
    class: 'block-color-green',
    backgroundImage: '/images/use-cases/case_study_1_back.jpeg',
    kpi: {
        prefix: 'PLUS DE',
        strong: '80%',
        suffix: 'des utilisateurs estiment que les évolutions ont un impact positif sur leur efficacité.'
    },
    title: "Digitalisation de l'operationnel",
    author: {
        firstName: 'Eric',
        title: 'Directeur des opérations',
    },
    review: {
        memberOf: 'PME dans le domaine de la logistique',
        body: "Octobre nous a aidés à mettre en oeuvre un nouvel \
                                    <span property=\"schema:keywords\"> outil de gestion \"ERP\" </span>\
                                    en s'appuyant sur notre système existant, et l'a configuré de sorte qu'il reponde à nos besoins et nos \
                                    <span property=\"schema:keywords\"> processus métiers</span>."
    }
    },
    {
        class: "block-color-blue",
        backgroundImage: "/images/use-cases/case_study_2_back.jpg",
        kpi: {
            prefix: "AMÉLIORATION DE",
            strong: "20%",
            suffix: "de satisfaction client en augmentant la fréquence de mise à jour de notre produit"
        },
        title: "USINE LOGICIELLE",
        author: {
            firstName: "Robert",
            title: "Directeur général",
        },
        review: {
            memberOf: "Editeur BtB de solutions métiers",
            body: "La pratique <span \
                            property=\"schema:keywords\">agile</span> et l'expertise <span \
                            property=\"schema:keywords\">Devops</span> d'Octobre ont permis d'accélérer l'évolution des \
                        fonctionnalités de notre produit et d'apporter des réponses adaptées aux demandes des clients."
        }
    }
    ,{
        class: "block-color-ocre",
        backgroundImage: "/images/use-cases/case_study_3_back.jpeg",
        kpi: {
            prefix: "UNE ÉLIGIBILITÉ SUR",
            strong: "+ 30%",
            suffix: "d'appels d'offres en moins d'un an."
        },
        title: "PERFORMANCE SÉCURISÉE / CYBER-HYGIÈNE",
        author: {
            firstName: "Pascal",
            title: "Directeur commercial",
        },
        review: {
            memberOf: "PME dans le domaine aéronautique (BtB)",
            body: "Octobre a réalisé un <span \
                    property=\"schema:keywords\">audit</span> de notre <span property=\"schema:keywords\">système\
                    d'information</span> et nous a accompagnés pour obtenir les <span \
                    property=\"schema:keywords\">certifications</span> de <span \
                    property=\"schema:keywords\">conformité</span> exigées par nos partenaires."
        }
    }
    ,{
        class: "block-color-violet",
        backgroundImage: "/images/use-cases/case_study_4_back.jpg",
        kpi: {
            prefix: "ACQUISITION DE",
            strong: "40%",
            suffix: " sur les fonctions supports et commerciales et une réduction significative du Turn Over."
        },
        title: "MARQUE EMPLOYEUR 3.0",
        author: {
            firstName: "Xavier",
            title: "Directeur des ressources humaines",
        },
        review: {
            memberOf: "ETI dans le domaine de la logistique",
            body: "L'amélioration de notre CRM et de notre processus de recrutement ont eu un impact positif sur l'expérience&nbsp;candidats."
        }
    }
]


</script>

<style scoped>

.case-study {
    @apply mb-14;
}
.auteur {
    @apply inline-block;
}

.block-color-green .spe-col {
    @apply bg-octobre-light-green;
}
.block-color-green .strong-block {
    @apply bg-octobre-green text-white;
}

.block-color-violet .spe-col {
    @apply bg-octobre-light-violet;
}
.block-color-violet .strong-block {
    @apply bg-octobre-violet text-white;
}

.block-color-ocre .spe-col {
    @apply bg-octobre-light-ocre;
}
.block-color-ocre .strong-block {
    @apply bg-octobre-ocre text-white;
}

.block-color-blue .spe-col {
    @apply bg-octobre-light-blue;
}
.block-color-blue .strong-block {
    @apply bg-octobre-blue text-white;
}

</style>