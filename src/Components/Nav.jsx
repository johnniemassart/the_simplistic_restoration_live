import { Link, useLocation } from "react-router-dom";

export const Nav = () => {
    const location = useLocation();

    return (  
        <nav className="nav-wrapper">
            <li>{location.pathname === '/' ? <Link to="/concepts" className="concepts">concepts</Link> : <Link to="/concepts" className="concepts" style={{borderBottom: '1.5px solid black'}}>concepts</Link>}
            </li>
            <span className="border"> | </span>
            <li>
                <a className="contact" href="mailto:johnniemassart@gmail.com">contact</a>
            </li>
        </nav>
    );
}