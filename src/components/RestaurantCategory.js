import React, { useState } from "react";
import ItemList from "./ItemList";
import { ChevronDown } from "lucide-react";

const RestaurantCategory = ({ data,showItems , setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  // // console.log(data);
  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  }
  return (
    <div>
      {/* Header */}
      <div className=" w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto my-6 shadow-2xl/70 shadow-navbar p-3 rounded-xl ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards?.length || 0})
          </span>
          <ChevronDown className="text-gray-700" />
        </div>

        {showItems && <ItemList items={data.itemCards}></ItemList>}
      </div>
    </div>
  );
};

export default RestaurantCategory;