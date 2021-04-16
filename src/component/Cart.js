import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../context/ItemContext";

const Cart = (props) => {
  const { itemCount } = useContext(ItemContext);
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    setCartValue((prev) => prev - prev);
    console.log(cartValue);
    Object.keys(itemCount).forEach((key) => {
      if (itemCount[key] > 0) {
        setCartValue((prev) => prev + 1);
      }
    });
  }, [itemCount, cartValue]);

  return (
    <>
      <h1 className={props.className}>
        <i className="shopping cart icon"></i>
        {JSON.stringify(itemCount)}
      </h1>
      <h1>{cartValue}</h1>
    </>
  );
};
export default Cart;
