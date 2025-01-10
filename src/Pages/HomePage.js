import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // ページネーション用スタイル
import 'swiper/css/navigation'; // ナビゲーション用スタイル
import {Autoplay} from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules'; // Swiper モジュールのインポート
import images from "./DisplayImages/Images/TextData/ImagesTextData.json";

function HomePage(){
    let [slider_images, set_slider_images] = useState([...Array(5)].map(() => 0));
    const space_between = window.innerWidth * 0.1;

    const add_images = () => {
        const new_slider_images = [...slider_images];

        images.forEach((image, index) =>{ 

            if(index !== 0){
                let larger_flag = 0;
                let tmp = 0;
                let i;
                
                for(i = 4; i >= 0; i--){
                    console.log(images[slider_images[i]].project_num, images[index].project_num, index);
                    console.log(images[slider_images[i]].year, image.year, image.project_num);

                    if (images[new_slider_images[i]].year < image.year){
                        larger_flag = 1; //制作年を比べ、大きかったらフラグを立てる
                        tmp = index;

                        console.log(larger_flag);

                    } else if(images[new_slider_images[i]].year === image.year){

                        console.log(images[slider_images[i]].month, image.month, image.project_num);

                        if(images[new_slider_images[i]].month < image.month){
                            larger_flag = 1;
                            tmp = index;

                            console.log(larger_flag);
                        }
                        else if(images[new_slider_images[i]].month === image.month){
                            larger_flag = 1;
                            tmp = index;

                            console.log(larger_flag);
                            break;
                        }
                        else{

                            console.log(larger_flag);
                            break;
                        }
    
                    }
                    else{
                        console.log(larger_flag);

                        break;
                    }
                }

                if(larger_flag === 1){
                    i = i + 1;

                    for (let j = 4; j > i; j--){
                        new_slider_images[j] = new_slider_images[j - 1];
                    }
                    
                    new_slider_images[i] = tmp;
                    
                    console.log(larger_flag, i, tmp)
                    console.log(new_slider_images)

                }
                else{
                    console.log(larger_flag)
                }
            }
        });
        set_slider_images(new_slider_images);
    };

    useEffect(() => {
        add_images();
    }, []); //初期レンダリング時に1度だけ実行

    return(
        <div className = "home">
            <div className = "image_slider">
                <Swiper
                slidesPerView = {3} //一度に表示するスライドの数
                spaceBetween = {space_between} //スライド間のスペース
                pagination={{
                    clickable: true, //何枚目のスライドか示す丸いやつ
                }}
                navigation //左右に矢印のナビゲーションを追加
                loop = {true}
                
                autoplay =  {{  
                    delay :  2000, //自動でスライドするとき何秒止まるか
                }}
                speed = {800}
            
                modules = {[Pagination, Navigation, Autoplay]}
                >

                    {slider_images.map((slider_image, index) => {
                        return(
                            <SwiperSlide key = {index}>
                                <img className = "slider_item" src = {images[slider_image].path} alt = {`image${index}`} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <div className = "proofile">
                

            </div>
        </div>
    );
}

export default HomePage;