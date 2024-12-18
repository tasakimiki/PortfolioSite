import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Route, Routes }from "react-router-dom";
import images from "./DisplayImages/Images/TextData/ImagesTextData.json";

function HomePage(){
    const item_count = 5;

    const item_numbers = [...Array(item_count)].map((_, i) => i + 1);
    //...を使うことで空の配列が展開されてmapメソッドが使えるようになるらしい
    //map

    const [current_item, set_current_item] = useState(0); //いまいるところ、値は0~4

    //戻るボタン
    const prev_item = () => {
        set_current_item((n) => (n + 1) % item_count); //説明できないけどこれすごい
    };

    //次へボタン
    const next_item = () => {
        set_current_item((n) => (n - 1) + item_count % item_count);
        console.log("なくした");
        console.log("ばぐしゅうせい");
    };

    return(
        <div className = "home_page">
            <div className = "image_slider">
                <div className = {`slider_item_container item_${current_item + 1}`}>
                    {item_numbers.map((n, index) => (
                        <div key = {index} className = "slider_item">{n}</div>
                    ))}
                </div>
            </div>
            <div className = "slider_buttons">
                <button className = "slide_button" onClick = {prev_item}>&lt;</button>
                <button className = "slide_button" onClick = {next_item}>&gt;</button> {/*&gt;とかは<と>を表示するためのHTMLエンティティとやららしいです*/}
            </div>
        </div>
    );
}

export default HomePage;