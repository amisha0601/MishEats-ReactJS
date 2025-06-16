import { useState, useEffect } from "react";

const useRestaurantFilter = (listOfRestaurants) => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

 useEffect(() => {
    setFilteredRestaurant(listOfRestaurants);
  }, [listOfRestaurants]);

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  const handleTopRatedFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => parseFloat(res.info.avgRating) > 4
    );
    setFilteredRestaurant(filteredList);
  };

  return {
    searchText,
    setSearchText,
    filteredRestaurant,
    handleSearch,
    handleTopRatedFilter,
  };
};

export default useRestaurantFilter;
