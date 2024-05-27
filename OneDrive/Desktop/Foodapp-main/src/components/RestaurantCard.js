import React from "react";
import { useParams, Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resId } = useParams();

  const { resData } = props;
  // console.log("restaurant", resData?.info);
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;

  return (
    <div className="flex-col p-3 m-2 w-[250px] content-start bg-red-50 sm:bg-yellow-5 hover:bg-gray-200">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="h-[250px] w-[100%] bg-cover rounded-md"
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      {/* if you have an array in your JSON data just join them with gap and commas with (.join()) */}
      <h4 className="font-medium">{cuisines.join(" , ")}</h4>
      <h4>⭐{avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
  // return (
  //   <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
  //     <img
  //       src={`${CDN_URL}e33e1d3ba7d6b2bb0d45e1001b731fcf`}
  //       alt="res-logo"
  //     />
  //     <h3>{resData?.info?.name}</h3>
  //     {/* if you have an array in your JSON data just join them with gap and commas with (.join()) */}
  //     <h4> {resData=== undefined?"north,biryani,roti":"north,biryani,roti"}</h4>
  //     <h4>⭐3.9</h4>
  //     <h4>"200 for two"</h4>
  //   </div>
  // );
};

export const WithRestaurantCard = (RestaurantCard) => {
  return (props) => {
    const { restaurant } = props;
    console.log("with promoted");
    return (
      <div>
        <label className="absolute bg-black text-white m-2 px-4 py-2 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
