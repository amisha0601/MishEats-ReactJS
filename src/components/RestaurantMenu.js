import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || "Restaurant Name Not Found";

  const itemCards =
    resInfo?.cards
      ?.find((card) => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (card) => card.card?.card?.itemCards
      )?.card?.card?.itemCards || [];

  const itemCategories =
    resInfo?.cards
      ?.find((card) => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || [];

  // console.log(cuisines);

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-8 text-3xl">{name}</h1>
      <p className="font-semibold text-m">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {/* itemCategories accordions */}
      {itemCategories.map((category, index) => {
        {
          /* controlled component */
        }
        const data = category?.card?.card || category?.card;
        return data ? (
          <RestaurantCategory
            key={data.title}
            data={data}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ) : null;
      })}
    </div>
  );
};
export default RestaurantMenu;
