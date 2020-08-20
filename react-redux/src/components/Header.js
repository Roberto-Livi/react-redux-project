import React from 'react'
import { NavLink } from "react-router-dom";
import '../styling/Header.css'

const Header = () => {
    return (
            <div id="background" className="ui secondary pointing menu">
                <NavLink id="user" to="/userpage">Stored Images</NavLink>
                <NavLink id="search" to="searchbar">Search Photos</NavLink>
            </div>
    );
}

export default Header