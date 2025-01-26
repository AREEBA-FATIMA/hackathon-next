"use client";

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeItemFromCart, updateItemQuantity, clearCart, addItemToCart } from '../redux/cartslice';
import Link from 'next/link';
import Footer from '../[home]/footer/page';
import Header from '@/components/Header';

type CartItem = {
  id: string;
  title: string;
  discountedPrice: number;
  quantity: number;
  image: string;
  colors: string[];
};

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Handle item removal
  const handleRemoveItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  // Handle quantity change
  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity <= 0) return; // Prevent quantity from going below 1
    dispatch(updateItemQuantity({ id, quantity }));
  };

  // Handle cart clear
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Handle adding item to the cart (checks if it already exists)
  const handleAddItem = (item: CartItem) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // If the item exists, just update the quantity
      dispatch(updateItemQuantity({ id: item.id, quantity: existingItem.quantity + 1 }));
    } else {
      // If the item doesn't exist, add it to the cart
      dispatch(addItemToCart(item));
    }
  };

  // Calculate total price
  const getTotalPrice = (): number => {
    return cartItems.reduce((total: number, item: CartItem) => total + item.discountedPrice * item.quantity, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto p-6 max-w-7xl flex-grow">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl text-pink-500">🛒</div>
            <p className="text-xl text-gray-600 mt-4">Your cart is empty!</p>
            <p className="text-md text-gray-400 mb-6">Looks like you haven't added anything yet. Let's go shopping!</p>
            <Link href= '/shop'
                    className="w-2/6 px-3 py-3 text-xs bg-[#14a2f5] text-white font-medium hover:bg-blue-600"
                  >
                    Go to Shop
                  </Link>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.discountedPrice}`} className="bg-white border shadow-lg rounded-lg p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                    <button
                      className="text-red-600 hover:text-red-800 text-sm font-semibold"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">Colors: {item.colors.join(', ')}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      className="w-12 text-center border border-gray-300 rounded-md"
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    />
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Price: ${item.discountedPrice}</span>
                    <span className="text-lg font-semibold text-gray-800">Total: ${item.discountedPrice * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-6">
              <button
                className="bg-red-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-700 focus:outline-none"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <div className="mt-4 sm:mt-0 flex items-center space-x-6">
                <span className="text-xl font-semibold text-gray-800">Total: ${getTotalPrice().toFixed(2)}</span>
                <Link href="/checkout">
                <button
                    type="submit"
                    className=" px-3 py-3 text-xs bg-[#14a2f5] text-white font-medium hover:bg-blue-600"
                  >
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
