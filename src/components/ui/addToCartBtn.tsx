"use client";
import React, { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import IncreDecreBtn from "./increDecreBtn";
import { Image as SImage } from "sanity";

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

  const handleCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: props._id,
      }),
    });
    console.log("add to cart clicked");
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
