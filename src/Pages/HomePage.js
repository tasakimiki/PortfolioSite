import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Route, Routes }from "react-router-dom";
import images from "./DisplayImages/Images/TextData/ImagesTextData.json";

function HomePage(){
    const item_count = 5;
    const copy_count = 2;

    const [current_item, set_current_item] = useState(0);
    const prev_item = () => set_current_item((n) => n + 1)
    const next_item = () => set_current_item((n) => n - 1)

    return(
        <div className = "home_page">

            <div className = "image_slider">
                <div className = {`slider_item_container item_${current_item}`}>
                    <div className = "slider_item">1</div>
                    <div className = "slider_item">2</div>
                    <div className = "slider_item">3</div>
                    <div className = "slider_item">4</div>
                    <div className = "slider_item">5</div>
                </div>
            </div>
            <div className = "slider_buttons">
                <button onClick = {prev_item}></button>
                <button onClick = {next_item}></button>
            </div>
        </div>
    );
}

export default HomePage;