import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem, addItem } from "../utils/cartSlice";
import toast from "react-hot-toast";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    toast("Cart cleared 🧹");
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    toast("Item removed ❌");
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success("Item quantity increased");
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
    <div className="min-h-screen bg-nav py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6 text-black">Checkout Cart</h1>

        <div className="w-11/12 sm:w-8/12 lg:w-6/12 mx-auto bg-gradient-to-t from-cardmix to-button rounded-2xl shadow-2xl/90 p-6">
          {cartItems.length === 0 ? (
            <div className="text-navbar-text font-medium py-10 shadow-2xl">
              <p className="text-2xl mb-2">
                🥗 <strong>Lonely bowl.</strong> 🍽️ <strong>Empty plate. Hungry soul?</strong>
              </p>
              <p className="text-base">Fill the feast with just a few yummy clicks.</p>
            </div>
          ) : (
            <>
              {/* Clear Button */}
              <button
                className="mb-6 px-3 py-1 bg-red-700 text-navbar-text rounded-md hover:bg-red-800 transition"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>

              {/* Item Cards */}
              {cartItems.map((item) => (
                <div
                  key={item.card.info.id}
                  className="p-3 mb-4 bg-navbar-text border border-gray-200 shadow-xl/40 rounded-xl flex justify-between items-start"
                >
                  {/* Left Side */}
                  <div className="w-8/12 pr-4 text-left">
                    <h3 className="font-semibold text-base text-gray-900 mb-1">
                      {item.card.info.name}
                    </h3>
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      ₹
                      {item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </p>
                    <p className="text-sm text-gray-800 mb-1">
                      Subtotal: ₹{calculateItemSubtotal(item)}
                    </p>

                    {/* + - Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="px-3 py-1 text-white bg-green-600 rounded hover:bg-green-700"
                        onClick={() => handleAddItem(item)}
                      >
                        +
                      </button>
                      <span className="font-semibold text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        className="px-3 py-1 text-white bg-red-700 rounded hover:bg-red-800"
                        onClick={() => handleRemoveItem(item.card.info.id)}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="w-3/12">
                    <img
                      src={CDN_URL + item.card.info.imageId}
                      alt={item.card.info.name}
                      className="w-full h-[100px] object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              ))}

              {/* Total Amount */}
              <div className="text-right text-lg font-bold text-navbar-text mb-4">
                Total: ₹{totalAmount}
              </div>

              {/* ✅ Updated Proceed Button */}
              <div className="text-right mt-4">
                <button className="bg-button hover:bg-green-600 text-navbar-text font-bold px-6 py-2 rounded-xl transition">
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

