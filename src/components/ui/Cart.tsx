import { totalCartItemSelector } from "@/store/features/CartSlice";
import { useAppSelector } from "@/store/store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Cart = () => {

  const totalItems = useAppSelector(totalCartItemSelector)
  
  return (
    <Link href={"/cart"}>
    <div className="p-2 rounded-full relative w-10 bg-gray-300">
      <ShoppingCart className="" />
      <span className="absolute top-0 right-0 h-5 w-5 text-center rounded-full bg-[#f02d34] text-white">
        {totalItems}
      </span>
    </div>
    </Link>
  );
};

export default Cart;
