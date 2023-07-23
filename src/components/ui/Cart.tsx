"use client";
import { useGetCartDataQuery } from "@/app/store/slices/services/cartapi";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Cart = () => {
  const [qty, setQty] = useState<any[]>([]);

  const { data } = useGetCartDataQuery("");
  
  useEffect(() => {

    if (data) {
      const cartQuantity = data.res;
      setQty(cartQuantity);
      console.log("data in db of cart", cartQuantity);
    }
  }, [data]);

  return (
    <Link href={"/cart"}>
      <div className="p-2 rounded-full relative w-10 bg-gray-300">
        <ShoppingCart className="" />
        <span className="absolute top-0 right-0 h-5 w-5 text-center rounded-full bg-[#f02d34] text-white">
          {qty.length == undefined ? 0 : qty.length}
        </span>
      </div>
    </Link>
  );
};

export default Cart;
