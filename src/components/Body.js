import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import {useState} from "react"


const Body = () => {
  const [listOfFilteredRestaruants,setListOfFilteredRestaurants]=useState(resList)
  console.log(useState)
// console.log(<RestaurantCard/>)

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filterRestaurants=resList.filter(singleRestuarant=>{
             if (singleRestuarant?.data?.avgRating>= 4.0){
              return singleRestuarant
              } 
            })
            setListOfFilteredRestaurants(filterRestaurants)
          }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[4]} /> */}
          {listOfFilteredRestaruants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body