
import { useState, useEffect } from "react";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:7000/api/restaurants");

      if (!response.ok) {
        throw new Error(`API failed with status: ${response.status}`);
      }

      const json = await response.json();

      const restaurants =
        json?.data?.cards?.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Fetch Restaurants Error:", error);
    }
  };

  return {
    listOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
  };
};

export default useRestaurantList;