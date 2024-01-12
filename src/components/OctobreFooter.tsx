import ContactSvgLabel from './contact.svg'

const OctobreFooter = () => {
    return (
        <footer className="container-xl footer" typeof="schema:Organization" resource=".">
            <div className="logo">
                <img property="schema:logo" src="assets/Logo_octobre_conseil.svg" />
            </div>
            <nav className="footer-container">
                <div className="footer-menu">
                    <div className="row">
                        <ul className="menu-1 col">
                            <li><a href="#about">À propos</a></li>
                            <li><a href="#expertises">Nos expertises</a></li>
                            <li><a href="#case-studies">Cas clients</a></li>
                            <li><a href="#team">L'équipe</a></li>
                            <li style={{ "display": "none" }}><a href="#contact">Nous contacter</a></li>
                        </ul>
                        <ul className="menu-2 col" style={{ "display": "none" }}>
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
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Capture-d’écran-2023-11-22-à-16.31.05" transform="translate(-843, -5798)" fill="#000000" fillRule="nonzero">
                                    <g id="Group-31" transform="translate(827, 5781)">
                                        <g id="envelopes" transform="translate(16, 17)">
                                            <path d="M14.1428571,0 L3.85714286,0 C1.72285714,0 0,1.675 0,3.75 L0,11.25 C0,13.325 1.72285714,15 3.85714286,15 L14.1428571,15 C16.2771429,15 18,13.325 18,11.25 L18,3.75 C18,1.675 16.2771429,0 14.1428571,0 Z M14.1428571,0.833333333 C14.9571429,0.833333333 15.7028571,1.15 16.2428571,1.66666667 L11.1257143,6.64166667 C9.95142857,7.78333333 8.05714286,7.78333333 6.88285714,6.64166667 L1.75714286,1.66666667 C2.29714286,1.15 3.04285714,0.833333333 3.85714286,0.833333333 L14.1428571,0.833333333 Z M17.1428571,11.25 C17.1428571,12.8583333 15.7971429,14.1666667 14.1428571,14.1666667 L3.85714286,14.1666667 C2.20285714,14.1666667 0.857142857,12.8583333 0.857142857,11.25 L0.857142857,3.75 C0.857142857,3.23333333 0.994285714,2.75833333 1.23428571,2.33333333 L6.27428571,7.23333333 C7.02857143,7.96666667 8.01428571,8.33333333 9,8.33333333 C9.98571429,8.33333333 10.9714286,7.96666667 11.7257143,7.23333333 L16.7657143,2.33333333 C17.0057143,2.75 17.1428571,3.23333333 17.1428571,3.75 L17.1428571,11.25 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span property="schema:email" content="conseil_at_octobre_dot_tech"><ContactSvgLabel /></span></button>
                </div>
                <div className="rights">
                    <p>Tous droits réservés. <span property="schema:name">Octobre</span> 2023</p>
                </div>
            </div>

        </footer>
    );
  }
  export default OctobreFooter;