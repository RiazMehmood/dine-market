"use client";
import SuccessBtn from "@/components/ui/successBtn";
import { CheckSquare } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearCart } from "../store/slices/cartSlice";
import { useDeleteDataInCartMutation } from "../store/slices/services/cartapi";

const SuccessPage = () => {
  const dispatch = useAppDispatch();
  dispatch(clearCart());
  const [deleteData, result] = useDeleteDataInCartMutation();

  const products = useAppSelector((state) => state.cart.products);
  products.map((item) => deleteData(item.product_id));

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
