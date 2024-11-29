import {Link} from "react-router-dom";
import images from "./Images/TextData/ImagesTextData.json";

export const display_all = (genre) => {
    
    return(
        <div>
            <div className = "image_gallery">
                {images.map((image, index) => ( 
                    <div key={index} className = "image_container">
                        <Link to = {`/portfolio/${genre}/details/${image.project_num}`}><img src = {image.path} alt = {image.project_num}/></Link>
                        <p className = "zen-kaku-gothic-new-medium">{image.year} | {image.title} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const display_clientwork = (genre) => {

    //↓今いるpageのgenreと画像のgenreが同じか判定
    const check_genre_match = (image_genre_num) => {
        if(2 == image_genre_num){
            return true;
        }
        else{
            return false;
        }
    }

    return (     
        <div>
            <div className = "image_gallery">
                {images.map((image, index) => ( 
                    //↓左辺がtrueなら右辺を実行(表示)
                    check_genre_match(image.genre_num) && (
                        <div key={index} className = "image_container">
                            <Link to = {`/portfolio/${genre}/details/${image.project_num}`}><img src = {image.path} alt = {image.project_num}/></Link>
                            <p className = "zen-kaku-gothic-new-medium">{image.year} | {image.title} </p>
                        </div>  
                    )
                ))}
            </div>
        </div>
    );
};

export const display_original = (genre) => {

    //↓今いるpageのgenreと画像のgenreが同じか判定
    const check_genre_match = (image_genre_num) => {
        if((1) == image_genre_num){
            return true;
        }
        else{
            return false;
        }
    }

    return (     
        <div>
            <div className = "image_gallery">
                {images.map((image, index) => ( 
                    //↓左辺がtrueなら右辺を実行(表示)
                    check_genre_match(image.genre_num) && (
                        <div key={index} className = "image_container">
                            <Link to = {`/portfolio/${genre}/details/${image.project_num}`}><img src = {image.path} alt = {image.project_num}/></Link>
                            <p className = "zen-kaku-gothic-new-medium">{image.year} | {image.title} </p>
                        </div>  
                    )
                ))}
            </div>
        </div>
    );
};

export const display_other = () => {
    return <div><h1>これはその他の画像</h1></div>;
};