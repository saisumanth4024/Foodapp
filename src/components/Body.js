import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import resList from "../utils/mockdata";
import {useState,useEffect} from "react"


const Body = () => {
  const [listOfFilteredRestaruants,setListOfFilteredRestaurants]=useState(resList)
  const [filteredRestaurants,setFilteredRestuarants]=useState(resList)
  const [searchInputValue,setSearchInputValue]=useState("")
  // console.log(useState)
// console.log(<RestaurantCard/>)
   useEffect(()=>{
    console.log("body use effect called")
        fetchData()
   },[])

const fetchData=async()=>{
  try{
    const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4364341&lng=78.4415705&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
     const data=await response.json()
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
  const restaurant_list = "restaurant_grid_listing";
  for (const cardObj of arrayOfCards) {
    if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
      const resData =cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfFilteredRestraunt(resData);
      console.log(resData) 
    }
  }
  }
  catch(error){
    console.log(error)
  }
  
} 

console.log(listOfFilteredRestaruants)
    return listOfFilteredRestaruants.length===0?  <Shimmer/>: (
      <div className="body">
        <div className="filter">
        <div className="search">
        <input type="text" value={searchInputValue} placeholder="enter search value" className="search-text" onChange={(e)=>{
          setSearchInputValue(e.target.value)
        }}/>
        <button className="filter-btn" onClick={(e)=>{
          const searchFilteredList=listOfFilteredRestaruants.filter((eachItem)=>{
            console.log(eachItem.data.name.includes(searchInputValue))
            if(eachItem.data.name.toLowerCase().includes(searchInputValue.toLowerCase())){
              console.log(eachItem)
              return eachItem
            }
            // console.log(eachItem)
          })
          setFilteredRestuarants(searchFilteredList)
        }
        
        }>Search</button>
        </div>
          <button className="filter-btn" onClick={()=>{
            const filterRestaurants=resList.filter(singleRestuarant=>{
             if (singleRestuarant?.data?.avgRating>= 4.0){
              return singleRestuarant
              } 
            })
            setFilteredRestaurants(filterRestaurants)
          }}>Top Rated Restaurant</button>
      
        </div>
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => {
           {/* console.log(restaurant) */}
            return <RestaurantCard key={restaurant?.info?.id== undefined?"1":restaurant?.info?.id} resData={restaurant} />
          })}
        </div>
      </div>
    );
  };

  export default Body