import React from 'react';
import "./footer.css";
import logo from "../../img/logo.png";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container text-center top">
                    <div className="img flogo d-flex">
                        <img src={logo} alt="" />
                    </div>            
                </div>
                <p>&copy; 2023. All right reserved. design by Junghyun</p>
            </footer> 
        </>
    );
};


export default Footer;