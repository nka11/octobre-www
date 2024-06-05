<template>
    <div :class="props.class" class="mt-2 case-study group flex flex-col-reverse rounded-[30px] justify-center items-center w-full"
      typeof="schema:Review" :about="`/#review-${props.title.replaceAll(/([^a-zA-Z])/g, '')}`">
      <div class="hidden">
          <span property="schema:itemReviewed" typeof="skos:Concept" :resource="`${props.itemReviewed}`"></span>
          <span property="schema:reviewRating" typeof="schema:Rating">
            <span property="schema:ratingValue" :content="props.review.rating"></span>
          </span>
      </div>
      <div class="flex flex-col-reverse lg:group-odd:flex-row-reverse lg:group-even:flex-row lg:flex-auto rounded-[30px] w-full justify-center lg:justify-normal h-full">
      <div 
        :style="styleBackground"
        class="flex rounded-[30px] w-full h-full lg:h-auto justify-around lg:flex-col-reverse lg:justify-normal lg:justify-items-start bg-left-top bg-cover  lg:group-odd:rounded-l-none lg:group-even:rounded-r-none lg:group-odd:rounded-r-[30px] lg:group-even:rounded-l-[30px]">
          <div class="flex flex-row-reverse w-full justify-end h-auto">
              <div class="flex justify-self-end w-full p-6 lg:group-even:ml-auto mt-auto strong-block lg:w-1/2 rounded-b-[30px] lg:group-odd:rounded-bl-none lg:group-odd:rounded-r-[30px] lg:group-odd:rounded-t-[30px] lg:group-even:rounded-br-none lg:group-even:rounded-l-[30px] lg:group-even:rounded-t-[30px]">
                  <div property="schema:reviewBody" class="flex flex-col justify-center w-full lg:justify-start">
                      <div class="mb-3 w-full text-center text-lg">{{ props.kpi.prefix }}</div>
                      <strong class="text-7xl w-full text-center pt-1 pb-3">{{ props.kpi.strong }}</strong>
                      <div class="mb-0 text-sm text-center">{{ props.kpi.suffix }}</div>
                  </div>
              </div>
          </div>
                    <div class="lg:grow lg:contents">
                    </div>
                </div>
                <div class="p-4 lg:w-full sm:w-full pr-4 pl-4 spe-col rounded-t-[30px] lg:group-odd:rounded-l-[30px] lg:group-odd:rounded-tr-none lg:group-even:rounded-r-[30px] lg:group-even:rounded-tl-none">
                    <div class="relative flex flex-col w-full break-words case-study-small-card h-full">
                        <div class="flex flex-col w-full p-6 justify-center justify-items-center content-center ">
                            <div class="mb-3 text-center lg:text-left uppercase text-xl lg:text-3xl font-bold py-5" >
                                <span property="schema:name">{{ props.title }}</span>
                            </div>
                            <div property="schema:author" typeof="schema:Person" :resource="`#review-${props.title.replaceAll(/([^a-zA-Z])/g, '')}-author`" class="auteur strong-block w-fit self-center lg:self-start rounded-[30px] py-4 px-5">
                                <!-- <div class="photo-auteur hidden"><img src="./assets/photos/profil-pic.png"></div> -->
                                <div class="infos-auteur">
                                    <div id="new" class="mb-0" property="schema:givenName">
                                        <strong>{{ props.author.firstName }}</strong>
                                    </div>
                                <div class="mb-0" property="schema:jobTitle">
                                    {{ props.author.title }}
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col justify-items-center justify-center content-center bg-white rounded-[30px] px-6 py-4 mt-6">
                                <div property="schema:author" typeof="schema:Person" :resource="`#review-${props.title.replaceAll(/([^a-zA-Z])/g, '')}-author`">
                                    <div class="text-center py-2" property="schema:memberOf" typeof="schema:Organization">
                                        <span property="schema:name">
                                            {{ props.author.memberOf }}
                                        </span>
                                    </div>
                                </div>
                                <div class="mb-0 text-justify text-octobre-mid-grey" property="schema:reviewBody"> 
                                    "<div class="inline" v-html="$props.review.body"></div>"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const props = defineProps<{
    class: String,
    backgroundImage: String,
    kpi: {
        prefix: String,
        strong: String,
        suffix: String
    },
    title: String,
    itemReviewed: String,
    author: {
        firstName: String,
        title: String,
        memberOf: String,
    },
    review: {
        body: String,
        rating: Number,
    }
}>()
const styleBackground = reactive({
  'background-image': `url(${props.backgroundImage})`,
})
</script>
