import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  product_id: string;
  quantity: number;
  price: number;
}

interface CartState {
  products: Product[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.product_id === newProduct.product_id
      );

      if (existingProduct) {
        existingProduct.quantity += newProduct.quantity;
      } else {
        state.products.push(newProduct);
      }

      state.totalQuantity += newProduct.quantity;
      state.totalPrice += newProduct.quantity * newProduct.price;
    },
    deleteProductFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const productToDelete = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) => product.product_id === productToDelete.id
      );

      if (existingProductIndex !== -1) {
        const deletedProduct = state.products[existingProductIndex];
        state.totalQuantity -= deletedProduct.quantity;
        state.totalPrice -= deletedProduct.quantity * deletedProduct.price;
        state.products.splice(existingProductIndex, 1);
      }
    },
    incrementQuantity: (state, action: PayloadAction<{ productId: string }>) => {
      const { productId } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.product_id === productId
      );

      if (existingProduct) {
        existingProduct.quantity++;
        state.totalQuantity++;
        state.totalPrice += existingProduct.price;
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ productId: string }>) => {
      const { productId } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.product_id === productId
      );

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
        state.totalQuantity--;
        state.totalPrice -= existingProduct.price;
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addProductToCart,
  deleteProductFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
