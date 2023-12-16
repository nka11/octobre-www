import './App.css'
import './scss/octobre.scss'
import OctobreHeader from './components/OctobreHeader';
import FirstSection from './components/homePage/FirstSection';
import ExpertiseSection from './components/homePage/ExpertiseSection';
import CaseStudies from './components/homePage/CaseStudies';
import OurTeam from './components/homePage/OurTeam';
import OctobreFooter from './components/OctobreFooter';
import ContactForm from './components/ContactForm';

import CookieConsent from "react-cookie-consent";

export function OctobreIndex() {

    return (
        <>
            <OctobreHeader />
            <main>
                <h1 style={{ "display": "none" }}>Octobre Conseil</h1>

                <FirstSection />
                <ExpertiseSection/>

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

                <CaseStudies />

                <section>
                    <div className="row5">
                        <div className="col octobre_deepdark_desc">
                            Nos clients
                        </div>
                        <div className=" container-fluid partners">
                            <img src="./assets/partners-logo/Arconic_logo_(horizontal).svg" alt="Logo Arconic" />
                            <img src="./assets/partners-logo/chauvin-arnoux-group-vector-logo.svg" alt="Logo Chauvin Arnoux" />
                            <img src="./assets/partners-logo/CORNORM_LOGO-ozlyaie70glwwn6uuajshil9pwtvukr6c3ifyqa156.svg" alt="Logo CorNorm" />
                            <img src="./assets/partners-logo/Logo_Hermès.svg" alt="Logo Hermes" />
                        </div>
                    </div>
                </section>
                <OurTeam />
                <section className="container-lg contact-us">
                    <div className="picture">
                        <img src="./assets/photos/contact-pic.png" />
                    </div>
                    <ContactForm />
                </section>
            </main>
            <OctobreFooter />
            <CookieConsent location="bottom"
                buttonText="J'ai compris"
                cookieName="CookieConsentCookie_recursive"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
                >
                Notre site utilise des cookies système pour son propre fonctionnement.{" "}
                <span style={{ fontSize: "10px" }}></span>
            </CookieConsent>
        </>
    );
}

export default OctobreIndex
