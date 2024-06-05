<template>
    <div class="lg:w-1/3 md:w-1/2 xs:w-1/2 px-4 mb-4 grid grid-rows-1 xs:grid-cols-1 w-full">
        <div class="relative flex flex-row xs:flex-col w-full rounded-[30px] break-words border bg-white  team-card h-full" property="schema:member" typeof="schema:Role">
            <div class="flex-auto p-4 xs:p-6">
                <div class="w-full flex flex-row xs:flex-col xs:py-8 justify-start items-center">
                    <a :id="`#${props.member.id}`" href="#">
                    </a>
                    <div class="grow flex flex-row xs:flex-col xs:py-2 items-center text-center">
                        <div class="min-w-20"
                            property="schema:member" typeof="schema:Person" :resource="`#${props.member.id}`">
                            <img
                                :src="props.member.pic" class="avatar" alt="avatar">
                        </div>
                        <div class="text-left pl-4 xs:pl-0 py-2 xs:py-4 xs:text-center">
                            <div property="schema:member" typeof="schema:Person" :resource="'#' + props.member.givenName + '.' + props.member.familyName">
                                <div class="person-name" property="schema:name"><span
                                    property="schema:givenName">{{ props.member.givenName }}&nbsp;</span><span
                                    property="schema:familyName">{{ props.member.familyName }}</span></div>
                                <div style="display: none;">
                                    <p property="schema:jobTitle">{{ props.member.jobTitle }}</p>
                                    <template v-for="description in props.member.description">
                                        <p property="schema:description">{{ description }}</p>
                                    </template>
                                </div>
                            </div>
                        <div class="pt-3 pr-6 text-sm text-octobre-grey text-wrap" property="schema:roleName">{{ props.member.roleName }}</div>
                        </div>
                        <div style="display: none;">
                        <p property="schema:description"></p>
                        </div>
                    </div>
                    <a :href="props.member.linkedIn" target="_blank">
                        <img src="/icons/icon-linkedin.svg" alt="icon-linkedin" class="icon">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    member: {
        id: String,
        givenName: String,
        familyName: String,
        jobTitle: String,
        roleName: String,
        pic: string,
        description: String[],
        linkedIn: string
    }
}>()
</script>
<style>
.avatar {
    @apply w-[70px] h-[70px] xs:w-[110px] xs:h-[110px] ;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    filter: grayscale(100%);
}
</style>