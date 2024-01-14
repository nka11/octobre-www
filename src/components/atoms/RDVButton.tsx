
import { useState, PropsWithChildren, forwardRef } from "react";
import { PopupModal } from "react-calendly";

interface RDVprops { 
    className?: string
    hidden?:boolean;
}

const RDVButton = forwardRef<HTMLButtonElement, PropsWithChildren<RDVprops>>(
    (props, ref) => {
        const buttonStyle = props.hidden ? {"display":"none"} : {} 
        const rootElement = ( document.getElementById("root") ? document.getElementById("root") : document.createElement('div')) as HTMLElement ;
        const [isOpen, setOpen] = useState(false)
        return (<>
            <span ref={ ref } style={buttonStyle}
            className={ props.className }
            onClick={() => setOpen(true)}
            >
            { props.children }
            </span>
            <PopupModal
            url="https://calendly.com/octobre-conseil/30min"
            pageSettings={{
                backgroundColor: 'F4F0EE',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '3a1b05', //'1C1C1C',
                textColor: '5C5148'
            }}
            utm={{}}
            prefill={{}}
            onModalClose={() => setOpen(false)}
            open={isOpen}
            /*
            * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
            * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
            */
            rootElement={ rootElement }
            />

            {/* <PopupButton 
                className={ props.className }
                url="https://calendly.com/octobre-conseil"
                rootElement={ rootElement }
                text={ props.text }
                /> */}
        </>)
    }
);

export default RDVButton;