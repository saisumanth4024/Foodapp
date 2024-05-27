import React from "react";
import { ITEM_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ eachItem }) => {
  //   console.log(eachItem);
  const { info } = eachItem?.card;
  //   console.log(info);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    //dispatch an action
    // console.log(info);
    dispatch(addItem(eachItem));
  };

  return (
    <div className="flex flex-col p-2 m-2 border-b-2 border-gray-200 items-start w-full">
      <div className="flex justify-between w-full ">
        <div className="flex flex-col items-start">
          <span className="text-lg font-semibold py-1">{info.name}</span>
          <span className="text-md mb-1">₹ {info.price / 100}</span>
        </div>
        <div className="flex flex-col relative">
          <img
            className="bg-cover w-[145px] h-[135px] py-2 rounded-3xl "
            src={ITEM_CDN_URL + info.imageId}
            alt="item-logo"
          />
          <button
            onClick={handleAddItem}
            className="absolute top-24 left-10 text-blue-400 border border-blue-300 py-2 px-4  bg-white shadow-lg rounded-lg text-lg font-bold"
          >
            Add +
          </button>
        </div>
      </div>
      <div>
        <p className="text-xs text-start">{info.description}</p>
      </div>
    </div>
  );
};

export default ItemList;
