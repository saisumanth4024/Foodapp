import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = (props) => {
  const cartData = useSelector((store) => store.cart.items);
  console.log(cartData);
  const dispatch = useDispatch();
  const clearCarts = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="font-bold text-xl">cart</h1>
      <div className="flex flex-col justify-center items-center  grow w-7/12 m-auto">
        <button
          onClick={clearCarts}
          className="border border-black rounded-md px-2 w-28"
        >
          Clear Cart
        </button>
        {cartData.map((eachCartData, index) => (
          <ItemList
            eachItem={eachCartData}
            key={eachCartData?.card?.info?.id || index}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
