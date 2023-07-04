import { IProduct } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import QtyBtn from "./QtyBtn";
import {
  decrement,
  increment,
  productQtySelector,
} from "@/store/features/CartSlice";

interface CartItem {
  product: IProduct;
  qty: number;
}

const CartItemsCard = (props: any) => {
  console.log(props)
  const dispatch = useAppDispatch();
  // const qty = useAppSelector((state) =>
  //   productQtySelector(state, props.product._id)
  // );
  return (
    <div className="grid grid-cols-4 items-center py-2 border-b">
      {/* <Image
        src={"/event1.webp"}
        alt={props.product.title}
        width={200}
        height={150}
      />
      <p className="text-slate-600 text-center">
        "cart title"{props.product.title}
      </p>
      <div className="flex flex-col justify-center items-center gap-3">
        <p>"cart price"{props.product.price}$</p>
        <p>&#xd7;</p>
        <QtyBtn
          onDecrease={() => dispatch(decrement(props.product))}
          onIncrease={() => dispatch(increment(props.product))}
          qty={qty}
        />
      </div>
      <p className="text-center">{qty * props.product.price}</p> */}
    </div>
  );
};

export default CartItemsCard;
