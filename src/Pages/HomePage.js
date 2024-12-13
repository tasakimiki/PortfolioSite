import React from 'react';
import {Link} from "react-router-dom";
import {Route, Routes }from "react-router-dom";
import images from "./DisplayImages/Images/TextData/ImagesTextData.json";

function HomePage(){
    return(
        <div className = "home_page">
            <div className = "image_slider">
                <div className = "slider_item_container">
                    <div className = "slider_item">1</div>
                    <div className = "slider_item">2</div>
                    <div className = "slider_item">3</div>
                    <div className = "slider_item">4</div>
                    <div className = "slider_item">5</div>
                </div>
            </div>
            <div className = "">

            </div>
        </div>
    );
}

export default HomePage;