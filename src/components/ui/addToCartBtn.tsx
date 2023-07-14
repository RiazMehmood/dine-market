"use client";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { client } from "../../../sanity/lib/client";
import IncreDecreBtn from "./increDecreBtn";

interface Props {
  price: number;
}

interface Promo {
  _id: string;
}

const Onclickfunc = ({ price }: Props) => {
  const [promoData, setPromoData] = useState<Promo[]>([]);
  const [num, setNum] = useState(1);

  useEffect(() => {
    const fetchPromoData = async () => {
      const data: Promo[] = await client.fetch(`*[_type=="promotions"]`);
      setPromoData(data);
    };

    fetchPromoData();
  }, []);

  const handleCart = async () => {
    // const res = await fetch("/api/cart", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     product_id: promoData[0]._id,
    //   }),
    // });
    // const result = await res.json();
    console.log("add to cart clicked");
  };

  return (
    <div>
      <div className="flex gap-4 my-10 items-center">
        <p className="font-bold text-2xl ">Quantity:</p>
        <IncreDecreBtn num={num} setNum={setNum} />
      </div>
      <div className="flex gap-5">
        <div>
          <PrimaryButton
            classNames=""
            title="Add to Cart"
            onClick={handleCart}
          />
        </div>
        <p className="font-bold text-2xl">${price * num}</p>
      </div>
    </div>
  );
};

export default Onclickfunc;
