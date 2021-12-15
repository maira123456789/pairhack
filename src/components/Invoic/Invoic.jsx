import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { cartContext } from "../../context/cartContext";
import "./Invoic.css";
const Invoic = () => {
  const {
    user: { email },
  } = useAuth();
  const {  cart } = useContext(cartContext);

  return (
    <div
      style={{
        paddingTop: "150px",
        paddingBottom: "100px",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="check">
      
        <div className="check_inner">
        <img
          width="100px"
          src="https://www.svgimages.com/svg-image/s5/floral-letter-p.svg"
          alt="logo"
        />
          <div>
            <span className="check-words">User's email :  </span>
            <span>{email}</span>
          </div>
          <div className="ch" >
          <div>
            <span className="check-words">Name of product  </span>
            {cart?.products.map((product) => {
              return <li>{product.item.model}</li>;
            })}
          </div>
          <div>
            <span className="check-words">Price  </span>
            {cart?.products.map((product) => {
              return <li>{product.item.price} $</li>;
            })}
          </div>
          <div>
            <span className="check-words">Count  </span>
            {cart?.products.map((product) => {
              return <li>{product.count}</li>;
            })}
          </div>
          <div>
            <span className="check-words">Sum  </span>
            {cart?.products.map((product) => {
              return <li>{product.subPrice + "  $"}</li>;
            })}
          </div>
          </div>
          <div className="total">
            <h3><strong>TOTAL : </strong></h3>
            <strong>{cart?.totalPrice + "  $"}</strong>
          </div>
          <h1 className="thanks"><i> Thanks for shopping!</i></h1>
        </div>
      </div>
      <Link to="/"><button style={{marginTop: '100px'}}>GO HOME</button></Link>
    </div>
  );
};

export default Invoic;
