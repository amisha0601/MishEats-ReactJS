import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  // quantity from cart
  const getQuantity = (id) => {
    const found = cartItems.find((i) => i.card.info.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <div className="px-2 sm:px-4">
      {items.map((item) => {
        const id = item.card.info.id;
        const quantity = getQuantity(id);

        return (
          <div
            key={id}
            className="p-3 m-3 border-b-2 border-gray-300 shadow-lg/40 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 bg-white/80"
          >
            {/* Left Content */}
            <div className="w-full sm:w-8/12 sm:pr-4 text-center sm:text-left">
              <h3 className="font-semibold text-base text-gray-800 mb-1">
                {item.card.info.name}
              </h3>
              <p className="text-sm font-semibold text-gray-800 mb-1">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              <p className="text-xs text-gray-600">
                {item.card?.info?.description}
              </p>
            </div>

            {/* Right Image and Controls */}
            <div className="w-full sm:w-3/12 relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-[100px] object-cover rounded-lg shadow-md"
              />

              {/*ADD Button */}
              {quantity === 0 ? (
                <button
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-green-600 text-navbar-text text-xs font-semibold px-4 py-[2px] rounded-sm shadow-md hover:bg-green-700"
                  onClick={() => dispatch(addItem(item))}
                >
                  ADD
                </button>
              ) : (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-navbar-text text-sm text-black font-bold  rounded-xl shadow-lg/30 border">
                  <button
                    onClick={() => dispatch(removeItem(id))}
                    className="text-red-600 font-bold px-2 hover:text-red-700"
                  >
                    -
                  </button>
                  <span className="px-1">{quantity}</span>
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="text-green-600 font-bold px-2 hover:text-green-700"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

