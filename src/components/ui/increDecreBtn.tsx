"use client"

import { useEffect } from "react";

interface IProps {
  id: string;
  num: number;
  setNum: (value: number) => void;
}

const IncreDecreBtn = ({ id, num, setNum }: IProps) => {
  const initialQuantity = 1; // Set the initial quantity value to 1

  useEffect(() => {
    // Load the initial quantity from localStorage when the component mounts
    const storedQuantity = localStorage.getItem(`quantity_${id}`);
    const initialNum = storedQuantity ? Number(storedQuantity) : initialQuantity;
    setNum(initialNum);
  }, [id, setNum]);

  const updateQuantityInDatabase = async (updatedQuantity: number) => {
    try {
      // Make the API call to update the quantity in the database
      const res = await fetch(`/api/cart?id=${id}&quantity=${updatedQuantity}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("An error occurred while updating product:", error);
    }
  };

  const incre = async () => {
    const updatedNum = num + 1;
    // Ensure the quantity doesn't exceed 10 (or any other desired maximum value)
    if (updatedNum <= 10) {
      setNum(updatedNum);
      // Update the quantity in the database as well
      updateQuantityInDatabase(updatedNum);
    }
  };

  const decre = async () => {
    // Ensure the quantity doesn't go below 1
    if (num > 1) {
      const updatedNum = num - 1;
      setNum(updatedNum);
      // Update the quantity in the database as well
      updateQuantityInDatabase(updatedNum);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={decre}
        className="w-8 h-8 hover:cursor-pointer rounded-full bg-slate-300 flex items-center justify-center font-bold"
      >
        -
      </button>
      <p>{num}</p>
      <button
        onClick={incre}
        className="w-8 h-8 hover:cursor-pointer rounded-full bg-slate-300 flex items-center justify-center font-bold"
      >
        +
      </button>
    </div>
  );
};

export default IncreDecreBtn;
