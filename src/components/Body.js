import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useRestaurantFilter from "../utils/useRestaurantFilter";
import useOnlineStatus from "../utils/useOnlineStatus";
import WhenOffline from "./WhenOffline";

const Body = () => {
  const { listOfRestaurants } = useRestaurantList();

  const {
    searchText,
    setSearchText,
    filteredRestaurant,
    handleSearch,
    handleTopRatedFilter,
  } = useRestaurantFilter(listOfRestaurants);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
    <WhenOffline/>
  );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleTopRatedFilter}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
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
  );
};

export default Body;
