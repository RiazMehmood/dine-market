"use client"

import { useAppDispatch, useAppSelector } from "../../src/store/store";
import { PrimaryButton } from "./PrimaryButton";
import { IProduct } from "@/lib/types";
import { decrement, increment, productQtySelector } from "../../src/store/features/CartSlice";
import QtyBtn from "./QtyBtn";

interface Props {
  product: IProduct;
}

export const AddtoCart = ({product}: Props) => {

  const handleCart = async ()=>{
    dispatch(increment(product))
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: product._id
      })
    })
    const result = await res.json()
    console.log(result)
  }
  const qty = useAppSelector((state) =>
    productQtySelector(state, product._id)
  );

  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div>
        <PrimaryButton
          classNames=""
          title="Add To Cart"
          onClick={handleCart}
        />
      </div>
    );
  return <QtyBtn onDecrease={() => dispatch(decrement(product))} onIncrease={() => dispatch(increment(product))} qty={qty} />;
};
