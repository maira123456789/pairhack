import React, { useContext, useEffect } from "react";
import { cartContext } from "../../context/cartContext";

import "antd/dist/antd.css";
import { Button, List } from "antd";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const Cart = () => {

  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div style={{ paddingTop: "100px", marginBottom: "50px" }}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        footer={<h2>Total: {cart?.totalPrice}$</h2>}
        renderItem={(item) => <CartItem item={item} />}
      />
      {cart.totalPrice === 0? null:<Link to="/pay">
        <Button>Buy</Button>
      </Link> }
      
    </div>
  );
};

export default Cart;
