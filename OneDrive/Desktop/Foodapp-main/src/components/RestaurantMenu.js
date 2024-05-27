import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  //    const [resInfo,setResInfo]=useState(null)
  const { resId } = useParams();
  // console.log(useParams());
  // console.log(resId);

  const resInfo = useRestuarantMenu(resId);
  // console.log(resInfo);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }
  // const {name}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  // const { name, price } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //     ?.itemCards[0]?.card?.info || {};
  const { cuisines, costForTwoMessages } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const { text } = resInfo?.cards[0]?.card?.card || {};
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info)
  // console.log(name)
  // console.log(
  //   resInfo?.resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (itemCategory) =>
        itemCategory.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  const setTheIndex = () => {
    setShowIndex();
  };

  return (
    <div className="flex flex-col justify-start items-center pt-3">
      <h1 className="font-bold text-2xl pt-2 my-3">{text}</h1>
      <p className="font-bold text-lg py-2">{cuisines.join(",")}</p>

      {/* <h3>Menu</h3>
      <ul style={{ margin: "10px", listStyleType: "none" }}>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs."} {item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
      {categories &&
        categories.map((eachItem, index) => (
          <RestaurantCategory
            resData={eachItem}
            key={eachItem?.card?.card?.title}
            showItems={index === showIndex && true}
            selectedIndex={index}
            setShowIndex={setShowIndex}
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
