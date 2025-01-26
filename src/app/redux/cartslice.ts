import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  id: string;
  title: string;
  discountedPrice: number;
  quantity: number;
  image: string;
  colors: string[];
};

interface CartState {
  items: CartItem[];
}

// Check if there are saved items in localStorage
const loadCartFromLocalStorage = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(), // Load cart items from localStorage if they exist
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;  // Increase quantity if item already in cart
      } else {
        state.items.push(action.payload);  // Add new item to the cart
      }
      // Save to localStorage every time cart changes
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    updateItemQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;  // Update quantity
      }
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];  // Clear all items in the cart
      // Save empty cart to localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
