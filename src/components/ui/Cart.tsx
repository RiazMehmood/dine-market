<<<<<<< HEAD
"use client"

import { useEffect, useState } from "react";
=======
"use client";

import { useAppSelector } from "@/app/store/hooks";
>>>>>>> redux
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Cart = () => {
<<<<<<< HEAD
  const [totalQuantity, setTotalQuantity] = useState(0);

  // Function to fetch the total quantity from the database
  const fetchTotalQuantity = async () => {
    try {
      const res = await fetch("/api/cart");
      if (res.ok) {
        const data = await res.json();
        const mappedData = data.res.map((item:any) => item.quantity);
        const totalQuantity = mappedData.reduce((acc:number, curr:number) => acc + curr, 0);
        setTotalQuantity(totalQuantity);
      } else {
        console.error("Failed to fetch total quantity");
      }
    } catch (error) {
      console.error("An error occurred while fetching total quantity:", error);
    }
  };

  useEffect(() => {
    // Fetch the initial total quantity from the database
    fetchTotalQuantity();

    // Add an event listener to listen for changes in the localStorage
    const handleStorageChange = () => {
      // Call fetchTotalQuantity whenever the localStorage changes
      fetchTotalQuantity();
    };

    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
=======
  const [qty, setQty] = useState<number>(0);
  const productNos = useAppSelector((state) => state.cart.products.length);

  useEffect(() => {
    setQty(productNos);
  }, [productNos]);
>>>>>>> redux

  return (
    <Link href={"/cart"}>
      <div className="p-2 rounded-full relative w-10 bg-gray-300">
        <ShoppingCart className="" />
        <span className="absolute top-0 right-0 h-5 w-5 text-center rounded-full bg-[#f02d34] text-white">
<<<<<<< HEAD
          {totalQuantity}
=======
          {qty === undefined ? 0 : qty}
>>>>>>> redux
        </span>
      </div>
    </Link>
  );
};

export default Cart;
