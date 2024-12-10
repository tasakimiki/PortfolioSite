import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Header(){
    const location = useLocation();

    return(
        <div className = 'header'>
            <div className="container flex">
                <Link to = "/home" className="logo bungee-inline">
                    <span>Z</span>ASSOUYA
                </Link>
                <nav>
                    {/*active判定する関数作った方が見た目すっきりするかも*/}
                    <ul className="header_menu flex anton">
                        <li className = {`header_menu1${location.pathname.startsWith("/portfolio")? "_active":""}`}>
                            <Link to={"/portfolio/all"}><span>P</span>ORTFOLIO</Link>
                            <div className = {`triangle${location.pathname.startsWith("/portfolio")? " triangle1_active":""}`}></div>
                        </li>
                        <li className = {`header_menu2${location.pathname.startsWith("/profile")? "_active":""}`}>
                            <Link to={"/profile"}><span>P</span>ROFILE</Link>
                            <div className = {`triangle${location.pathname.startsWith("/profile")? " triangle2_active":""}`}></div>
                        </li>
                        <li className = {`header_menu3${location.pathname.startsWith("/contact")? "_active":""}`}>
                            <Link to={"/contact"}><span>C</span>ONTACT</Link>
                            <div className = {`triangle${location.pathname.startsWith("/contact")? " triangle3_active":""}`}></div>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>

    );
}

export default Header;