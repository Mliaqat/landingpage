import React from 'react'
import './Footer.scss'
import img from '../../Assest/nav-img.png'
import { FaFacebook , FaTwitter ,FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className="grid ">
            <div className="icon">
            <img src={img}></img>
            </div>
            <div className="social">
                <h1>Contact Us</h1>
                
                <p className="lead"><FaFacebook/> <span> Facebook </span></p>
                <p className="lead"> <FaTwitter/> <span> Twitter   </span></p>
                <p className="lead"><FaInstagram/> <span> Instagram </span></p>
                </div>
            <div className="copyright"><p className="lead"> 2021 Stiff.Money. All Rights Reserved</p></div>
            
        </div>
    )
}

export default Footer;
