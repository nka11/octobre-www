<template>
    <section class="container max-w-full px-2 xs:px-4 our-team bg-octobre-cream" typeof="schema:Organization" resource=".">
      <div class="flex flex-wrap ">
        <h2 class="our-team-title text-center py-12 text-4xl w-full"><a id="team" href="#team">Notre équipe</a></h2>
      </div>
      <div class="flex flex-wrap  cards-container w-full xs:px-2">

        <TeamMemberCard v-for="member in members" :member="member"></TeamMemberCard>
        <!-- <div class="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 mb-4">
          <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 team-card h-full" property="schema:member" typeof="schema:Role">
            <div class="flex-auto p-6">
              <div class="card-infos"><a id="#samuel.assoun" href="#"></a>
                <div class="avatar-name-role">
                  <div property="schema:member" typeof="schema:Person" resource="#samuel.assoun"><img
                      src="./assets/team-members/samuel_picture.jpg" class="avatar" alt="avatar"></div>
                  <div class="name-role">
                    <div property="schema:member" typeof="schema:Person" resource="#samuel.assoun">
                      <div class="person-name" property="schema:name"><span
                          property="schema:givenName">Samuel&nbsp;</span><span
                          property="schema:familyName">Assoun</span></div>
                      <div style="display: none;">
                        <p property="schema:jobTitle">L'alchimiste</p>
                      </div>
                      <div style="display: none;">
                        <p property="schema:description"></p>
                      </div>
                    </div>
                    <div class="role-name" property="schema:roleName">Co-fondateur &amp; Responsable des opérations
                    </div>
                  </div>
                  <div style="display: none;">
                    <p property="schema:description"></p>
                  </div>
                </div><a href="https://www.linkedin.com/in/samuel-assoun-72847367/" target="_blank"><img
                    src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" class="icon"></a>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div class="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4  mb-4">
          <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 team-card h-full" property="schema:member" typeof="schema:Role">
            <div class="flex-auto p-6">
              <div class="card-infos"><a id="#nicolas.karageuzian" href="#"></a>
                <div class="avatar-name-role">
                  <div property="schema:member" typeof="schema:Person" resource="#nicolas.karageuzian"><img
                      src="./assets/team-members/nicolas_picture.jpg" class="avatar" alt="avatar"></div>
                  <div class="name-role">
                    <div property="schema:member" typeof="schema:Person" resource="#nicolas.karageuzian">
                      <div class="person-name" property="schema:name"><span
                          property="schema:givenName">Nicolas&nbsp;</span><span
                          property="schema:familyName">Karageuzian</span></div>
                      <div style="display: none;">
                        <p property="schema:jobTitle">Digital Shaman</p>
                        <p property="schema:description">IAM &amp; SSO Expert (SAML/OIDC - LDAP &amp; Provider + client
                          implementation)</p>
                        <p property="schema:description">Artisan du code</p>
                        <p property="schema:description">Specialiste en Informatique Générale</p>
                      </div>
                    </div>
                    <div class="role-name" property="schema:roleName">Co-fondateur &amp; Architecte Solution</div>
                  </div>
                  <div style="display: none;">
                    <p property="schema:description"></p>
                  </div>
                </div><a href="https://www.linkedin.com/in/nicolask/" target="_blank"><img
                    src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" class="icon"></a>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div class="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4  mb-4">
          <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 team-card h-full" property="schema:member" typeof="schema:Role">
            <div class="flex-auto p-6">
              <div class="card-infos"><a id="#sylvain.zyssman" href="#"></a>
                <div class="avatar-name-role">
                  <div property="schema:member" typeof="schema:Person" resource="#sylvain.zyssman"><img
                      src="./assets/team-members/sylvain_picture.jpeg" class="avatar" alt="avatar"></div>
                  <div class="name-role">
                    <div property="schema:member" typeof="schema:Person" resource="#sylvain.zyssman">
                      <div class="person-name" property="schema:name"><span
                          property="schema:givenName">Sylvain&nbsp;</span><span
                          property="schema:familyName">Zyssman</span></div>
                      <div style="display: none;">
                        <p property="schema:jobTitle">IA, machine learning &amp; MLOps expert</p>
                        <p property="schema:description">Le mentor</p>
                      </div>
                    </div>
                    <div class="role-name" property="schema:roleName">Data Strategy Officer</div>
                  </div>
                  <div style="display: none;">
                    <p property="schema:description"></p>
                  </div>
                </div><a href="https://www.linkedin.com/in/sylvainzyssman/" target="_blank"><img
                    src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" class="icon"></a>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div class="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 mb-4">
          <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 team-card h-full" property="schema:member" typeof="schema:Role">
            <div class="flex-auto p-6">
              <div class="card-infos"><a id="#remy.teboul" href="#"></a>
                <div class="avatar-name-role">
                  <div property="schema:member" typeof="schema:Person" resource="#remy.teboul"><img
                      src="./assets/team-members/remy_picture.jpeg" class="avatar" alt="avatar"></div>
                  <div class="name-role">
                    <div property="schema:member" typeof="schema:Person" resource="#remy.teboul">
                      <div class="person-name" property="schema:name"><span
                          property="schema:givenName">Remy&nbsp;</span><span property="schema:familyName">Teboul</span>
                      </div>
                      <div style="display: none;">
                        <p property="schema:jobTitle">L'artiste</p>
                      </div>
                    </div>
                    <div class="role-name" property="schema:roleName">UX / UI Designer</div>
                  </div>
                  <div style="display: none;">
                    <p property="schema:description"></p>
                  </div>
                </div><a href="https://www.linkedin.com/in/remyteboul/" target="_blank"><img
                    src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" class="icon"></a>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div class="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 mb-4">
          <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 team-card h-full" property="schema:member" typeof="schema:Role">
            <div class="flex-auto p-6">
              <div class="card-infos"><a id="#celine.cherqui" href="#"></a>
                <div class="avatar-name-role">
                  <div property="schema:member" typeof="schema:Person" resource="#celine.cherqui"><img
                      src="./assets/team-members/celine_picture.jpeg" class="avatar" alt="avatar"></div>
                  <div class="name-role">
                    <div property="schema:member" typeof="schema:Person" resource="#celine.cherqui">
                      <div class="person-name" property="schema:name"><span
                          property="schema:givenName">Céline&nbsp;</span><span
                          property="schema:familyName">Cherqui</span></div>
                      <div style="display: none;">
                        <p property="schema:jobTitle">L'Attrape-talents</p>
                      </div>
                    </div>
                    <div class="role-name" property="schema:roleName">Responsable recrutement / marque employeur</div>
                  </div>
                  <div style="display: none;">
                    <p property="schema:description"></p>
                  </div>
                </div><a
                  href="https://www.linkedin.com/in/celine-cherqui-oneway-recrutement-experience-candidats-collaborateurs/"
                  target="_blank"><img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" class="icon"></a>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div class="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4  mb-4">
          <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 team-card h-full" property="schema:member" typeof="schema:Role">
            <div class="flex-auto p-6">
              <div class="card-infos"><a id="#ethan.fajnkuchen" href="#"></a>
                <div class="avatar-name-role">
                  <div property="schema:member" typeof="schema:Person" resource="#ethan.fajnkuchen"><img
                      src="./assets/team-members/ethan_picture.jpg" class="avatar" alt="avatar"></div>
                  <div class="name-role">
                    <div property="schema:member" typeof="schema:Person" resource="#ethan.fajnkuchen">
                      <div class="person-name" property="schema:name"><span
                          property="schema:givenName">Ethan&nbsp;</span><span
                          property="schema:familyName">Fajnkuchen</span></div>
                      <div style="display: none;">
                        <p property="schema:jobTitle">Le prince des hackers / Petit scarabée</p>
                      </div>
                    </div>
                    <div class="role-name" property="schema:roleName">Ingénieur Logiciel</div>
                  </div>
                  <div style="display: none;">
                    <p property="schema:description"> </p>
                  </div>
                </div><a href="https://www.linkedin.com/in/ethan-fajnkuchen/" target="_blank"><img
                    src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" class="icon"></a>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </section>
</template>

<script setup lang="ts">
import TeamMemberCard from '#root/components/TeamMemberCard.vue';
const members = [{
        id: "sassoun",
        givenName: "Samuel",
        familyName: "Assoun",
        jobTitle: "L'alchimiste",
        roleName: "Co-fondateur & Responsable des opérations",
        description: [],
        linkedIn: "https://www.linkedin.com/in/samuel-assoun-72847367/",
        pic: "/public/images/team-members/samuel_picture.jpg"
    },{
        id: "nkaragezian",
        givenName: "Nicolas",
        familyName: "Karageuzian",
        jobTitle: "Digital Shaman",
        roleName: "Co-fondateur & Architecte Solution",
        description: [
            "IAM & SSO Expert (SAML/OIDC - LDAP & Provider + client implementation)",
            "Artisan du code",
            "Specialiste en Informatique Générale"
        ],
        linkedIn: "https://www.linkedin.com/in/nicolask/",
        pic: "/public/images/team-members/nicolas_picture.jpg"
    },{
        id: "szyssman",
        givenName: "Sylvain",
        familyName: "Zyssman",
        jobTitle: "IA, machine learning & MLOps expert",
        roleName: "Data Strategy Officer",
        description: [
            "Le mentor"
        ],
        linkedIn: "https://www.linkedin.com/in/sylvainzyssman/",
        pic: "/public/images/team-members/sylvain_picture.jpeg"
    },{
        id: "rteboul",
        givenName: "Remy",
        familyName: "Teboul",
        jobTitle: "L'artistet",
        roleName: "UX / UI Designer",
        description: [
        ],
        linkedIn: "https://www.linkedin.com/in/remyteboul/",
        pic: "/public/images/team-members/remy_picture.jpeg"
    },{
        id: "ccherqui",
        givenName: "Céline",
        familyName: "Cherqui",
        jobTitle: "L'Attrape-talents",
        roleName: "Responsable recrutement / marque employeur",
        description: [
        ],
        linkedIn: "https://www.linkedin.com/in/celine-cherqui-oneway-recrutement-experience-candidats-collaborateurs/",
        pic: "/public/images/team-members/celine_picture.jpeg"
    },{
        id: "efajnkuchen",
        givenName: "Ethan",
        familyName: "Fajnkuchen",
        jobTitle: "Le prince des hackers / Petit scarabée",
        roleName: "Ingénieur Logiciel",
        description: [
        ],
        linkedIn: "https://www.linkedin.com/in/ethan-fajnkuchen/",
        pic: "/public/images/team-members/ethan_picture.jpg"
    }

]
</script>