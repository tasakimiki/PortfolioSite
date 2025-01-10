import React, {useState, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import {Route, Routes }from "react-router-dom";
import Display from "./DisplayImages/Display";
import {display_all, display_clientwork, display_original, display_other} from "./DisplayImages/DisplayFunctions"
import {display_detail} from "./DisplayImages/DisplayDetailFunction";


function PortfolioPage(){
    const location = useLocation();
    const [genre, setGenre] = useState("");

    useEffect(() => {
        const location_array = location.pathname.split("/");
        setGenre(location_array[2]);
    }, [location]);

    return(
        <div className = "main">
            <div>
                <h1 className = "title anton"  id = "title2">
                    <span>P</span>ORTOFOLIO
                </h1>
                <h2 className = "sub_title zen-kaku-gothic-new-regular">
                    過去制作実績
                </h2>
            </div>
            <div className = "images_container">
                <nav className = "images_menu">
                    <ul className = "images_menu_text flex anton">
                        <li className = {location.pathname === "/" || genre === "all" ? "active":""}>
                            <Link to = "/portfolio/all">All</Link>
                        </li>
                        <li className = {genre === "clientwork"? "active":""}>
                            <Link to = "/portfolio/clientwork">Client work</Link>
                        </li>
                        <li className = {genre === "original"? "active":""}>
                            <Link to = "/portfolio/original">Original</Link>
                        </li>
                        <li className = {genre === "other"? "active":""}>
                            <Link to = "/portfolio/other">Other</Link>
                        </li>
                    </ul>
                </nav>
                <div className = "images">
                    <Routes>
                        <Route path = "" element = {<Display func={display_all} location={genre}/>}/>              
                        <Route path = "/all" element = {<Display func={display_all} location={genre}/>}/>
                        <Route path = "/clientwork" element = {<Display func={display_clientwork} location={genre}/>}/>
                        <Route path = "/original" element = {<Display func={display_original} location={genre}/>}/>
                        <Route path = "/other" element = {<Display func={display_other} location={genre}/>}/>
                        <Route path = {`${genre}/details/*`} element = {<Display func={display_detail} location={location.pathname} />}/>
                    </Routes>
                </div>
            </div>

        </div>
    );

}

export default PortfolioPage;