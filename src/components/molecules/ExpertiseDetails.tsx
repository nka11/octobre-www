import { MouseEventHandler } from "react";




const ExpertiseDetails = (props:
    { 
        title: String,
        visible: boolean,
        children: any,
        hide: MouseEventHandler<SVGSVGElement>
    }) => {
    return(<>
        
            { props.visible ? <>
            <div className="expertiseDetailsOverrive">

                <div className="expertiseDetails">
                    <div className="expertiseTopBar">
                        <div className="expertiseDetailsTitle float-left">
                            { props.title }
                        </div>
                        <div className="expertiseCloseButton float-right">
                            <svg
                                onClick={props.hide}
                                xmlns="http://www.w3.org/2000/svg"
                                className="closeExpertiseButton"
                                fill="none"
                                viewBox="0 0 24 24"
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="expertiseDetailContent">
                        { props.children }
                    </div>
                </div>
            </div>
            </> : <></>}
        </>)
}

export default ExpertiseDetails