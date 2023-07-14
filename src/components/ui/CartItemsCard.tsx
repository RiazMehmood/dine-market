"use client"

import { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import IncreDecreBtn from "./increDecreBtn";



const CartItemsCard = (props: any) => {
  const [num, setNum] = useState(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between lg:justify-evenly lg:grid-cols-3 items-center py-2">
      <div className="flex justify-center md:justify-start lg:justify-around">
        <div className="bg-green-500 w-48 h-52 rounded-md">
          <Image src={"/event1.webp"} alt="" width={200} height={200} />
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between">
          <h1 className="text-md py-4 text-[#753a32]">
            Cameryn Sash Tie Dress
          </h1>
          <Trash2 />
        </div>
        <h2 className="text-md py-4 font-semibold text-[#848b8e]">Dress</h2>
        <p className="py-4 text-md font-semibold">Delievery Estimation</p>
        <p className="py-4 text-[#ffc82c] font-semibold">5 working days</p>
        <div className="flex items-center gap-4 justify-between">
          <p className="py-4 font-semibold">${530 * num}</p>
          <IncreDecreBtn num={num} setNum={setNum} />
        </div>
      </div>
    </div>
  );
};

export default CartItemsCard;
