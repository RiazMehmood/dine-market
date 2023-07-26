"use client";

import { useAppSelector } from "@/app/store/hooks";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Cart = () => {
  const [qty, setQty] = useState<number>(0);
  const productNos = useAppSelector((state) => state.cart.products.length);

  useEffect(() => {
    setQty(productNos);
  }, [productNos]);

  return (
    <Link href={"/cart"}>
      <div className="p-2 rounded-full relative w-10 bg-gray-300">
        <ShoppingCart className="" />
        <span className="absolute top-0 right-0 h-5 w-5 text-center rounded-full bg-[#f02d34] text-white">
          {qty === undefined ? 0 : qty}
        </span>
      </div>
    </Link>
  );
};

export default Cart;
