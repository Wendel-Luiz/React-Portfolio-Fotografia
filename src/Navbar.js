import React, { useState } from 'react';
import { Link } from'react-router-dom';
import "./components/sass/Navbar.scss";

import Hamburger from './components/Hamburger';

export default (props) => {
    const [hclasses, setHclasses] = useState(['menu-inactive', 'nav-inactive']);
console.log("A")
    const toggle = () => {
        if(hclasses[0] === 'menu-inactive')
            setHclasses(['menu-active', 'nav-active'])
        else
            setHclasses(['menu-inactive', 'nav-inactive'])
    }

    return (
        <div className="navbar-container">
            <Hamburger classe={hclasses[0]} onClick={toggle}/>
            <ul className={"navbar " + hclasses[1]}>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/Sobre">Sobre</Link>
                <Link className="link" to="/Blog">Blog</Link>
            </ul>
        </div>
    );
}