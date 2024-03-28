<template>
  <!-- <div class="container relative flex justify-self-center top-20 mt-2 w-screen xl:max-w-screen-xl mx-1 sm:mx-2 justify-center"></div> -->
<div class="w-full">
  <main class="flex flex-col w-full bg-white justify-center justify-items-center ">
    <h1 class="hidden">Octobre Conseil</h1>
    <FirstSection></FirstSection>
    <Expertise></Expertise>
    <About></About>
    <CaseStudies></CaseStudies>
    <section>
      <div class="row5 pt-5 pb-28">
        <div class="relative flex-grow max-w-full flex-1 py-4 text-octobre-dark-grey text-center text-[1.8em]">Ils nous font confiance !</div>
        <div class="container max-w-full mx-auto flex flex-wrap justify-evenly sm:px-4 [&>img]:m-[2em] [&>img]:w-[120px]">
          <img src="/images/partners-logo/Arconic_logo_(horizontal).svg"
            alt="Logo Arconic"/>
          <img src="/images/partners-logo/chauvin-arnoux-group-vector-logo.svg"
            alt="Logo Chauvin Arnoux"/>
          <img
            src="/images/partners-logo/CORNORM_LOGO-ozlyaie70glwwn6uuajshil9pwtvukr6c3ifyqa156.svg"
            alt="Logo CorNorm"/>
          <img src="/images/partners-logo/Logo_Hermès.svg" alt="Logo Hermes"/>
          <img
            src="/images/partners-logo/evitech-logo.png" alt="Logo Evitech"/>
        </div>
      </div>
    </section>
    <Team></Team>
    <section class="container min-w-lg mx-auto sm:px-4 contact-us" style="display: none;">
      <div class="picture"><img src="/images/photos/contact-pic.png"></div>
      <div class="form">
        <h2 class="contact-us-title"><a id="contact" href="#contact">Contactez-nous</a></h2>
        <form><input name="senderFirstName" class="left-input" placeholder="Nom" type="text"><input
            name="senderLastName" placeholder="Prénom" type="text"><input name="senderOrganization"
            placeholder="Nom de l'entreprise" type="text" id="entreprise"><input name="senderEmail" class="left-input"
            placeholder="Email" type="email"><input name="senderPhone" placeholder="Téléphone" type="tel"><textarea
            name="messageText" placeholder="Votre message"></textarea><button type="submit">Envoyer</button></form>
      </div>
    </section>
  </main>
  <Footer></Footer>
</div>

</template>

<script lang="ts" setup>
import FirstSection from './FirstSection.vue';
import Expertise from './Expertise.vue';
import About from './About.vue';
import CaseStudies from './CaseStudies.vue'
import Team from './Team.vue';
import Footer from '#root/components/Footer.vue';
</script>
