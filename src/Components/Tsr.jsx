import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Tsr = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDisplay(true)
        }, 750);
    },[])

    return (  
        <Link to="/" className="tsr" style={{bottom: display ? '0' : ''}}>the simplistic restoration</Link>
    );
}