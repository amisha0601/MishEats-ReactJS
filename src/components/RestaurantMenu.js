
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";


const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer/>;

  const { name , cuisines , cloudinaryImageId , costForTwoMessage ,  } = resInfo?.cards[2]?.card?.card?.info || "Restaurant Name Not Found"

    const itemCards =
  resInfo?.cards
    ?.find((card) => card.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.find((card) => card.card?.card?.itemCards)
    ?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage} </p>
      <h2>Menu</h2>
      <ul> 
      {itemCards.map((item) =>(
      <li key={item.card.info.id} >
      {item.card.info.name} - {" ₹ "} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
      </li>))}
      </ul>
     
    </div>
  );
};
export default RestaurantMenu;
