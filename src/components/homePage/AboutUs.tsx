import { Button } from "react-bootstrap";
import RDVButton from "../atoms/RDVButton";

const AboutUs = () => {
    return (<>
        <section>
            <a style={{"display":"block","paddingBottom":"5em"}} id="about" href="#about"></a>
            <div className="about-us" typeof="schema:Organization" resource=".">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 quefaisons_text mb-4">
                            <h2 className="quefaisons_label"><a href="#about">QUE FAISONS-NOUS ?</a></h2>
                            <p className="quefaisons_description" property="schema:description">
                                <span>Nous libérons</span> la puissance du digital au service de votre business
                            </p>
                            <div className="buttons">
                                <Button>
                                    <RDVButton>Prendre RDV</RDVButton>
                                </Button>
                                {/* <button id="contact-button">Contact</button> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 quefaisons_image mt-4">   
                            <img src="./assets/photos/Que-faisons-nous-illu.jpg" alt="quefaisonsnous_image" />   
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
};

export default AboutUs ;