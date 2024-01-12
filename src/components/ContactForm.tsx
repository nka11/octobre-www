const ContactForm = () => {
    return(
        <>
            <div className="form">
                <h2 className="contact-us-title">
                    <a id="contact" href="#contact">
                        Contactez-nous
                    </a>
                </h2>
                <form>
                    <input name="senderFirstName" className="left-input" placeholder="Nom" type="text" />
                    <input name="senderLastName" placeholder="Prénom" type="text" />
                    <input name="senderOrganization" placeholder="Nom de l'entreprise" type="text" id="entreprise" />
                    <input name="senderEmail" className="left-input" placeholder="Email" type="email" />
                    <input name="senderPhone" placeholder="Téléphone" type="tel" />
                    <textarea name="messageText" placeholder="Votre message"></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </>
    );
}

export default ContactForm;