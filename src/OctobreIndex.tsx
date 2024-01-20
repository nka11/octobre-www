import './App.css'
import './scss/octobre.scss'
import OctobreHeaderNav from './components/molecules/OctobreHeaderNav';
import OctobreIntro from './components/homePage/OctobreIntro';
import ExpertiseSection from './components/homePage/ExpertiseSection';
import CaseStudies from './components/homePage/CaseStudies';
import OurTeam from './components/homePage/OurTeam';
import OctobreFooter from './components/OctobreFooter';
import ContactForm from './components/ContactForm';

import CookieConsent from "react-cookie-consent";
import AboutUs from './components/homePage/AboutUs';

export function OctobreIndex() {
    return (
        <>
            <OctobreHeaderNav />
            <main style={{"marginTop":"7em"}}>
                <h1 style={{ "display": "none" }}>Octobre Conseil</h1>

                <OctobreIntro />
                <ExpertiseSection/>       
                <AboutUs/>
                <CaseStudies />

                <section>
                    <div className="row5">
                        <div className="col octobre_deepdark_desc">
                            Ils nous font confiance !
                        </div>
                        <div className="container-fluid partners">
                            <img src="./assets/partners-logo/Arconic_logo_(horizontal).svg" alt="Logo Arconic" />
                            <img src="./assets/partners-logo/chauvin-arnoux-group-vector-logo.svg" alt="Logo Chauvin Arnoux" />
                            <img src="./assets/partners-logo/CORNORM_LOGO-ozlyaie70glwwn6uuajshil9pwtvukr6c3ifyqa156.svg" alt="Logo CorNorm" />
                            <img src="./assets/partners-logo/Logo_Hermès.svg" alt="Logo Hermes"/>
                            <img src="./assets/partners-logo/evitech-logo.png" alt="Logo Evitech"/>
                        </div>
                    </div>
                </section>
                <OurTeam />
                <section 
                    style={{display: "none"}} 
                    className="container-lg contact-us">
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
