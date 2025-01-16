import React from 'react';
import { Link } from "react-router-dom";

class ContactPage extends React.Component{
    render(){
        return(
            <div className = "main">
                <div>
                    <h1 className = "title anton" id = "title3">
                        <span>C</span>ONTACT
                    </h1>
                    <h2 className = "sub_title zen-kaku-gothic-new-regular">
                        お問い合わせ
                    </h2> 
                    <div className = "contact_container">
                        <p className = "contact_text zen-kaku-gothic-new-medium" >
                            イラストのご依頼やお見積り、その他お問い合わせ等は各SNSのDMにてお願いいたします。<br/>
                            お気軽にお問い合わせ頂けましたら幸いです。
                        </p>
                    </div>
                    <div className = "contact_sns_icons">
                            <Link className = "icons" to = {"https://x.com/zassou_yasan"}>
                                <img className = "x_icon" src = "/icons/x_icon.png" alt = "x_link"/>
                            </Link>
                            <Link className = "icons" to = {"https://www.instagram.com/zassou_yasan"}>
                            <img className = "insta_icon" src = "/icons/instagram_icon.png" alt = "insta_link"/>
                            </Link>  
                        </div> 
                </div>         
            </div>
        );
    }
}
export default ContactPage;