import React from 'react';
import PortfolioPage from './Pages/PortfolioPage';
import ProfilePage from './Pages/ProfilePage';
import ContactPage from './Pages/ContactPage';
import {Route, Routes }from "react-router-dom";

class Main extends React.Component{
    render(){
        
        return(
                <Routes>
                    <Route path="/" element={<PortfolioPage />} />
                    <Route path="/portfolio/*" element={<PortfolioPage />} />           
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
        );
    }
}

export default Main;