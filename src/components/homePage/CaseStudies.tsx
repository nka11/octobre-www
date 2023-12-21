
const CaseStudies = () => {
    return (
        <section className="container-md case_studies octobre_content_box_white"  typeof="schema:Organization" resource=".">
            <div className="row">
                <div className="col">
                    <h2 className="octobre_lightgray_title">
                        <a id="case-studies" href="#case-studies">
                            CAS CLIENTS
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
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4 spe-col">
                    <div className="card case-study-large-card h-100 case-1 d-flex flex-column">
                        <div className="card-body mt-auto">
                            <div className="stats" property="schema:reviewBody">
                                <div className="card-title">PLUS DE</div>
                                <strong className="card-text-number">80%</strong>
                                <div className="card-text">des utilisateurs estiment que les évolutions ont un impact positif sur leur efficacité.</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-lg-4 spe-col">
                    <div className="card case-study-small-card h-100 case-1">
                        <div property="schema:reviewBody" className="card-body">
                            <div className="card-title" property="schema:itemReviewed" typeof="schema:Thing" resource="#conformite">
                                <span property="schema:name">Digitalisation de l'operationnel</span>
                            </div>
                            <div className="auteur" property="schema:author" typeof="schema:Person">
                                <div className="photo-auteur">
                                <img src="/assets/photos/profil-pic.png" />
                                </div>
                                <div className="infos-auteur" property="schema:name">
                                    <div id="new" className='card-text' property="schema:givenName">Eric</div>
                                    <div id="new" className='card-text' property="schema:jobTitle">Directeur des opérations</div>
                                </div>
                            </div>
                            <div id="avis">
                                <div id='title-avis' className="card-title"  property="schema:memberOf" typeof="schema:Organization">
                                    <span property="schema:name">PME dans le domaine de la logistique</span>
                                </div>
                                <div id='body-avis' className="card-text" property="schema:reviewBody">
                                    "Octobre nous a aidés à mettre en oeuvre un nouvel
                                    <span property="schema:keywords"> outil de gestion "ERP" </span> 
                                    en s'appuyant sur notre système existant, et l'a configuré de sorte qu'il reponde à nos besoins et nos 
                                    <span property="schema:keywords"> processus métiers."</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="case_study row justify-content-center" property="schema:review" typeof="schema:Review" resource="#review-devops">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4 mt-lg-4 spe-col">
                    <div className="card case-study-large-card h-100 case-2 d-flex flex-column">
                        <div className="card-body mt-auto align-self-end">
                            <div className="stats" property="schema:reviewBody">
                                <div className="card-title">AMÉLIORATION DE</div>
                                <strong className="card-text-number">20%</strong>
                                <div className="card-text">de satisfaction client en augmentant la fréquence de mise à jour de notre produit</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-lg-4 mt-4 spe-col">
                    <div className="card case-study-small-card h-100 case-2">
                        <div property="schema:reviewBody" className="card-body">
                            <div className="card-title" property="schema:itemReviewed" typeof="schema:Thing" resource="#devops">
                                <span property="schema:name">USINE LOGICIELLE</span>
                            </div>
                            <div className="auteur" property="schema:author" typeof="schema:Person">
                                <div className="photo-auteur">
                                <img src="/assets/photos/profil-pic.png" />
                                </div>
                                <div className="infos-auteur" property="schema:name">
                                    <div id="new" className='card-text' property="schema:givenName">Robert</div>
                                    <div id="new" className='card-text' property="schema:jobTitle">Directeur général</div>
                                </div>
                            </div>
                            <div id="avis">
                                <div id='title-avis' className="card-title" property="schema:memberOf" typeof="schema:Organization">
                                    <span property="schema:name">Editeur BtB de solutions métiers</span>
                                </div>
                                <div id='body-avis' className="card-text" property="schema:reviewBody">"La pratique <span property="schema:keywords">agile</span> et l'expertise <span property="schema:keywords">Devops</span> d'Octobre ont permis d'accélérer l'évolution des fonctionnalités de notre produit et d'apporter des réponses adaptées aux demandes des clients."</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="case_study row justify-content-center" property="schema:review" typeof="schema:Review" resource="#review-conformite">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4 mt-lg-4 spe-col">
                    <div className="card case-study-large-card h-100 case-3 d-flex flex-column">
                        <div className="card-body mt-auto">
                            <div className="stats" property="schema:reviewBody">
                                <div className="card-title">UNE ÉLIGIBILITÉ SUR</div>
                                <strong className="card-text-number">+ 30%</strong>
                                <div className="card-text">d'appels d'offres en moins d'un an.</div>
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-lg-4 mt-4 spe-col">
                    <div className="card case-study-small-card h-100 case-3">
                        <div className="card-body">
                            <div className="card-title"  property="schema:itemReviewed" typeof="schema:Thing" resource="#conformite">
                                <span property="schema:name">PERFORMANCE SÉCURISÉE / CYBER-HYGIÈNE</span>
                            </div>
                            <div className="auteur" property="schema:author" typeof="schema:Person">
                                <div className="photo-auteur">
                                <img src="/assets/photos/profil-pic.png" />
                                </div>
                                <div className="infos-auteur" property="schema:name">
                                    <div id="new" className='card-text'>
                                        <span property="schema:givenName">Pascal</span>
                                    </div>
                                    <div id="new" className='card-text'>
                                        <span property="schema:jobTitle">Directeur commercial</span>
                                    </div>
                                </div>
                            </div>
                            <div id="avis">
                                <div id='title-avis' className="card-title" property="schema:memberOf" typeof="schema:Organization">
                                    <span property="schema:name">PME dans le domaine aéronautique (BtB)</span>
                                </div>
                                <div id='body-avis' className="card-text" property="schema:reviewBody">"Octobre a réalisé un <span property="schema:keywords">audit</span> de notre <span property="schema:keywords">système d'information</span> et nous a accompagnés pour obtenir les <span property="schema:keywords">certifications</span> de <span property="schema:keywords">conformité</span> exigées par nos partenaires."</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="case_study row justify-content-center" property="schema:review" typeof="schema:Review" resource="#review-bramding">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4 mt-lg-4 spe-col">
                    <div className="card case-study-large-card h-100 case-4 d-flex flex-column">
                        <div className="card-body mt-auto align-self-end">
                            <div className="stats" property="schema:reviewBody">
                                <div className="card-title" property="schema:keywords">ACQUISITION DE</div>
                                <strong className="card-text-number">40%</strong>
                                <div className="card-text"> sur les fonctions supports et commerciales et une réduction significative du Turn Over.</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-lg-4 mt-4 spe-col">
                    <div className="card case-study-small-card h-100 case-4">
                        <div className="card-body" property="schema:itemReviewed" typeof="schema:Thing" resource="#bramding">
                            <div className="card-title" property="schema:name">MARQUE EMPLOYEUR 3.0</div>
                            <div className="auteur" property="schema:author" typeof="schema:Person">
                                <div className="photo-auteur">
                                <img src="/assets/photos/profil-pic.png" />
                                </div>
                                <div className="infos-auteur" property="schema:name">
                                    <div id="new" className='card-text' property="schema:givenName">Xavier</div>
                                    <div id="new" className='card-text' property="schema:jobTitle">Directeur des ressources humaines</div>
                                </div>
                            </div>
                            <div id="avis" property="schema:memberOf" typeof="schema:Organization">
                                <div id='title-avis' className="card-title" property="schema:name">ETI dans le domaine de la logistique</div>
                                <div id='body-avis' className="card-text" property="schema:reviewBody">"L'amélioration de notre CRM et de notre processus de recrutement nous a permis d'améliorer l'expérience candidats."</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="row octobre_row text-center">
                <div className="col">
                    <button className="octobre_black" style={{display: 'none'}}>Voir + d’étude de cas</button>
                </div>
            </div>
        </section>
    );
  }
  export default CaseStudies;