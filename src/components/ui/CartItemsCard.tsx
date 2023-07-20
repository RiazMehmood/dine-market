"use client";

import { useEffect, useState } from "react";
import { Image as SImage } from "sanity";
import Image from "next/image";
import IncreDecreBtn from "./increDecreBtn";
import { urlForImage } from "../../../sanity/lib/image";
import DeleteBtn from "./deleteBtn";

interface AllProducts {
  _id: string;
  image: SImage;
  productTitle: string;
  subtitle: string;
  price: number;
  productDetails: string;
  productCare: string[];
}

const CartItemsCard = ({ item }: { item: AllProducts }) => {
  const [num, setNum] = useState(1);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between lg:justify-evenly lg:grid-cols-3 items-center py-2">
        <div className="flex justify-center md:justify-start lg:justify-around">
          <div className="">
            <Image
              src={urlForImage(item.image).url()}
              alt={item.productTitle}
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h1 className="text-xl py-4 text-[#753a32]">{item.productTitle}</h1>
            <DeleteBtn id={item._id} />
          </div>
          <h2 className="text-md py-4 font-semibold text-[#848b8e]">
            {item.subtitle}
          </h2>
          <p className="py-4 text-md font-semibold">Delievery Estimation</p>
          <p className="py-4 text-[#ffc82c] font-semibold">5 working days</p>
          <div className="flex items-center gap-4 justify-between">
            <p className="py-4 font-semibold">${item.price * num}</p>
            <IncreDecreBtn num={num} setNum={setNum} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsCard;
