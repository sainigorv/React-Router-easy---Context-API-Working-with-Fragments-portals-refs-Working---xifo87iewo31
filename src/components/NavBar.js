import React from 'react';
import { NavLink } from 'react-router-dom';


export const NavBar = () =>{
    return(
        <nav>
            <ul>
            <NavLink to="/" className = "index-link">
            <li>Index</li>
            </NavLink>
            <NavLink to="/home" className = "home-link">
            <li>Home</li>
            </NavLink>

            </ul>
        </nav>
    )
}
