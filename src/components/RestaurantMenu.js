import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { MENU_API } from "../utils/constants.js";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API    
     + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

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
