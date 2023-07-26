import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, updateQuantity, retrieveDataFromDB } from "../store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";


interface Product {
    id: number;
    price: number;
    product_id: string;
    quantity: number;
  }

const ProductComponent: React.FC = () => {


  const products = useAppSelector((state) => state.cart.products);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Fetch data from the database and update the cart state
    dispatch(retrieveDataFromDB());
  }, [dispatch]);

  const handleAddToCart = (product: Product) => {
    dispatch(addProductToCart(product));
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
  };

  return (<div>
    
  </div>
  );
};
