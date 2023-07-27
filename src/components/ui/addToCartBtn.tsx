"use client";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import IncreDecreBtn from "./increDecreBtn";
import {
  useGetCartDataQuery,
  usePostDataInCartMutation,
} from "@/app/store/slices/services/cartapi";
import AddToCartToast from "./addToCartToast";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addProductToCart } from "@/app/store/slices/cartSlice";
import { AllProducts, AddToCartItems } from "@/lib/types";


const Onclickfunc = (item: AllProducts) => {
  const [pid, setPid] = useState("");
  const dispatch = useAppDispatch();
  const productArray = useAppSelector((state) => state.cart.products);
  const getProductQuantity = (productId: string) => {
    const product = productArray.find((p) => p.product_id === productId);
    return product ? product.quantity : 1;
  };
  const quantity = getProductQuantity(item._id);

  const { data } = useGetCartDataQuery("");
  const [updateCart, { error, isSuccess, isLoading }] =
    usePostDataInCartMutation();
  const addProductToStore = () => {
    if (item) {
      const products = {
        name: item.productTitle,
        product_id: item._id,
        quantity: quantity,
        price: item.price,
      };
      dispatch(addProductToCart(products));
    }
  };

  useEffect(() => {
    if (data) {
      const productId = data.res;
      const ids = productId.map((item: AddToCartItems) => item.product_id);
      setPid(ids);
    }
  }, [data]);

  const handleCart = () => {
    if (pid == item._id) {
      console.log("Product already added");
    } else {
      try {
        const inputString = item._id;
        const jsonobj = {
          product_id: inputString,
        };
        const id = JSON.stringify(jsonobj);
        updateCart(id);
      } catch (err) {
        console.log("error update cart", error);
      }
    }
    addProductToStore();
  };

  return (
    <div>
      <div className="flex gap-4 my-10 items-center">
        <p className="font-bold text-2xl ">Quantity:</p>
        <IncreDecreBtn id={item._id} />
      </div>
      <div className="flex gap-5">
        <div>
          <AddToCartToast>
            <PrimaryButton
              classNames=""
              title={isLoading ? "Adding to Cart" : "Add to Cart"}
              onClick={handleCart}
            />
          </AddToCartToast>
        </div>
        <p className="font-bold text-2xl">${item.price * quantity}</p>
      </div>
    </div>
  );
};

export default Onclickfunc;
