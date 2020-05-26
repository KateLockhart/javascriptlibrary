//must import react to use it, then the css
import React from 'react';
import "./Navbar.css";
import piePic from '../../assets/pie.jpeg';
//functional commponent, basic JS functions that are read as components by React
//props can be used to pass logic and functionality through parent and child components
//React only allows one singular parent div and all code inside of that
//can dig in to props object and display info with dot notation like <h1>{props.object.test}</h1>

import Logout from './Logout/Logout';

const Navbar = (props) => {
    return(
        <div>
            <nav>
                <img id="piePics" src={piePic} alt="pie" />
                <Logout />
            </nav>
        </div>
    )
}

export default Navbar;