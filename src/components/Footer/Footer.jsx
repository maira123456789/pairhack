import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Twitter from "@mui/icons-material/Twitter";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Footer = () => {
  return (
    <div>
      <div className="main-footer">
        <div className="footer">
          <h3>INFORMATION</h3>
          <a>Contact Us</a>
          <a>Your Feedback</a>
          <a>FAQ</a>
        </div>
        <div className="footer">
          <h3>CATEGORIES</h3>
          <a>Perfume</a>
          <a>Brands</a>
        </div>
        <div className="footer2">
          <h3>FOLLOW US ON</h3>
          <div className="contacts">
            <a>
              <InstagramIcon />
            </a>
            <a>
              <FacebookIcon />
            </a>
            <a>
              <WhatsAppIcon />
            </a>
            <a>
              <YouTubeIcon />
            </a>
            <a>
              <Twitter />
            </a>
            <a>
              <AlternateEmailIcon />
            </a>
          </div>
        </div>
        <div>Copyright © 2021 Perfumes. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
