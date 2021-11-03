import React from 'react';

import { NavBar } from  './style';
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <>
            <NavBar>
                <ul>
                    <li><Link to="">Scienci </Link></li>
                    <li><Link to="">Technology</Link></li>
                    <li><Link to=""></Link></li>
                    <li><Link to=""></Link></li>
                </ul>
            </NavBar>
        </>
    )
}

export default Menu;