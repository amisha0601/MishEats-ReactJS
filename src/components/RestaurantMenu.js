
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Shimmer />
      </div>
    );
  }

  const restaurantCard = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  );

  const restaurantInfo = restaurantCard?.card?.card?.info || {};

  const {
    name = "Restaurant Name",
    cuisines = [],
    costForTwoMessage = "N/A",
  } = restaurantInfo;

  const categories =
    resInfo?.cards?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCategories = categories.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="menu max-w-[1200px] mx-auto px-4 mt-10 min-h-[80vh] text-center">
      <h1 className="font-bold my-8 text-3xl">{name}</h1>

      <p className="font-semibold text-m mb-6">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {itemCategories.map((category, index) => {
        const data = category?.card?.card;

        return (
          <RestaurantCategory
            key={data?.title || index}
            data={data}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;