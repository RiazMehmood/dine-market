import { IProduct } from "@/lib/types";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartItem {
  product: IProduct;
  qty: number;
}

export interface CartState {
  cartItems: CartItem[];
}

// CartItem[{[{IProduct}], qty},{[IProduct],qty}]

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IProduct>) => {
      const item = state.cartItems.find(
        (el) => el.product._id === action.payload._id
      );
      if (item) {
        item.qty++;
      } else {
        state.cartItems.push({
          product: action.payload,
          qty: 1,
        });
      }
    },
    decrement: (state, action: PayloadAction<IProduct>) => {
      const item = state.cartItems.find(
        (el) => el.product._id === action.payload._id
      );
      if (item) {
        item.qty--;
        if (item.qty === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product._id !== action.payload._id
          );
        }
      }
    },
  },
});

const cartItems = (state: RootState) => state.cart.cartItems;
export const totalCartItemSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((total: number, curr: CartItem) => (total += curr.qty), 0)
);

export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, curr: CartItem) => (total += curr.qty * curr.product.price),
    0
  )
);

export const productQtySelector = createSelector(
  [cartItems, (cartItems, productID: number) => productID],
  (cartItems, productID) =>
    cartItems.find((el) => el.product._id === productID)?.qty
);

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
