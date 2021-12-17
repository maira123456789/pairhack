import React from "react";
import "./Stores.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
const Stores = () => {
  return (
    <div
      className="stores"
      style={{
        paddingTop: "150px",
        paddingBottom: "50px",
        display: "flex",
        justifyContent: "space-evenly",
        paddingRight: "30px",
      }}
    >
      <div className="stores-div" style={{ width: "50%", paddingRight: "20px", paddingLeft: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <h1 id="our">Our stores in Bishkek </h1>
          <ShoppingBagIcon color="secondary" fontSize="large" />
          <ShoppingBagIcon color="secondary" fontSize="large" />
          <ShoppingBagIcon color="secondary" fontSize="large" />
          <h3>
            Most of our stores are located in the central part of the city.
          </h3>
        </div>
        <div style={{ width: "100%" }}>
          <img
            width="80%"
            src="https://beautifulmag-lifestyle.com/wp-content/uploads/2019/07/w990-12.jpg"
            alt=""
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "50px",
          }}
        >
          <img
            width="80%"
            src="https://lh3.googleusercontent.com/proxy/xg7DDrRwv4dEKn9nFdMvssf6sqsUDjCdx3O26OElQ-plTG8ez-Z-o1aB-CHz-f_hBIVfAX3pAPU6QPe0tggSvxKXKSEC1RRsjxoGHJ3EfllQIA"
            alt=""
          />
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d46796.51771842652!2d74.5630462485996!3d42.856328534241264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0L_QsNGA0YTRjtC80LXRgNC90YvQtSDQvNCw0LPQsNC30LjQvdGLINCyINCx0LjRiNC60LXQutC1!5e0!3m2!1sru!2skg!4v1639497950306!5m2!1sru!2skg"
        style={{ width: "80%", height: "600px" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Stores;
