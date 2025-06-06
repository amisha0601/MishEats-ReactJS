import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
  const [searchText,setSearchText] = useState('');

  useEffect(() => {   
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurants =
  json?.data?.cards?.find(
    (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
  )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  setListOfRestaurants(restaurants);
  setFilteredRestaurant(restaurants);

  
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
  
      <div className="filter">
          <div className="search">
          <input 
          type="text" 
           placeholder="Search a restaurant you want..."
          className="search-box"  value = {searchText} onChange={(e) => {
           setSearchText(e.target.value);
          }}
          />
          <button onClick={() => {
           console.log(searchText);

           const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
           );
           setFilteredRestaurant(filteredRestaurant); 

          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => parseFloat (res.info.avgRating) > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
 
     <div className="res-container">
     
        {filteredRestaurant.map((restaurant) => (
           <Link
            key={restaurant.info.id} 
            to={"/restaurants/"+ restaurant.info.id}>
           <RestaurantCard  resData={restaurant} />
           </Link> 
        ))}
      </div>
     
    </div>
  );
};

export default Body;
