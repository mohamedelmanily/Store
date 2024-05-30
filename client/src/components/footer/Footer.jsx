import React from "react";
import './Footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>
        <div className="item">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h2>About</h2>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            magni, temporibus beatae, obcaecati repellendus ipsam vel soluta,
            libero id voluptates incidunt commodi vitae? Corrupti voluptates
            voluptas unde optio blanditiis nobis!
          </span>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            dolor architecto, eaque maxime illum voluptate quos sint quibusdam
            odit velit impedit fuga nulla et iste.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className='left'>
          
        <span className="logo">Citystore</span><span className="copyright">&copy; 2024. All rights reserved.</span>
        </div>
        <div className='right'>
          <img src="imgs/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
