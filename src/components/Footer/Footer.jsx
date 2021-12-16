import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Twitter from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div
        className="back"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        BACK TO TOP
      </div>
      <div className="main-footer">
        <div className="footer">
          <h3>CALL</h3>
          <br />
          <span><a href="tel:+996704135830">+996704135830</a></span>
          <span><a href="tel:+996552797222">+996552797222</a></span>
        </div>
        <div className="footer">
          <h3>CATEGORIES</h3>
          <br />
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
          >
            Perfume
          </Link>
          <Link to="/brands" style={{ textDecoration: "none", color: "black" }}>
            Brands
          </Link>
        </div>
        <div className="footer2">
          <h3>FOLLOW US ON</h3>
          <br />
          <br />
          <div className="contacts">
            <a
              href="https://www.instagram.com/theperfumeshop/"
              style={{ color: "black" }}
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/wwwperfumecom/"
              style={{ color: "black" }}
            >
              <FacebookIcon />
            </a>
            <a href="https://web.whatsapp.com/" style={{ color: "black" }}>
              <WhatsAppIcon />
            </a>
            <a
              href="https://www.youtube.com/channel/UCzKrJ5NSA9o7RHYRG12kHZw"
              style={{ color: "black" }}
            >
              <YouTubeIcon />
            </a>
            <a href="https://twitter.com/perfumecom" style={{ color: "black" }}>
              <Twitter />
            </a>
          </div>
        </div>
        <div>Copyright © 2021 Perfumes. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
