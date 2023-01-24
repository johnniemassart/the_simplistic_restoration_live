import { useState } from "react";

export const Accordian = ({websiteData}) => {
    // const [active, setActive] = useState(false);
    // onClick={() => setActive(active => !active)}
    const [active, setActive] = useState(false);
  
    const accordianClick = () => {
        setActive(active => !active);
    }

    return (  
        <>
        {/* // <div className="collapsible"> */}
            <button className='concepts-button' onClick={accordianClick}>{websiteData.title}</button>
            {active && 
                <div className="concepts-button-content">
                    <a className='published' href="https://www.johnniemassart.com" target="_blank" rel="noreferrer">published</a>
                    <p>{websiteData.DateXDetail}</p>
                    <img src={websiteData.src1} alt={websiteData.img1Alt} />
                    <img src={websiteData.src2} alt={websiteData.img2Alt} />
                </div>
            }
        {/* // </div> */}
        </>
    );
}