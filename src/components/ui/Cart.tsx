"use client"

import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Cart = () => {
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

  return (
    <Link href={"/cart"}>
      <div className="p-2 rounded-full relative w-10 bg-gray-300">
        <ShoppingCart className="" />
        <span className="absolute top-0 right-0 h-5 w-5 text-center rounded-full bg-[#f02d34] text-white">
          {totalQuantity}
        </span>
      </div>
    </Link>
  );
};

export default Cart;
