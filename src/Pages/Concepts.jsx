import {Static} from '../Components/Static';
import { Tsr } from '../Components/Tsr';
import { Cursor } from '../Components/Cursor';
import { Nav } from '../Components/Nav';
import { ConceptsContent } from '../Components/ConceptsContent';
import { Bottom } from '../Components/Bottom';
import {useState, useEffect} from 'react';

export const Concepts = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 1000);
    },[])

    return (  
        <div className="concepts-container">
            <Static/>
            <Tsr/>
            <Cursor/>
            <div className="concepts-inner-container" style={{opacity: display ? 1 : 0}}>
                <Nav/>
                <ConceptsContent/>
                <Bottom/>
            </div>
        </div>
    );
}