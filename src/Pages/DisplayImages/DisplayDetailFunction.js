import React from "react";
import {Link} from "react-router-dom";

import images from "./Images/TextData/ImagesTextData.json";

export const display_detail = (location) =>{
    const location_array = location.split("/");
    {/*aaaa*/}

    {/*↓jsonの配列の要素の中で、選択した画像とproject_numが一致するものを探す*/}
    {/*↓imageは、images内の今比べてる要素を示す*/}
    const matched_image = images.find(image => image.project_num === location_array[4]);

    return(
        <div>
            <div className = "image_detail">
                <div className = "image_detail_variants flex">
                    <img src = {matched_image.path} alt = {matched_image.project_num}/>
                    <img src = {images.path} alt = {images.project_num}/>
                </div>

                <div  className = "image_details_info">
                    <div className = "image_details_info_text">
                        <h1 className = "zen-kaku-gothic-new-black">{matched_image.year} | {matched_image.title}</h1>
                        <p className = "zen-kaku-gothic-new-medium">
                            {`ジャンル：${matched_image.genre}`}<br/>
                            {`制作期間：${matched_image.year}年${matched_image.month}月`}<br/>
                            {`制作時間：${matched_image.time}時間`}<br/>
                            {`使用ソフト：${matched_image.tools}`}
                        </p>
                        <p className = "zen-kaku-gothic-new-medium">{matched_image.caption}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}