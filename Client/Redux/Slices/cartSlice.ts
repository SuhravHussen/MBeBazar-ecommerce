import { createSlice } from '@reduxjs/toolkit';
import { iProduct } from '../../models/product.interface';

// Type for our state
export interface cartState {
  cartItems: Array<iProduct>;
}

// Initial state
const initialState: cartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = action.payload;
    },
    removeFromCart: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCartItems = (state: any) => state?.cart?.cartItems;
export default cartSlice.reducer;
