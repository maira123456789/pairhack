import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import './Header.css'

const Header = () => {
  const location = useLocation();
  const NAV_ITEMS = [
    {
      title: "BRANDS",
      link: "/brands",
      id: 1,
    },
    {
      title: "PERFUME",
      link: "/products",
      id: 2,
    },
    {
      title: "STORES",
      link: "*",
      id: 3,
    },
    {
      title: "NEWS",
      link: "*",
      id: 4,
    },
  ];
  return (
    <div className="navbar">
        <Link to="/">
        <img  width="100px" src="https://www.svgimages.com/svg-image/s5/floral-letter-p.svg" alt="logo" />
        </Link>
      {NAV_ITEMS.map((item) => (
        <Link
          to={item.link}
          style={{textDecoration: 'none'}}
          className={
            location.pathname === item.link
              ? "navbar__item-active"
              : "navbar__item"
          }
        >
          {item.title}
        </Link>
      ))}
      <ShoppingCartIcon />
    </div>
  );
};

export default Header;
