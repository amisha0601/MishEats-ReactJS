import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useRestaurantFilter from "../utils/useRestaurantFilter";
import useOnlineStatus from "../utils/useOnlineStatus";
import WhenOffline from "./WhenOffline";
import { useState } from "react";

const Body = () => {
  const { listOfRestaurants } = useRestaurantList();

  const {
    searchText,
    setSearchText,
    filteredRestaurant,
    handleSearch,
    handleTopRatedFilter,
  } = useRestaurantFilter(listOfRestaurants);

  // console.log("Body Rendered",listOfRestaurants)

  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isTopRatedClicked, setIsTopRatedClicked] = useState(false);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <WhenOffline />;

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" mt-10">
      <div className="body max-w-[1200px] mx-auto ">
        <div className="filter flex">
          <div className="search m-4 p-4 ">
            <input
              type="text"
              placeholder="Search a restaurant you want..."
              className="search-box text-navbar py-1 border-navbar border-1 shadow-2xl rounded-md mx-1 "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                handleSearch();
                setIsSearchClicked(!isSearchClicked);
              }}
              className={`p-1 text-navbar-text p border-navbar border-2 shadow-2xl rounded-lg cursor-pointer 
            ${isSearchClicked ? "bg-navbar" : "bg-button"}`}
            >
              Search
            </button>
          </div>

          <div className="m-4 p-4 ">
            <button
              onClick={() => {
                handleTopRatedFilter();
                setIsTopRatedClicked(!isTopRatedClicked);
              }}
              className={`filter-btn  text-navbar-text border-navbar border-2 shadow-2xl rounded-lg cursor-pointer p-1
            ${isTopRatedClicked ? "bg-navbar" : "bg-button"}`}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>

        <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
