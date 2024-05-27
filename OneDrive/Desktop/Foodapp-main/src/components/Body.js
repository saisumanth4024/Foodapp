import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { WithRestaurantCard } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const [listOfFilteredRestaruants, setListOfFilteredRestaurants] =
    useState(resList);
  const [filteredRestaurants, setFilteredRestuarants] = useState(resList);
  const [searchInputValue, setSearchInputValue] = useState("");
  const RestaurantCardPromoted = WithRestaurantCard(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  const { setUserName, loggedInUser } = useContext(UserContext);
  // console.log(onlineStatus);
  // console.log(useState)
  // console.log(<RestaurantCard/>)
  useEffect(() => {
    // console.log("body use effect called")
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4364341&lng=78.4415705&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      // console.log(data)

      // const desiredData=data.find((card)=>
      //   card.card &&
      //   card.card.card &&
      //   card.card.card &&
      //   card.card.card.gridElements &&
      //   card.card.card.gridElements.infoWithStyle &&
      //   card.card.card.gridElements.infoWithStyle["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyles",

      // )

      // console.log(desiredData)
      const arrayOfCards = data.data.cards;
      const restaurant_list = "top_brands_for_you";
      for (const cardObj of arrayOfCards) {
        if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
          const resData =
            cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setListOfFilteredRestaurants(resData);
          setFilteredRestuarants(resData);
          console.log(resData);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline,please chheck your internet connection</h1>
    );
  // console.log(listOfFilteredRestaruants)
  return listOfFilteredRestaruants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-7">
      <div className="flex ml-16">
        <div className="flex p-4">
          <input
            type="text"
            value={searchInputValue}
            placeholder="enter search value"
            className="rounded-md border border-solid border-black px-2 mr-2 "
            onChange={(e) => {
              setSearchInputValue(e.target.value);
            }}
          />
          <button
            className="p-1 border cursor-pointer bg-green-50 border-solid border-black rounded-md"
            onClick={(e) => {
              const searchFilteredList = listOfFilteredRestaruants.filter(
                (eachItem) => {
                  console.log(eachItem.info.name.includes(searchInputValue));
                  if (
                    eachItem.data.name
                      .toLowerCase()
                      .includes(searchInputValue.toLowerCase())
                  ) {
                    console.log(eachItem);
                    return eachItem;
                  }
                  // console.log(eachItem)
                }
              );
              setFilteredRestuarants(searchFilteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex p-4">
          <button
            className="px-4 bg-gray-50 border cursor-pointer border-solid border-black rounded-md"
            onClick={() => {
              const filterRestaurants = resList.filter((singleRestuarant) => {
                console.log(singleRestuarant);
                if (singleRestuarant?.info?.avgRating >= 4.0) {
                  return singleRestuarant;
                }
              });
              setFilteredRestuarants(filterRestaurants);
            }}
          >
            Top Rated Restaurant
          </button>
          <input
            className="border rounded-md border-black p-2 mx-3"
            placeholder="enter a name"
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap px-16 w-[100%]">
        {filteredRestaurants.map((restaurant) => {
          {
            /* console.log(restaurant); */
          }
          return (
            <Link
              to={"/restaurants/" + restaurant?.info?.id}
              key={
                restaurant?.info?.id == undefined ? "11" : restaurant?.info?.id
              }
            >
              {restaurant?.info?.aggregatedDiscountInfoV3?.header ===
              undefined ? (
                <RestaurantCard resData={restaurant} />
              ) : (
                <RestaurantCardPromoted resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
