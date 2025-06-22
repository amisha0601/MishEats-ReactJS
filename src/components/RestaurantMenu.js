import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

    console.log(cuisines);

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-8 text-3xl">{name}</h1>
      <p className="font-semibold text-m">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {/* itemCategories accordions */}
      {itemCategories.map((category, index) => {
  const data = category?.card?.card || category?.card;
  return data ? (
    <RestaurantCategory key={index} data={data} />
  ) : null;
})}
    
    </div>
  );
};
export default RestaurantMenu;
