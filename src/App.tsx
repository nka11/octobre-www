import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header id="HEADER_LINE" className="container-xl text-center">
            <div className="row">
                <div className="col">            
                </div>
                <div className="col">
                    {/* <svg width="154px" height="49px" viewBox="0 0 154 49" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <linearGradient x1="14.1851327%" y1="85.4110516%" x2="100%" y2="18.3966546%" id="linearGradient-1">
                                <stop stop-color="#B5530C" offset="0%"></stop>
                                <stop stop-color="#EB9D34" offset="49.261484%"></stop>
                                <stop stop-color="#F72900" offset="100%"></stop>
                            </linearGradient>
                            <path d="M78,40 C84.0751322,40 89,35.0751322 89,29 C89,22.9248678 84.0751322,18 78,18 C71.9248678,18 67,22.9248678 67,29 C67,35.0751322 71.9248678,40 78,40 Z" id="path-2"></path>
                            <mask id="mask-3" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="22" height="22" fill="white">
                                <use xlink:href="#path-2"></use>
                            </mask>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="MOBILE" transform="translate(-130, -25)">
                                <g id="Group-5" transform="translate(130, 25)">
                                    <text id="oct" className="logo_text" font-size="44" font-weight="normal" line-spacing="49" letter-spacing="-1.00722892" fill="#1C1C1C">
                                        <tspan x="0" y="40">oct</tspan>
                                    </text>
                                    <text id="bre"  className="logo_text" font-size="44" font-weight="normal" line-spacing="49" letter-spacing="-1.00722892" fill="#1C1C1C">
                                        <tspan x="90" y="40">bre</tspan>
                                    </text>
                                    <use id="Oval-Copy" stroke="url(#linearGradient-1)" mask="url(#mask-3)" stroke-width="8" stroke-linejoin="round" stroke-dasharray="6,2.6" xlink:href="#path-2"></use>
                                </g>
                            </g>
                        </g>
                    </svg> */}
                    <div className="logo_text">Conseil</div>
                </div>
                <div className="col">
                  
                </div>
              </div>
        </header>
        <main>
            <h1 style={{"display":"none"}}>Octobre Conseil</h1>
            
            <section className="first_section">
                <div className="split">
                    <div className="image-back container-sm">
                        <div className="text-over" typeof="schema:Organization" resource=".">
                            <p property="schema:description">
                                Construisons ensemble des solutions digitales sur-mesure
                            </p>
                            <img src="./assets/pictos/arrow.svg"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-sm octobre_content_box_white" typeof="schema:Organization" resource=".">
                <div className="row">
                    <div className="col">
                        <h2 className="octobre_lightgray_title">
                            <a id="expertises" href="#expertises">
                                DOMAINES D’EXPERTISE
                            </a>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col" property="schema:description">
                        <p className="octobre_deepdark_desc">A la croisée des chemins entre l'IT et les Métiers</p>
                    </div>
                </div>
                <div className="container mt-4 expertise-presentation">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card expertise h-100">
                          <img src="./assets/pictos/code-daffichage.svg" className="card-img-top" alt="Image 1"/>
                          <div className="card-body">
                            <p className="card-text" id="break" property="schema:description">Valoriser les actifs digitaux</p>
                          </div>
                        </div>
                      </div>
                  
                      <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card expertise h-100">
                          <img src="./assets/pictos/afficher-la-fleche-vers-le-bas.svg" className="card-img-top" alt="Image 1"/>
                          <div className="card-body">
                            <p className="card-text" id="break" property="schema:description">Déjouer les <span property="schema:keywords">cyber-attaques</span></p>
                          </div>
                        </div>
                      </div>
                  
                      <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card expertise h-100">
                          <img src="./assets//pictos/cloud-upload-alt.svg" className="card-img-top" alt="Image 1"/>
                          <div className="card-body">
                            <p className="card-text" property="schema:description">DataBoost:  La data au service de la <span property="schema:keywords">force de vente</span></p>
                          </div>
                        </div>
                      </div>
                  
                      <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card expertise h-100">
                          <img src="./assets//pictos/enveloppes.svg" className="card-img-top" alt="Image 1"/>
                          <div className="card-body">
                            <p className="card-text" property="schema:description">Passer à une <span property="schema:keywords">Stratégie Marque Employeur 3.0</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                <div className="row button_row text-center">
                    <div className="col">
                        <button className="octobre_black">Découvrez toutes nos expertises</button>
                    </div>
                </div>
            </section>
    
            <section>
                <div className="about-us" typeof="schema:Organization" resource=".">
                    <h2 className="quefaisons_label"><a id="about" href="#about">QUE FAISONS-NOUS ?</a></h2>
                    <p className="quefaisons_description" property="schema:description">
                        Nous libérons la puissance du digital au service de votre business
                    </p>
                    <div className="buttons">
                        <button>Prendre RDV</button>
                        <button id="contact-button">Contact</button>
                    </div>
                </div>
            </section>
            <section className="container-md case_studies octobre_content_box_white"  typeof="schema:Organization" resource=".">
                <div className="row">
                    <div className="col">
                        <h2 className="octobre_lightgray_title">
                            <a id="case-studies" href="#case-studies">
                                ETUDES DE CAS
                            </a>
                        </h2>
                    </div>
                </div>
                <div className="row case_studies_intro">
                    <div className="col octobre_deepdark_desc">
                        Nos clients témoignent
                    </div>
                </div>
                <div className="case_study row justify-content-center" property="schema:review" typeof="schema:Review" resource="#review-conformite">
                    <div className="col-lg-8 col-md-7 col-sm-12 mb-4">
                        <div className="card case-study-large-card h-100 case-1">
                            <div className="card-body">
                                <h3 className="card-title" property="schema:itemReviewed" typeof="schema:Thing" resource="#conformite">
                                    <span property="schema:name">
                                        Digitalisation de l'operationnel
                                    </span>
                                </h3>
                                <div property="schema:author" typeof="schema:Person">
                                    <div property="schema:name">
                                        <span property="schema:givenName">
                                            Eric
                                        </span>, 
                                        <span property="schema:jobTitle">
                                            Directeur des opérations
                                        </span>
                                    </div>,
                                    <div property="schema:memberOf" typeof="schema:Organization">
                                        <span property="schema:name">
                                            PME  dans le domaine de la logistique
                                        </span>
                                    </div>
                                </div>
                                <blockquote className="card-text" property="schema:reviewBody">
                                    Octobre nous a aidés à mettre en oeuvre un nouvel
                                    <span property="schema:keywords">outil de gestion "ERP"</span> en s'appuyant sur notre système existant,
                                    et l'a configuré de sorte qu'il reponde à nos besoins et nos <span property="schema:keywords">processus metiers</span>.
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-12 mb-4">
                        <div className="card case-study-small-card h-100 case-1">
                            <div property="schema:reviewBody" className="card-body">
                                {/* <!-- 80% des utilisateurs estiment que les évolutions ont eu un impact positif sur leur efficacité. --> */}
                                <div className="card-title">Enquete interne:</div>
                                <strong className="card-text">80%</strong>
                                <div className="card-text">des utilisateurs sont convaincus par les améliorations apportées.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="case_study row justify-content-center" property="schema:review" typeof="schema:Review" resource="#review-conformite">
                    <div className="col-lg-8 col-md-7 col-sm-12 mb-4">
                        <div className="card case-study-large-card h-100 case-1">
                            <div className="card-body">
                                <h3 className="card-title" property="schema:itemReviewed" typeof="schema:Thing" resource="#conformite">
                                    <span property="schema:name">
                                        Performance Sécurisée / Cyber-Hygiène
                                    </span>
                                </h3>
                                <div property="schema:author" typeof="schema:Person">
                                    <div property="schema:name">
                                        <span property="schema:givenName">
                                            Pascal
                                        </span>, 
                                        <span property="schema:jobTitle">
                                            Directeur commercial
                                        </span>
                                    </div>,
                                    <div property="schema:memberOf" typeof="schema:Organization">
                                        <span property="schema:name">PME dans le domaine aéronautique (BtB)</span>
                                    </div>
                                </div>
                                <blockquote className="card-text" property="schema:reviewBody">
                                    Octobre a réalisé un <span property="schema:keywords">audit</span> de notre <span property="schema:keywords">système d'information</span> et nous a accompagné pour obtenir les <span property="schema:keywords">certifications</span> de <span property="schema:keywords">conformité</span> exigées par nos partenaires.
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-12 mb-4">
                        <div className="card case-study-small-card h-100 case-1">
                            <div property="schema:reviewBody" className="card-body">
                                <div className="card-title">Une éligibilité sur</div>
                                <strong className="card-text">+30%</strong>
                                <div className="card-text">d'appels d'offres en moins d'un an.</div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="case_study row justify-content-center" property="schema:review" typeof="schema:Review" resource="#review-devops">
                    <div className="col-lg-8 col-md-7 col-sm-12 mb-4">
                        <div className="card case-study-large-card h-100 case-2">
                            <div className="card-body">
                                <h3 className="card-title" property="schema:itemReviewed" typeof="schema:Thing" resource="#devops">
                                    <span property="schema:name">
                                        Usine logicelle
                                    </span>
                                </h3>
                                <div property="schema:author" typeof="schema:Person">
                                    <div property="schema:name">
                                        <span property="schema:givenName">
                                            Robert
                                        </span>, 
                                        <span property="schema:jobTitle">
                                            Directeur général
                                        </span>
                                    </div>,
                                    <div property="schema:memberOf" typeof="schema:Organization">
                                        <span property="schema:name">Editeur BtB de solutions métiers.</span>
                                    </div>
                                </div>
                                <blockquote className="card-text" property="schema:reviewBody">
                                    La pratique <span property="schema:keywords">agile</span> et l'expertise
                                    <span property="schema:keywords">Devops</span>
                                    d'Octobre nous ont permis d'accélérer l'évolution des fonctionnalités de notre
                                    <span property="schema:keywords" content="projet"></span>
                                    produit et d'apporter des réponses plus adaptées aux demandes des clients.
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-12 mb-4">
                        <div className="card case-study-small-card h-100 case-2">
                            <div className="card-body" property="schema:reviewBody">
                                <div className="card-title"><span property="schema:keywords">Amélioration</span> de</div>
                                <strong className="card-text">+ 20 %</strong>
                                <div className="card-text">de satisfaction clients.</div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="case_study row justify-content-center"  property="schema:review" typeof="schema:Review" resource="#review-bramding">
                    <div className="col-lg-8 col-md-7 col-sm-12 mb-4">
                        <div className="card case-study-large-card h-100 case-3">
                            <div className="card-body">
                                <h3 className="card-title" property="schema:itemReviewed" typeof="schema:Thing" resource="#bramding">
                                    <span property="schema:name">
                                        Marque employeur 3.0
                                    </span>
                                </h3>
                                <div property="schema:author" typeof="schema:Person">
                                    <div property="schema:name">
                                        <span property="schema:givenName">
                                            Xavier
                                        </span>, 
                                        <span property="schema:jobTitle">
                                            DRH
                                        </span>
                                    </div>,
                                    <div property="schema:memberOf" typeof="schema:Organization">
                                        <span property="schema:name">ETI dans le domaine de la logistique</span>
                                    </div>
                                </div>
                                <blockquote className="card-text" property="schema:reviewBody">
                                    Notre nouvelle campagne de communication a été intégrée a notre CRM
                                    ce qui a fortement impacté notre
                                    <span property="schema:keywords">processus de recrutement</span> 
                                    et notre <span property="schema:keywords">expérience candidats</span>.
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-12 mb-4">
                        <div className="card case-study-small-card h-100 case-3">
                            <div className="card-body" property="schema:reviewBody">
                                <div className="card-title"><span property="schema:keywords">Acquisition</span> de</div>
                                <strong className="card-text">+40%</strong>
                                <div className="card-text">sur les fonctions supports et commerciales.</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row octobre_row text-center">
                    <div className="col">
                        <button className="octobre_black">Voir + d’étude de cas</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="row5">
                    <div className="col octobre_deepdark_desc">
                        Nos clients
                    </div>
                    <div className=" container-fluid partners">
                        <img src="./assets/partners-logo/Arconic_logo_(horizontal).svg" alt="Logo Arconic" />
                        <img src="./assets/partners-logo/chauvin-arnoux-group-vector-logo.svg" alt="Logo Chauvin Arnoux" />
                        <img src="./assets/partners-logo/CORNORM_LOGO-ozlyaie70glwwn6uuajshil9pwtvukr6c3ifyqa156.svg" alt="Logo CorNorm" />
                        <img src="./assets/partners-logo/Logo_Hermès.svg" alt="Logo Hermes"/>
                    </div>
                </div>
            </section>
            <section className="container-fluid our-team" typeof="schema:Organization" resource=".">
                <div className="row">
                    <h2 className="our-team-title">
                        <a id="team" href="#team">
                            Notre équipe
                        </a>
                    </h2>
                </div>
                <div className="row cards-container container-xl">
                    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                        <div className="card team-card h-100" property="schema:member" typeof="schema:Role">
                            <div className="card-body">
                                <div className="card-infos">
                                    <a id="#samuel.assoun" href="#"></a>
                                    <div className="avatar-name-role">
                                        <div property="schema:member" typeof="schema:Person" resource="#samuel.assoun">
                                            <img src="./assets/photos/profil-pic.png" className="avatar" alt="avatar" />
                                        </div>
                                        <div className="name-role">
                                            <div property="schema:member" typeof="schema:Person" resource="#samuel.assoun">
                                                <div className="person-name" property="schema:name">
                                                    <span property="schema:givenName">
                                                        Samuel
                                                    </span> 
                                                    <span property="schema:familyName">
                                                        Assoun
                                                    </span>
                                                </div>
                                                <div style={{"display":"none"}}>
                                                    <p property="schema:jobTitle">L'alchimiste</p>
                                                </div>
                                                <div style={{"display":"none"}}>
                                                    <p property="schema:description"></p>
                                                </div>
                                            </div>
                                            <div className="role-name" property="schema:roleName">Co-fondateur & Responsable des opérations</div>
                                        </div>
                                            <div style={{"display":"none"}}>
                                                <p property="schema:description"></p>
                                            </div>
                                    </div>
                                    <img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" className="icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6  mb-4">
                        <div className="card team-card h-100" property="schema:member" typeof="schema:Role">
                            <div className="card-body">
                                <div className="card-infos">
                                    <a id="#nicolas.karageuzian" href="#"></a>
                                    <div className="avatar-name-role">
                                        <div property="schema:member" typeof="schema:Person" resource="#nicolas.karageuzian">
                                            <img src="./assets/photos/profil-pic.png" className="avatar" alt="avatar" />
                                        </div>
                                        <div className="name-role">
                                            <div property="schema:member" typeof="schema:Person" resource="#nicolas.karageuzian">
                                                <div className="person-name" property="schema:name">
                                                    <span property="schema:givenName">
                                                        Nicolas
                                                    </span> 
                                                    <span property="schema:familyName">
                                                        Karageuzian
                                                    </span>
                                                </div>
                                                <div style={{"display":"none"}}>
                                                    <p property="schema:jobTitle">Digital Shaman</p>
                                                    <p property="schema:description">IAM & SSO Expert (SAML/OIDC - LDAP & Provider + client implementation)</p>
                                                    <p property="schema:description">Artisan du code</p>
                                                    <p property="schema:description">Specialiste en Informatique Générale</p>
                                                </div>
                                            </div>
                                            <div className="role-name" property="schema:roleName">Co-fondateur & Architecte Solution</div>
                                        </div>
                                        <div style={{"display":"none"}}>
                                            <p property="schema:description"></p>
                                        </div>
                                    </div>
                                    <img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" className="icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-6  mb-4">
                        <div className="card team-card h-100" property="schema:member" typeof="schema:Role">
                            <div className="card-body">
                                <div className="card-infos">
                                    <a id="#sylvain.zyssman" href="#"></a>
                                    <div className="avatar-name-role">
                                        <div property="schema:member" typeof="schema:Person" resource="#sylvain.zyssman">
                                            <img src="./assets/photos/profil-pic.png" className="avatar" alt="avatar" />
                                        </div>
                                        <div className="name-role">
                                            <div property="schema:member" typeof="schema:Person" resource="#sylvain.zyssman">
                                                <div className="person-name" property="schema:name">
                                                    <span property="schema:givenName">
                                                        Sylvain
                                                    </span> 
                                                    <span property="schema:familyName">
                                                        Zyssman
                                                    </span>
                                                </div>
                                                <div style={{"display":"none"}}>
                                                    <p property="schema:jobTitle">IA, machine learning & MLOps expert</p>
                                                    <p property="schema:description">Le mentor</p>
                                                </div>
                                            </div>
                                            <div className="role-name" property="schema:roleName">Data Strategy Officer</div>
                                        </div>
                                        <div style={{"display":"none"}}>
                                            <p property="schema:description"></p>
                                        </div>
                                    </div>
                                    <img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" className="icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="card team-card h-100" property="schema:member" typeof="schema:Role">
                                <div className="card-body">
                                    <div className='card-infos'>
                                        <a id="#remy.teboul" href="#"></a>
                                        <div className="avatar-name-role">
                                            <div  property="schema:member" typeof="schema:Person" resource="#remy.teboul">
                                                <img src="./assets/photos/profil-pic.png" className="avatar" alt="avatar" />
                                            </div>
                                            <div className="name-role">
                                                <div  property="schema:member" typeof="schema:Person" resource="#remy.teboul">
                                                    <div className="person-name" property="schema:name">
                                                        <span property="schema:givenName">
                                                            Remy
                                                        </span> 
                                                        <span property="schema:familyName">
                                                            Teboul
                                                        </span>
                                                    </div>
                                                    <div style={{"display":"none"}}>
                                                        <p property="schema:jobTitle">L'artiste</p>
                                                    </div>
                                                </div>
                                                <div className="role-name" property="schema:roleName">UX / UI Designer</div>
                                            </div>
                                            <div style={{"display":"none"}}>
                                                <p property="schema:description"></p>
                                            </div>
                                        </div>
                                        <img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" className="icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="card team-card h-100" property="schema:member" typeof="schema:Role">
                                <div className="card-body">
                                    <div className="card-infos">
                                        <a id="#celine.cherqui" href="#"></a>
                                        <div className="avatar-name-role">
                                            <div property="schema:member" typeof="schema:Person" resource="#celine.cherqui">
                                                <img src="./assets/photos/profil-pic.png" className="avatar" alt="avatar" />
                                            </div>
                                            <div className="name-role">
                                                <div property="schema:member" typeof="schema:Person" resource="#celine.cherqui">
                                                
                                                    <div className="person-name" property="schema:name">
                                                        <span property="schema:givenName">
                                                            Céline
                                                        </span> 
                                                        <span property="schema:familyName">
                                                            Cherqui
                                                        </span>
                                                    </div>
                                                    <div style={{"display":"none"}}>
                                                        <p property="schema:jobTitle">L'Attrape-talents</p>
                                                    </div>
                                                </div>
                                                <div className="role-name" property="schema:roleName">Responsable recrutement / marque employeur</div>
                                            </div>
                                            <div style={{"display":"none"}}>
                                                <p property="schema:description"></p>
                                            </div>
                                        </div>
                                        <img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" className="icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6  mb-4">
                            <div className="card team-card h-100" property="schema:member" typeof="schema:Role">
                                <div className="card-body">
                                    <div className="card-infos">
                                        <a id="#ethan.fajnkuchen" href="#"></a>
                                        <div className="avatar-name-role">
                                            <div property="schema:member" typeof="schema:Person" resource="#ethan.fajnkuchen">
                                                <img src="./assets/photos/profil-pic.png" className="avatar" alt="avatar" />
                                            </div>
                                            <div className="name-role">
                                                <div property="schema:member" typeof="schema:Person" resource="#ethan.fajnkuchen">
                                                    <div className="person-name" property="schema:name">
                                                        <span property="schema:givenName">
                                                            Ethan
                                                        </span> 
                                                        <span property="schema:familyName">
                                                            Fajnkuchen
                                                        </span>
                                                    </div>
                                                    <div style={{"display":"none"}}>
                                                        <p property="schema:jobTitle">Le prince des hackers / Petit scarabée</p>
                                                    </div>
                                                </div>
                                                <div className="role-name" property="schema:roleName">Ingénieur Logiciel</div>
                                            </div>
                                            <div style={{"display":"none"}}>
                                                <p property="schema:description"> </p>
                                            </div>
                                        </div>
                                        <img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" className="icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            <section className="container-lg contact-us">
                <div className="picture">
                    <img src="./assets/photos/contact-pic.png" />
                </div>
                <div className="form">
                    <h2 className="contact-us-title">
                        <a id="contact" href="#contact">
                            Contactez-nous
                        </a>
                    </h2>
                    <form>
                        <input placeholder="Nom" type="text" />
                        <input placeholder="Prénom" type="text" />
                        <input placeholder="Nom de l'entreprise" type="text" id="entreprise" />
                        <input placeholder="Email" type="email" />
                        <input placeholder="Téléphone" type="tel" />
                        <textarea placeholder="Votre message"></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </section>
        </main>
        <footer className="container-xl footer" typeof="schema:Organization" resource=".">
            <div className="logo">
                <img property="schema:logo" src="assets/Logo_octobre_conseil.svg"/>
            </div>
            <nav className="footer-container">
                <div className="footer-menu">
                    <div className="row">
                        <ul className="menu-1 col">
                            <li><a href="#about">A propos</a></li>
                            <li><a href="#expertises">Nos expertises</a></li>
                            <li><a href="#case-studies">Etudes de cas</a></li>
                            <li><a href="#team">L'Equipe</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <ul className="menu-2 col" style={{"display":"none"}}>
                            <li>Mentions Légales</li>
                            <li>Conditions générales</li>
                            <li>Cookies</li>
                            <li>RGPD</li>
                            <li>Licenses</li>
                        </ul>
                    </div>
                </div>
                <div className="transformation ">
                    <div className="row">
                        <div className="pic-td col">
                        <img src="./assets/photos/logo_TN.png" alt="pic_transition-digital" />
                        </div>
                        <div className="text-partenaire col">
                            <p property="schema:description">Partenaire de la transformation digitale des PME et ETI.</p>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="mail-rights">
                <div className="button-mail">
                    <button type="submit">
                        <svg width="18px" height="15px" viewBox="0 0 18 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>46239B28-9170-4840-BB7C-1AD42CB3A647</title>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Capture-d’écran-2023-11-22-à-16.31.05" transform="translate(-843, -5798)" fill="#000000" fill-rule="nonzero">
                                    <g id="Group-31" transform="translate(827, 5781)">
                                        <g id="envelopes" transform="translate(16, 17)">
                                            <path d="M14.1428571,0 L3.85714286,0 C1.72285714,0 0,1.675 0,3.75 L0,11.25 C0,13.325 1.72285714,15 3.85714286,15 L14.1428571,15 C16.2771429,15 18,13.325 18,11.25 L18,3.75 C18,1.675 16.2771429,0 14.1428571,0 Z M14.1428571,0.833333333 C14.9571429,0.833333333 15.7028571,1.15 16.2428571,1.66666667 L11.1257143,6.64166667 C9.95142857,7.78333333 8.05714286,7.78333333 6.88285714,6.64166667 L1.75714286,1.66666667 C2.29714286,1.15 3.04285714,0.833333333 3.85714286,0.833333333 L14.1428571,0.833333333 Z M17.1428571,11.25 C17.1428571,12.8583333 15.7971429,14.1666667 14.1428571,14.1666667 L3.85714286,14.1666667 C2.20285714,14.1666667 0.857142857,12.8583333 0.857142857,11.25 L0.857142857,3.75 C0.857142857,3.23333333 0.994285714,2.75833333 1.23428571,2.33333333 L6.27428571,7.23333333 C7.02857143,7.96666667 8.01428571,8.33333333 9,8.33333333 C9.98571429,8.33333333 10.9714286,7.96666667 11.7257143,7.23333333 L16.7657143,2.33333333 C17.0057143,2.75 17.1428571,3.23333333 17.1428571,3.75 L17.1428571,11.25 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span property="schema:email">conseil@octobre.tech</span></button>
                </div>
                <div className="rights">
                    <p>Tous droits réservés. <span property="schema:name">Octobre</span> 2023</p>
                </div>
            </div>
            
        </footer>
    </>
  )
}

export default App
