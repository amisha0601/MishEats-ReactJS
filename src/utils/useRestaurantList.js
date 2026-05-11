import { useState, useEffect } from "react";

import restaurants from "../utils/mockData/restaurants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  }, []);

  return {
    listOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
  };
};

export default useRestaurantList;