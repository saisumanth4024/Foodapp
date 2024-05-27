import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  // const [showItems, setShowItems] = useState(false);
  // console.log(props);
  // console.log(props);
  const { showItems } = props;
  const { setShowIndex } = props;
  const { card } = props?.resData?.card;
  const { selectedIndex } = props;
  //   console.log(card);
  const { title } = card;
  //   console.log(title);
  const handleClick = () => {
    // setShowItems((prevState) => !prevState);
    console.log(setShowIndex);
    setShowIndex((prevIndex) => {
      return prevIndex === selectedIndex ? null : selectedIndex;
    });
  };

  return (
    <div className="w-7/12 bg-gray-100 mx-auto my-4 shadow-lg p-4 text-center">
      <div
        className="flex flex-row justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-lg font-bold font-serif">
          {title} ({card?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && (
        <ul>
          {card?.itemCards.map((eachItem) => (
            <li>
              <ItemList eachItem={eachItem} key={eachItem?.card?.info?.id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
