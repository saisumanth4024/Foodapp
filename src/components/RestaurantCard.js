import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img src={CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h3>{name}</h3>
      {/* if you have an array in your JSON data just join them with gap and commas with (.join()) */}
      <h4>{cuisines.join(" , ")}</h4>
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

export default RestaurantCard;