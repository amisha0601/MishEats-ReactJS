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

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || "Restaurant Name Not Found";

  const itemCategories =
    resInfo?.cards
      ?.find((card) => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || [];

  return (
    <div className="menu max-w-[1200px] mx-auto px-4 mt-10 min-h-[80vh] text-center">
      <h1 className="font-bold my-8 text-3xl">{name}</h1>
      <p className="font-semibold text-m mb-6">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {itemCategories.map((category, index) => {
        const data = category?.card?.card || category?.card;
        return data ? (
          <RestaurantCategory
            key={data.title}
            data={data}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ) : null;
      })}
    </div>
  );
};

export default RestaurantMenu;