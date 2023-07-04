"use client";
import { totalPriceSelector } from "@/store/features/CartSlice";
import CartItemsCard from "../../../components/ui/CartItemsCard";
import { useAppSelector } from "@/store/store";

const Page = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(totalPriceSelector);
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.product._id}>{<CartItemsCard cartItems={item} key={item.product._id} />}</div>
      ))}
      <p className="text-slate-600">
        Total Price:
        <span className="text-slate-900 font-bold">{totalPrice}$</span>
      </p>
    </div>
  );
};

export default Page;
