
const ContactForm = () => {
    return(
        <div className="form">
            <h2 className="contact-us-title">
                <a id="contact" href="#contact">
                    Contactez-nous
                </a>
            </h2>
            <form>
                <input className="left-input" placeholder="Nom" type="text" />
                <input placeholder="Prénom" type="text" />
                <input placeholder="Nom de l'entreprise" type="text" id="entreprise" />
                <input className="left-input" placeholder="Email" type="email" />
                <input placeholder="Téléphone" type="tel" />
                <textarea placeholder="Votre message"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default ContactForm;