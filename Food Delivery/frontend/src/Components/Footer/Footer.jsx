import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Welcome to Mom's Magic Food Cafe, where every dish is a heartfelt creation inspired by the love and warmth of home-cooked meals. Our cafe is a haven where flavors blend harmoniously, creating magical moments that nourish both body and soul.</p>
            
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>GET IN TOUGH</h2>
                <ul>
                    <li> +91 8590303201</li>
                    <li>subintom111@gmail.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024  Mom's Magic . All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
