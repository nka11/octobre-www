const CaseStudies = () => {
    return (
        <section className="container-md case_studies octobre_content_box_white" typeof="schema:Organization" resource=".">
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
            <div className="case_study row justify-content-center" property="schema:review" typeof="schema:Review" resource="#review-bramding">
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
    );
  }
  export default CaseStudies;