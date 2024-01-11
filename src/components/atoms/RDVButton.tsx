
import { useState, PropsWithChildren } from "react";
import { PopupModal } from "react-calendly";

interface RDVprops { 
    className?: string
}

const RDVButton = (props:PropsWithChildren<RDVprops>) => {
    const rootElement = ( document.getElementById("root") ? document.getElementById("root") : document.createElement('div')) as HTMLElement ;
    const [isOpen, setOpen] = useState(false)
    return (<>
        <div>
        <button
          className={ props.className }
          onClick={() => setOpen(true)}
        >
          { props.children }
        </button>
        <PopupModal
          url="https://calendly.com/octobre-conseil"
          pageSettings={{
            backgroundColor: 'F4F0EE',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '1C1C1C',
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
      </div>

        {/* <PopupButton 
            className={ props.className }
            url="https://calendly.com/octobre-conseil"
            rootElement={ rootElement }
            text={ props.text }
            /> */}
    </>)
}

export default RDVButton;