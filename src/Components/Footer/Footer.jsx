import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo3.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} />
        </div>
        <div className="footer-top-right">
          <p>
            Frontend Developer from Pakistan, excited to work on New Projects
          </p>
        {/* 
          <div className="footer-email-input">
            <img src={user_icon} />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
         */}
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2025 Moiz Adeeb. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
