import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-3 m-3 border-b-2 border-gray-300 shadow-lg flex justify-between items-start"
        >
          {/* Left Content */}
          <div className="w-8/12 pr-4">
            <h3 className="font-semibold text-base text-gray-800 mb-1">
              {item.card.info.name}
            </h3>
            <p className="text-sm font-semibold text-gray-800 mb-1">
              ₹{item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
            </p>
            <p className="text-xs text-gray-600">
              {item.card?.info?.description}
            </p>
          </div>

          {/* Right Image */}
          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-[100px] object-cover rounded-lg shadow-md"
              
            />
            <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-semibold px-4 py-[2px] rounded-sm shadow-md hover:bg-green-700">ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
