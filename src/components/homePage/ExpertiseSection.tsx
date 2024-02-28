
import { useState } from "react";
import ArchiDesc from "../molecules/ArchiDesc";
import ExpertiseDetails from "../molecules/ExpertiseDetails";
import ProjectMake from "../molecules/ProjectMake";
import SuiviProd from "../molecules/SuiviProd";
import RHDesc from "../molecules/RHDesc";
const ExpertiseSection = () => {
    const [isExpertiseDetailVisible,setExpertideDetailsVisible] = useState(false)
    const [expertiseDetailsTitle,setExpertiseDetailsTitle]  = useState("")
    const [expertiseDetailsContent,setExpertiseDetailsContent] = useState(<></>)
    const showArchi = () => {
      setExpertideDetailsVisible(true)
      setExpertiseDetailsTitle("Architecture de Solution Digitale")
      setExpertiseDetailsContent(<ArchiDesc></ArchiDesc>)
    }
    const showProjectMake = () => {
      setExpertideDetailsVisible(true)
      setExpertiseDetailsTitle("Réalisation de Projets")
      setExpertiseDetailsContent(<ProjectMake></ProjectMake>)
    }
    const showSuiviProd = () => {
      setExpertideDetailsVisible(true)
      setExpertiseDetailsTitle("Suivi de Production")
      setExpertiseDetailsContent(<SuiviProd></SuiviProd>)
    }
    const showRHDesc = () => {
      setExpertideDetailsVisible(true)
      setExpertiseDetailsTitle("Recrutement / Stratégie RH")
      setExpertiseDetailsContent(<RHDesc></RHDesc>)
    }
    const hideDetails = () => {
      setExpertideDetailsVisible(false)
    }
    return (
        <>
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
                    <p className="octobre_deepdark_desc">À la croisée des chemins entre l'IT et les Métiers</p>
                </div>
            </div>
            <div className="container mt-4 expertise-presentation">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 mb-4">
                      <div onClick={showArchi} className="card expertise h-100">
                        <img src="./assets/pictos/IconArchi.svg" className="card-img-top" alt="Image 1"/>
                        <div className="card-body">
                          <p className="card-text" id="break" property="schema:description">Architecture de Solution Digitale</p>
                        </div>
                      </div>
                    </div>
              
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div onClick={showProjectMake} className="card expertise h-100">
                      <img src="./assets/pictos/IconProjet3.svg" className="card-img-top" alt="Image 1"/>
                      <div className="card-body">
                        <p className="card-text" id="break" property="schema:description">Réalisation de Projets</p>
                      </div>
                    </div>
                  </div>
              
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div onClick={showSuiviProd} className="card expertise h-100">
                      <img src="./assets//pictos/IconMonitoring.svg" className="card-img-top" alt="Image 1"/>
                      <div className="card-body">
                        <p className="card-text" property="schema:description">Suivi de Production</p>
                      </div>
                    </div>
                  </div>
              
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div onClick={showRHDesc} className="card expertise h-100">
                      <img src="./assets//pictos/IconRecruit.svg" className="card-img-top" alt="Image 1"/>
                      <div className="card-body">
                        <p className="card-text" property="schema:description">Recrutement / Stratégie RH</p>
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
        <ExpertiseDetails title={expertiseDetailsTitle} hide={hideDetails} visible={isExpertiseDetailVisible}>{expertiseDetailsContent}</ExpertiseDetails>
        </>
    );
  }
  export default ExpertiseSection;