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

  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isTopRatedClicked, setIsTopRatedClicked] = useState(false);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <WhenOffline />;


  return listOfRestaurants?.length === 0 ? (
    <div  className="min-h-[80vh] flex items-center justify-center">
      <Shimmer />
    </div>
  ) : (
    <div className="mt-10 ">
      <div className="body max-w-[1200px] mx-auto px-4 ">
        <div className="filter flex flex-col sm:flex-row gap-4 sm:gap-0">
          <div className="search m-4 p-4">
            <input
              data-testid="searchInput"
              type="text"
              placeholder="  Search restaurants"
              className="search-box text-navbar text-sm sm:text-base py-1 border-navbar border-1 shadow-2xl rounded-md mx-1"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={() => {
                handleSearch();
                setIsSearchClicked(!isSearchClicked);
              }}
              className={`text-navbar-text text-sm sm:text-base border-navbar border-2 shadow-2xl rounded-lg cursor-pointer p-1 mx-1 ${
                isSearchClicked ? "bg-navbar" : "bg-button"
              }`}
            >
              Search
            </button>
          </div>

          <div className="m-4 p-4">
            <button
              onClick={() => {
                handleTopRatedFilter();
                setIsTopRatedClicked(!isTopRatedClicked);
              }}
              className={`filter-btn text-navbar-text text-sm sm:text-base border-navbar border-2 shadow-2xl rounded-lg cursor-pointer p-1 ${
                isTopRatedClicked ? "bg-navbar" : "bg-button"
              }`}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>

        <div className="res-container shadow-@xl/90 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
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
