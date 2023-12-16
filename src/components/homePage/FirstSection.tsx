
import IconArrow from '../../icons/arrow.svg';

const FirstSection = () => {
  return (
    <section className="first_section">
            <div className="split">
                <div className="image-back container-sm">
                    <div className="text-over" typeof="schema:Organization" resource=".">
                        <p property="schema:description">
                            Construisons ensemble des solutions digitales <span>sur-mesures</span>
                        </p>
                        <IconArrow />
                    </div>
                </div>
            </div>
        </section>
  );
}
export default FirstSection;