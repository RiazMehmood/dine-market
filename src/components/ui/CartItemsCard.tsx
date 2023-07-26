import { useEffect, useState } from "react";
import { Image as SImage } from "sanity";
import Image from "next/image";
import IncreDecreBtn from "./increDecreBtn";
import { urlForImage } from "../../../sanity/lib/image";
import DeleteBtn from "./deleteBtn";
import { useUpdataDataInCartMutation } from "@/app/store/slices/services/cartapi";
import { useAppSelector } from "@/app/store/hooks";

interface AllProducts {
  _id: string;
  image: SImage;
  productTitle: string;
  subtitle: string;
  price: number;
  productDetails: string;
  productCare: string[];
}

const CartItemsCard = ({ item }: { item: AllProducts }) => {
<<<<<<< HEAD
  const initialQuantity = 1; // Set the initial quantity value to 1

  const [num, setNum] = useState<number>(() => {
    // Load the initial quantity from localStorage when the component mounts
    const storedQuantity = localStorage.getItem(`quantity_${item._id}`);
    return storedQuantity ? Number(storedQuantity) : initialQuantity;
  });

  useEffect(() => {
    // Save the quantity to localStorage whenever it changes
    localStorage.setItem(`quantity_${item._id}`, String(num));
  }, [item._id, num]);
=======
  const id = item._id;

  const productArray = useAppSelector((state) => state.cart.products);
  const getProductQuantity = (productId: string) => {
    const product = productArray.find((p) => p.product_id === productId);
    return product ? product.quantity : 1;
  };
  const quantity = getProductQuantity(id);

  const [updateCart, { error, isSuccess, isLoading }] =
    useUpdataDataInCartMutation();

  useEffect(() => {
    if (item) {
      updateCart({ id, quantity });
    }
  }, [quantity]);
>>>>>>> redux

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between lg:justify-evenly lg:grid-cols-3 items-center py-2">
        <div className="flex justify-center md:justify-start lg:justify-around">
          <div className="">
            <Image
              src={urlForImage(item.image).url()}
              alt={item.productTitle}
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h1 className="text-xl py-4 text-[#753a32]">{item.productTitle}</h1>
            <DeleteBtn id={item._id} />
          </div>
          <h2 className="text-md py-4 font-semibold text-[#848b8e]">
            {item.subtitle}
          </h2>
          <p className="py-4 text-md font-semibold">Delivery Estimation</p>
          <p className="py-4 text-[#ffc82c] font-semibold">5 working days</p>
          <div className="flex items-center gap-4 justify-between">
<<<<<<< HEAD
            <p className="py-4 font-semibold">${item.price * num}</p>
            <div>
              <IncreDecreBtn num={num} setNum={setNum} id={item._id} />
            </div>
=======
            <p className="py-4 font-semibold">${item.price * quantity}</p>
            <IncreDecreBtn id={item._id} />
>>>>>>> redux
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsCard;
