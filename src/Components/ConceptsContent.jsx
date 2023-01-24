import JxCatalog from '../images/johnnie x catalog.png';
import JxHome from '../images/johnnie x home.png';
import { Accordian } from './Accordian';

export const ConceptsContent = () => {
    const websiteData = {title: 'JOHNNIE.MASSART', published: 'published', DateXDetail: `// 08.07.2022\ndigital outlet for johnnie to showcase catalog.`, src1: JxHome, img1Alt: 'johnnie home', src2: JxCatalog, img2Alt: 'johnnie x catalog'};

    return (  
        <div className="concepts-content">                
            <Accordian websiteData={websiteData}/>
        </div>
    );
}