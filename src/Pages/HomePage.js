import React, {useState, useEffect, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from "react-router-dom";
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

    const swiperRef = useRef(null);
    const [backgroundImage, setBackgroundImage] = useState("");

    useEffect(() => {
        add_images();
    }, []); //初期レンダリング時に1度だけ実行

    useEffect(() => {
        if (swiperRef.current) {
          const swiperInstance = swiperRef.current.swiper;
    
          // 初期背景設定
          updateBackground(swiperInstance.slides[swiperInstance.activeIndex]);
    
          // スライド変更時に背景を更新
          swiperInstance.on("slideChange", () => {
            const currentSlide = swiperInstance.slides[swiperInstance.activeIndex + 1];
            updateBackground(currentSlide);
          });
        }
    }, []);

    const updateBackground = (slide) => {
        const img = slide.querySelector("img");
        if (img) {
          setBackgroundImage(img.src);
        }
    };

    console.log(`背景画像のURL:${backgroundImage}`);

    return(
        <div className = "home">
            <div className = "image_slider" style={{ '--background-image': `url(${backgroundImage})`}}>
                <Swiper
                ref = {swiperRef}
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

            <div className = "profile">
                <div className = "profile_content">
                    <div className = "profile_icon">
                        <img src = "/images/Illustrations/original_project5.JPG"/>
                    </div>

                    <div className = "profile_text">
                        <h1 className = "zen-kaku-gothic-new-bold">雑草屋<span className = "anton">/ZASSOUYA</span></h1>

                        <p className = "zen-kaku-gothic-new-medium">10月11日生まれ　千葉生まれ沖縄育ち　工業高専生<br/>SNS用アイコンやサムネイル、MVイラストをメインとした案件をお受けしています。<br/>
                            表情や手を描くのが好きなので顔周りが強調される構図が得意です。<br/>
                            最近はLive2dや3Dモデリングを勉強中です。</p>

                        <h2 className = "zen-kaku-gothic-new-bold">使用ソフト</h2>
                        <p className = "zen-kaku-gothic-new-medium">CLIP STUDIO PAINT, procreate, ibisPaintX</p>

                        <h2 className = "anton">SNS</h2>

                        <div className = "sns_icons">
                            <Link className = "icons" to = {"https://x.com/zassou_yasan"}>
                                <img className = "x_icon" src = "/icons/x_icon.png" alt = "x_link"/>
                            </Link>
                            <Link className = "icons" to = {"https://www.instagram.com/zassou_yasan"}>
                            <img className = "insta_icon" src = "/icons/instagram_icon.png" alt = "insta_link"/>
                            </Link>  
                        </div>                      
                    </div>

                </div>


            </div>
        </div>
    );
}

export default HomePage;