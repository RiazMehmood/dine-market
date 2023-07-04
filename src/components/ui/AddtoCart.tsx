"use client"
import { PrimaryButton } from "./PrimaryButton";
import { IProduct } from "@/lib/types";
import QtyBtn from "./QtyBtn";

interface Props {
  product: IProduct;
}

export const AddtoCart = ({product}: Props) => {

  const handleCart = async ()=>{
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: product._id
      })
    })
    const result = await res.json()
    console.log(result)
  }

  const qty = 5

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
  return <QtyBtn onDecrease={() =>{}} onIncrease={() => {}} qty={5} />;
};
