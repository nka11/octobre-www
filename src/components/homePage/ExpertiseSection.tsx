
const ExpertiseSection = () => {
    return (
        <section className="container-fluid octobre_content_box_brown domaine-expertise" typeof="schema:Organization" resource=".">
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
                    <button className="octobre_black" style={{"display": "none"}}>Découvrez toutes nos expertises</button>
                </div>
            </div>
        </section>
    );
  }
  export default ExpertiseSection;