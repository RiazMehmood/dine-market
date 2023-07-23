"use client";
import React, { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import IncreDecreBtn from "./increDecreBtn";
import { Image as SImage } from "sanity";
import { usePostDataInCartMutation } from "@/app/store/slices/services/cartapi";

interface AllProducts {
  _id: string;
  alt: string;
  image: SImage;
  productTitle: string;
  subtitle: string;
  price: number;
  productDetails: string;
  productCare: string[];
}

const Onclickfunc = (props: AllProducts) => {
  const [num, setNum] = useState(1);

  const [updateCart, { error, isSuccess }] = usePostDataInCartMutation();

  const handleCart = () => {
    try {
      const inputString = props._id;
      const jsonobj = {
        product_id: inputString
      }
      const id = JSON.stringify(jsonobj)
      updateCart(id);
      // console.log("id recieved as data", props._id);
    } catch (err) {
      console.log("isSuccess", isSuccess);
      console.log("error update cart", error);
    }
  };

  return (
    <div>
      <div className="flex gap-4 my-10 items-center">
        <p className="font-bold text-2xl ">Quantity:</p>
        <IncreDecreBtn num={num} setNum={setNum} />
      </div>
      <div className="flex gap-5">
        <div>
          <PrimaryButton
            classNames=""
            title="Add to Cart"
            onClick={handleCart}
          />
        </div>
        <p className="font-bold text-2xl">${props.price * num}</p>
      </div>
    </div>
  );
};

export default Onclickfunc;
