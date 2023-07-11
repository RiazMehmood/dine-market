"use client";
import React, { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";

interface Props {
  price: number;
}

const Onclickfunc = ({ price }: Props) => {
  const [num, setNum] = useState(1);

  const incre = () => {
    if (num < 10) {
      setNum(num + 1);
    }
  };

  const decre = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  return (
    <div>
      <div className="flex gap-4 my-10 items-center">
        <p className="font-bold text-2xl ">Quantity:</p>
        <p
          onClick={decre}
          className="w-8 h-8 hover:cursor-pointer rounded-full bg-slate-300 flex items-center justify-center font-bold"
        >
          -
        </p>
        <p className="">{num}</p>
        <p
          onClick={incre}
          className="w-8 h-8 hover:cursor-pointer rounded-full bg-slate-300 flex items-center justify-center font-bold"
        >
          +
        </p>
      </div>
      <div className="flex gap-5">
        <div>
          <PrimaryButton
            classNames=""
            title="Add to Cart"
            onClick={undefined}
          />
        </div>
        <p className="font-bold text-2xl">${price * num}</p>
      </div>
    </div>
  );
};

export default Onclickfunc;
