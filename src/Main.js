import React from 'react';
import HomePage from './Pages/HomePage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';
import {Route, Routes }from "react-router-dom";

class Main extends React.Component{
    render(){
        
        return(
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/portfolio/*" element={<PortfolioPage />} />           
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
        );
    }
}

export default Main;