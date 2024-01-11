
import { PopupButton } from "react-calendly";

interface RDVprops { 
    className?: string
    text: string 
}

const RDVButton = (props:RDVprops) => {
    const rootElement = ( document.getElementById("root") ? document.getElementById("root") : document.createElement('div')) as HTMLElement ;
    
    return (<>
        <PopupButton 
            className={ props.className }
            url="https://calendly.com/octobre-conseil"
            /*
            * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
            * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
            */
            rootElement={ rootElement }
            text={ props.text }/>
    </>)
}

export default RDVButton;