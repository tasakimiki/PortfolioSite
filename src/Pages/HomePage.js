import React from 'react';
import {Link} from "react-router-dom";
import {Route, Routes }from "react-router-dom";
import images from "./DisplayImages/Images/TextData/ImagesTextData.json";

function HomePage(){
    return(
        <div className = "image_slider">
            <h1>これはホーム画面！！！！</h1>
        </div>
    );
}

export default HomePage;