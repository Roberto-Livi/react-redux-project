import React from 'react'
import { NavLink } from "react-router-dom";
import '../styling/Header.css'

const Header = () => {
    return (
            <div id="background" className="ui secondary pointing menu">
                <NavLink id="pickedimages" to="/userpage">Picked Images</NavLink>
                <NavLink id="search" to="/searchbar">Search Photos</NavLink>
                <NavLink id="savedImages" to="/savedimages">DB Images</NavLink>
                <NavLink id="logout" to="/">Logout</NavLink>
            </div>
    );
}

export default Header