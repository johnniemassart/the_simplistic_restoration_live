import { Static } from '../Components/Static';
import { Tsr } from '../Components/Tsr';
import { Cursor } from '../Components/Cursor';
import { Nav } from '../Components/Nav';
import { HomeContent } from '../Components/HomeContent';
import { Bottom } from '../Components/Bottom';
import { useState } from 'react';
import { useEffect } from 'react';

export const Home = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 1000);
    },[])

    return ( 
        <div className='container'>
            <Static/>
            <Tsr/>
            <Cursor/>
            <div className="home-container" style={{opacity: display ? 1 : 0}}>
                <Nav/>
                <HomeContent/>
                <Bottom/>
            </div>
        </div> 
    );
}