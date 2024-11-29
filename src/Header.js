import React, {useState, useEffect}from 'react';
import { Link, useLocation } from "react-router-dom";

function Header(){
    const location = useLocation();

    return(
        <div className = 'header'>
            <div className="container flex">
                <a  href = "#" className="logo bungee-inline">
                    <span>Z</span>ASSOUYA
                </a>
                <nav>
                    <ul className="header_menu flex anton">
                        <li className = {`header_menu1${location.pathname === "/portfolio/all"? "_active":""}`}>
                            <Link to={"/portfolio/all"}><span>P</span>ORTFOLIO</Link>
                        </li>
                        <li className = {`header_menu2${location.pathname === "/profile"? "_active":""}`}>
                            <Link to={"/profile"}><span>P</span>ROFILE</Link>
                        </li>
                        <li className = {`header_menu3${location.pathname === "/contact"? "_active":""}`}>
                            <Link to={"/contact"}><span>C</span>ONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>

    );
}

export default Header;