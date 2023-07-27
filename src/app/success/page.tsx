"use client";
import SuccessBtn from "@/components/ui/successBtn";
import { CheckSquare } from "lucide-react";
import { useAppDispatch } from "../store/hooks";
import { clearCart } from "../store/slices/cartSlice";
import { useDeleteAllDataMutation } from "../store/slices/services/cartapi";
import { useEffect } from "react";

const SuccessPage = () => {
  const dispatch = useAppDispatch();
  const [deleteData, result] = useDeleteAllDataMutation();

  useEffect(() => {
    dispatch(clearCart());
    deleteData("");
  }, [])


  return (
    <>
      <div className="flex flex-col items-center my-20">
        <div className="font-sora text-2xl font-bold w-[90%]"></div>
        <div>
          <CheckSquare width={100} height={200} />
        </div>
        <div>
          <p className="font-sora text-2xl font-bold text-center md:text-4xl">
            Your Order Submitted Successfully
          </p>
        </div>
        <SuccessBtn />
      </div>
    </>
  );
};

export default SuccessPage;
