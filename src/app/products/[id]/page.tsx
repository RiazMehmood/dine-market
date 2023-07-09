'use client'
import { Image } from "sanity";
import { getProductData as data } from "../../../components/sanityData/fetch";
import { urlForImage } from "../../../../sanity/lib/image";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useState } from "react";

interface AllProducts {
  _id: string;
  alt: string;
  image: Image;
  productTitle: string;
  subtitle: string;
  price: number;
}

const getProductData = async (id: string) => {
  const getData = await data();
  return getData.filter((product: AllProducts) => product._id === id);
};

export default async function Page({ params }: { params: { id: string } }) {
  
  const [increment, setIncrement] = useState("0")
  const [decrement, setDecrement] = useState("0")


  const sizes: string[] = ["XS", "S", "M", "L", "XL"];
  const result: AllProducts[] = params?.id
    ? await getProductData(params.id)
    : [];


  return (
    <div className="bg-[#fcfcfc] w-full">
      {result.map((item) => (
        <div>
          <div className="flex flex-wrap m-9.5">
            <img
              src={urlForImage(item.image).url()}
              alt={item.productTitle}
              width={630}
              height={680}
              className="mx-6"
            />
            <div>
              <h1 className="font-bold font-sora text-4xl">
                {item.productTitle}
              </h1>
              <h2 className="text-[#c2c2c2] font-sora font-bold text-2xl">
                {item.subtitle}
              </h2>
              <h2 className="text-xl mt-10 font-medium">Select Size</h2>
              <div className="flex gap-5">
                {sizes.map((size) => (
                  <div className="">
                    <div className="font-bold bg-gray-300 mt-5 rounded-full w-10 h-10 flex justify-center items-center">
                      {size}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 my-10 items-center">
                <p className="font-bold text-2xl ">Quantity:</p>
                <p className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center font-bold">
                  -
                </p>
                <p className="">1</p>
                <p className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center font-bold">
                  +
                </p>
              </div>
              <div>
                <PrimaryButton
                  classNames=""
                  title="Add to Cart"
                  onClick={undefined}
                />
                <p>Price:</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
