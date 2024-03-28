<template>
    <div class="fixed block top-0 w-full bg-white h-20 justify-items-center">
        <header class="container min-w-xl mx-auto sm:px-4 bg-white min-h-20">
          <nav class="relative flex flex-wrap items-start lg:items-center justify-between pt-3 pb-0 lg:pb-3 px-4 text-black bg-white container align-middle content-center">
            <div class="flex grow align-middle items-start lg:items-center content-center lg:justify-between lg:content-between">
              <button 
                @click="toggleNav()"
                aria-controls="octobreNav" type="button" aria-label="Toggle navigation" aria-expanded="true"
                
                class="lg:hidden mt-3 px-2 text-md leading-normal bg-transparent border border-transparent rounded collapsed">
                <svg width="20px" height="9px" viewBox="0 0 20 9" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>32DE81AF-8B99-4091-A254-8D4C5355E570</title>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="MOBILE" transform="translate(-23, -40)" fill="#1C1C1C">
                      <g id="Menu" transform="translate(23, 40)">
                        <rect id="Rectangle" x="0" y="0" width="20" height="3" rx="1.5"></rect>
                        <rect id="Rectangle" x="0" y="6" width="12" height="3" rx="1.5"></rect>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <div class="lg:flex w-full content-center lg:justify-between lg:items-center">
                  <a href="/" class="logo flex content-center pt-1 pb-0 lg:pb-1 mr-4 text-lg whitespace-no-wrap">
                    <svg class="w-[140px]" width="183px" height="49px" viewBox="0 0 183 49" id="svg4" sodipodi:docname="Logo_octobre.svg"
                      inkscape:version="1.3 (0e150ed, 2023-07-21)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                    xmlns:svg="http://www.w3.org/2000/svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">
                    <!-- <sodipodi:namedview id="namedview4" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25"
                      inkscape:showpageshadow="2" inkscape:pageopacity="0" inkscape:pagecheckerboard="0"
                      inkscape:deskcolor="#d1d1d1" inkscape:zoom="4.5136612" inkscape:cx="91.389225" inkscape:cy="24.59201"
                      inkscape:window-width="1440" inkscape:window-height="793" inkscape:window-x="0" inkscape:window-y="25"
                      inkscape:window-maximized="1" inkscape:current-layer="Group-5"></sodipodi:namedview> -->
                    <title id="title1">FC431F3A-3ECC-47A3-B2B7-21B8B0702AD2</title>
                    <defs id="defs3">
                      <linearGradient x1="14.1851327%" y1="85.4110516%" x2="100%" y2="18.3966546%" id="linearGradient-1">
                        <stop stop-color="#B5530C" offset="0%" id="stop1"></stop>
                        <stop stop-color="#EB9D34" offset="49.261484%" id="stop2"></stop>
                        <stop stop-color="#F72900" offset="100%" id="stop3"></stop>
                      </linearGradient>
                      <path
                        d="M93,42 C100.179702,42 106,36.1797017 106,29 C106,21.8202983 100.179702,16 93,16 C85.8202983,16 80,21.8202983 80,29 C80,36.1797017 85.8202983,42 93,42 Z"
                        id="path-2"></path>
                      <mask id="mask-3" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="26"
                        height="26" fill="white">
                        <use xlink:href="#path-2" id="use3"></use>
                      </mask>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Capture-d\u2019e\u0301cran-2023-11-22-a\u0300-16.31.05" transform="translate(-201, -5557)">
                        <g id="Group-5" transform="translate(201, 5557)">
                          <path
                            d="M 5.928,35.88 Q 2.34,32.24 2.34,26.78 q 0,-5.46 3.588,-9.1 3.64,-3.64 9.048,-3.64 5.408,0 8.996,3.64 3.64,3.64 3.64,9.1 0,5.46 -3.64,9.1 -3.588,3.64 -8.996,3.64 -5.408,0 -9.048,-3.64 z M 9.464,21.06 Q 7.28,23.4 7.28,26.78 q 0,3.38 2.184,5.72 2.184,2.34 5.512,2.34 3.328,0 5.512,-2.34 2.184,-2.34 2.184,-5.72 0,-3.38 -2.184,-5.72 -2.184,-2.34 -5.512,-2.34 -3.328,0 -5.512,2.34 z m 41.761551,9.984 3.796,2.756 q -1.508,2.548 -4.524,4.16 -3.016,1.56 -6.344,1.56 -5.616,0 -9.36,-3.64 -3.692,-3.64 -3.692,-9.1 0,-5.46 3.64,-9.1 3.64,-3.64 9.1,-3.64 3.12,0 5.876,1.456 2.756,1.404 4.524,3.848 l -3.64,3.068 q -2.652,-3.692 -6.76,-3.692 -3.328,0 -5.564,2.288 -2.236,2.288 -2.236,5.772 0,3.588 2.288,5.824 2.288,2.236 5.824,2.236 4.212,0 7.072,-3.796 z m 22.417575,3.484 0.988,4.472 q -1.56,0.52 -3.848,0.52 -4.368,0 -6.916,-2.86 -1.976,-2.184 -1.976,-6.5 V 18.98 h -6.24 v -4.42 h 6.24 V 7.8 h 4.94 v 6.76 h 7.8 v 4.42 h -7.8 v 11.44 q 0,2.288 0.728,3.12 1.04,1.3 3.38,1.3 1.612,0 2.704,-0.312 z"
                            id="oct" aria-label="oct"
                            style="font-size: 52px; font-family: Brown-Regular, Brown; letter-spacing: -1.19036px; fill: rgb(28, 28, 28);">
                          </path>
                          <path
                            d="M 116.204,36.764 V 39 H 111.42 V 2.08 h 4.94 v 14.612 q 3.172,-2.652 7.488,-2.652 3.328,0 5.98,1.56 2.86,1.664 4.576,4.628 1.716,2.964 1.716,6.552 0,3.588 -1.716,6.552 -1.664,2.912 -4.524,4.576 -2.704,1.612 -6.136,1.612 -4.472,0 -7.54,-2.756 z m 0.156,-14.56 v 9.152 q 2.6,3.484 6.708,3.484 3.484,0 5.772,-2.34 2.34,-2.392 2.34,-5.72 0,-3.328 -2.236,-5.668 -2.184,-2.392 -5.616,-2.392 -4.316,0 -6.968,3.484 z m 39.36962,-8.008 -0.572,4.732 q -0.78,-0.208 -1.924,-0.208 -1.872,0 -3.744,1.196 -1.82,1.144 -2.86,2.912 V 39 h -4.94 V 14.56 h 4.784 v 2.808 q 0.988,-1.404 2.912,-2.34 1.924,-0.988 4.42,-0.988 1.04,0 1.924,0.156 z m 25.27752,13.624 h -18.824 q 0.208,3.12 2.444,5.252 2.288,2.132 5.46,2.132 4.004,0 7.02,-3.328 l 3.224,3.068 q -1.508,1.976 -4.16,3.276 -2.652,1.3 -6.136,1.3 -5.356,0 -8.996,-3.64 -3.64,-3.64 -3.64,-9.1 0,-5.512 3.328,-9.1 3.38,-3.64 8.58,-3.64 5.096,0 8.424,3.64 3.328,3.64 3.328,9.1 0,0.572 -0.052,1.04 z m -11.544,-9.464 q -2.392,0 -4.316,1.508 -1.924,1.456 -2.548,3.796 h 13.312 q -0.52,-2.288 -2.392,-3.796 -1.82,-1.508 -4.056,-1.508 z"
                            id="bre" aria-label="bre"
                            style="font-size: 52px; font-family: Brown-Regular, Brown; letter-spacing: -1.19036px; fill: rgb(28, 28, 28);">
                          </path>
                          <use id="Oval-Copy" stroke="url(#linearGradient-1)" mask="url(#mask-3)" stroke-width="8"
                            stroke-linejoin="round" stroke-dasharray="6,2.6" xlink:href="#path-2"></use>
                        </g>
                      </g>
                    </g>
                    <!-- <metadata id="metadata4">
                      <rdf:RDF>
                        <cc:Work rdf:about="">
                          <dc:title>FC431F3A-3ECC-47A3-B2B7-21B8B0702AD2</dc:title>
                        </cc:Work>
                      </rdf:RDF>
                    </metadata> -->
                  </svg>
                  </a>
                  <div 
                    ref='octobreNav' class="hide w-full lg:flex mr-auto grow justify-center" id="octobreNav">
                        <div class="flex list-reset pl-0 mb-0 content-center flex-col lg:flex-row ">
                            <a href="/#about"  class="lg:h-fit py-2 px-4 no-underline">À propos</a>
                            <a href="/#case-studies"  class="lg:h-fit py-2 px-4 no-underline">Cas Clients</a>
                            <a href="/#team"  class="lg:h-fit py-2 px-4 no-underline">L'équipe</a>
                            <a href="/expertise"  class="lg:h-fit py-2 px-4 no-underline">Notre expertise</a>
                            <a
                            href="/#contact" 
                            :onclick="calendlyonClick"
                            class="py-2 px-4 no-underline lg:hidden"><span>Prendre RDV</span></a>
                        </div>
                    </div>
                </div>

              </div>
            <!-- <div class="flex-grow items-center hidden lg:inline" > -->
            <div class="flex">
                <button type="button" 
                    :onclick="calendlyonClick"
                    class="rdvbutton hidden lg:inline-block ml-4 desktop-rdv-button align-middle text-center select-none border font-normal whitespace-no-wrap py-2 px-3 leading-normal no-underline btn-primary">
                    <span>Prendre RDV</span>
                </button>
            </div>
            <span 
                :onclick="calendlyonClick"
                class="mt-3 w-[26px] lg:hidden mobile-rdv-button">
              <svg 
                  ref="contactIcon"
                  class="show"
                width="26px" height="26px" viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>DD7DBDB6-6E52-46DC-AF78-2E04DBF7FAE1</title>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="MOBILE" transform="translate(-364, -31)" fill="#000000" fill-rule="nonzero">
                    <g id="messenger" transform="translate(364, 31)">
                      <path
                        d="M14.6245426,12.9992632 C14.6245426,13.896314 13.8965133,14.6243553 12.9994772,14.6243553 C12.1024412,14.6243553 11.3744119,13.896314 11.3744119,12.9992632 C11.3744119,12.1022123 12.1024412,11.3741711 12.9994772,11.3741711 C13.8965133,11.3741711 14.6245426,12.1022123 14.6245426,12.9992632 Z M18.4163617,11.3741711 C17.5193257,11.3741711 16.7912964,12.1022123 16.7912964,12.9992632 C16.7912964,13.896314 17.5193257,14.6243553 18.4163617,14.6243553 C19.3133978,14.6243553 20.0414271,13.896314 20.0414271,12.9992632 C20.0414271,12.1022123 19.3133978,11.3741711 18.4163617,11.3741711 Z M7.58259277,11.3741711 C6.6855567,11.3741711 5.95752743,12.1022123 5.95752743,12.9992632 C5.95752743,13.896314 6.6855567,14.6243553 7.58259277,14.6243553 C8.47962884,14.6243553 9.20765811,13.896314 9.20765811,12.9992632 C9.20765811,12.1022123 8.47962884,11.3741711 7.58259277,11.3741711 Z M26,13.3676174 L26,20.5830263 C26,23.5699456 23.5699856,26 20.5831155,26 L14.1727744,26 C6.58805278,26 0.508141639,20.8083724 0.0314558051,13.9244823 C-0.229638027,10.1586022 1.14408388,6.47289328 3.80052403,3.81315921 C6.45696417,1.15342513 10.1426124,-0.224652972 13.9051803,0.0299447904 C20.6871197,0.490387553 26,6.34938628 26,13.3687008 L26,13.3676174 Z M23.8332462,13.3676174 C23.8332462,7.48370057 19.408735,2.57483902 13.7589245,2.19131729 C13.5108311,2.17398297 13.2627378,2.16639921 13.0157279,2.16639921 C10.1382789,2.16639921 7.37241765,3.30179689 5.33350233,5.34399597 C3.11907996,7.5606216 1.97395058,10.6342125 2.19279271,13.7749738 C2.59689229,19.6036375 7.63567824,23.8342939 14.1738578,23.8342939 L20.5841989,23.8342939 C22.3761043,23.8342939 23.8343296,22.3760446 23.8343296,20.5841097 L23.8343296,13.3687008 L23.8332462,13.3676174 Z"
                        id="Shape"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
          <!-- </div> -->
        </nav>
        <div 
            v-if="false"
            class="lg:hidden mobile-logo-text transition-all duration-500 ease-custom"><span>Partenaire de la transformation digitale des PME et ETI</span></div>
      </header>
    </div>
    <div class="calendly-octobre">
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const octobreNav = ref<HTMLElement>()
const contactIcon = ref()
const isMenuExpanded = ref(false)
const toggleNav = () => {
    isMenuExpanded.value = !isMenuExpanded.value
    if (octobreNav.value != null) {
      octobreNav.value.classList.toggle('hide')
      octobreNav.value.classList.toggle('show')
    }
    contactIcon.value.classList.toggle('hide')
    contactIcon.value.classList.toggle('show')
}

let calendlyPageSettings = JSON.stringify({
                backgroundColor: 'F4F0EE',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '3a1b05', //'1C1C1C',
                textColor: '5C5148'
            })

let calendlyonClick = `Calendly.initPopupWidget({url: 'https://calendly.com/octobre-conseil/30min',pageSettings: ${calendlyPageSettings}});return false;`

</script>

<style scoped>
a {
  @apply text-[15px] font-bold tracking-[0] text-center uppercase lg:w-max w-full justify-center;
  font-family: Brown Regular;
}
.rdvbutton {
  @apply w-max bg-[#1c1c1c] text-white px-[2em];
}

.hide {
    @apply -translate-y-1/2 h-0 scale-y-0 lg:scale-y-100 opacity-0 lg:opacity-100 lg:-translate-y-4 transform transition-all duration-500 ease-custom;
}
.show {
    @apply translate-y-0 scale-y-100 opacity-100 transform transition-all duration-500 ease-custom;
}
.ease-custom {
  transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
}

.mobile-logo-text {
    @apply text-[#686868] text-[0.7em] tracking-[0] text-center;
  font-family: Brown Regular;
}
</style>