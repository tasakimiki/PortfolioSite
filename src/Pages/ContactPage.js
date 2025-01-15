import React from 'react';

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
                    <div>
                        <p>
                            イラストのご依頼やお見積り、その他お問い合わせ等はX又はInstagramのDMにてお願いいたします！<br/>
                            お気軽にお問い合わせ頂けましたら幸いです！
                        </p>
                    </div>
                </div>         
            </div>
        );
    }
}
export default ContactPage;