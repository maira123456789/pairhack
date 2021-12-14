import React, { useContext, useEffect } from "react";
import { cartContext } from "../../context/cartContext";

import { List} from "antd"
import CartItem from "./CartItem";
const Cart = () => {
  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  },[]);
  return(
  <div style={{paddingTop: '100px'}}>
    <List
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        footer={<h2>Total: {cart?.totalPrice}$</h2>}
        renderItem={(item) => <CartItem item={item}/>}
      />
  </div>
  )
};

export default Cart;
