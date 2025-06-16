import { useState, useEffect } from "react";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
 
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

  return {
    listOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant
  };
};

export default useRestaurantList;