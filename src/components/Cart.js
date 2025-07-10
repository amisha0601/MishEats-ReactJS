import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem, addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const calculateItemSubtotal = (item) => {
    const price = item.card.info.price || item.card.info.defaultPrice || 0;
    return ((price / 100) * item.quantity).toFixed(2);
  };

  const totalAmount = cartItems
    .reduce((total, item) => {
      const price = item.card.info.price || item.card.info.defaultPrice || 0;
      return total + (price / 100) * item.quantity;
    }, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-nav py-10 px-4">
      <div className="text-center">
        <h1 className="text-3xl sm:text-3xl font-bold text-center mb-6 text-black">
          Checkout Cart
        </h1>

        <div className="w-full max-w-2xl mx-auto bg-gradient-to-t from-cardmix to-navbar rounded-2xl shadow-2xl/90 p-4 sm:p-6">
          {cartItems.length === 0 ? (
            <div className="py-14 px-6 text-center rounded-2xl border border-white/20 backdrop-blur-xl bg-white/10 shadow-xl text-white">
              <h2 className="text-2xl font-bold mb-3">Your Cart is Empty.</h2>
              <p className="text-base text-white/90">
                You haven’t added anything yet. Browse the menu and treat
                yourself.
              </p>
            </div>
          ) : (
            <>
              {/* Clear Button */}
              <button
                className="mb-6 px-3 py-1 bg-red-700 text-white text-sm rounded-md hover:bg-red-800 transition"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>

              {/* Item Cards */}
              {cartItems.map((item) => (
                <div
                  key={item.card.info.id}
                  className="p-3 mb-4 bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl/50 rounded-xl flex flex-col sm:flex-row justify-between items-start gap-4"
                >
                  {/* Left Side */}
                  <div className="sm:w-8/12 w-full text-left">
                    <h3 className="font-semibold text-sm text-gray-900 mb-1">
                      {item.card.info.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-800 mb-1">
                      ₹
                      {item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </p>
                    <p className="text-xs font-semibold text-gray-800 mb-1">
                      Subtotal: ₹{calculateItemSubtotal(item)}
                    </p>

                    {/* Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="px-2 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-700"
                        onClick={() => handleAddItem(item)}
                      >
                        +
                      </button>
                      <span className="font-semibold text-sm text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        className="px-2 py-1 text-sm text-white bg-red-700 rounded hover:bg-red-800"
                        onClick={() => handleRemoveItem(item.card.info.id)}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="sm:w-3/12 w-full">
                    <img
                      src={CDN_URL + item.card.info.imageId}
                      alt={item.card.info.name}
                      className="w-full h-[100px] object-cover rounded-lg shadow-lg/60"
                    />
                  </div>
                </div>
              ))}

              {/* Total Amount */}
              <div className="text-right text-lg font-bold text-white mb-4">
                Total: ₹{totalAmount}
              </div>

              {/* Proceed Button */}
              <div className="text-right mt-4">
                <button className="bg-navbar hover:bg-green-600 text-white font-bold px-6 py-2 rounded-xl transition text-sm sm:text-base">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
