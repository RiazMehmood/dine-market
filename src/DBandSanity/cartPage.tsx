"use client";
import { useEffect, useState } from "react";
import { fetchSanityDataByIds } from "./sanityData";
import CartItemsCard from "@/components/ui/CartItemsCard";
import { Image as SImage } from "sanity";
import { ShoppingBag } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import {
  useGetCartDataQuery,
  useStripeCheckoutMutation,
} from "@/app/store/slices/services/cartapi";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { clearCart } from "@/app/store/slices/cartSlice";

interface Items {
  id: number;
  user_id: string;
  product_id: string;
  quantity: number;
}

interface AllProducts {
  _id: string;
  image: SImage;
  productTitle: string;
  subtitle: string;
  price: number;
  productDetails: string;
  productCare: string[];
}

const CartPage = () => {
  const [sanityData, setSanityData] = useState<AllProducts[]>([]);
  const [qty, setQty] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

  // {productName, productPrice, productQuantity}

  const productArray = useAppSelector((state) => state.cart.products);
  const getProductQuantity = (productId: string) => {
    const product = productArray.find((p) => p.product_id === productId);
    return product ? product.quantity : 1;
  };

  const { data, isLoading } = useGetCartDataQuery("");
  // console.log("sanity data to work", sanityData);
  const [stripeData, result] = useStripeCheckoutMutation();

  const dispatch = useAppDispatch();
  // const clearCartFunc = () => {
  //   dispatch(clearCart());
  // };
  const productNos = useAppSelector((state) => state.cart.totalQuantity);
  const price = useAppSelector((state) => state.cart.totalPrice);
  
  useEffect(() => {
    setQty(productNos);
    setTotalPrice(price);
    if (data) {
      const dataByIds = data.res.map((item: Items) => item.product_id);

      // Fetch product IDs from the database
      const fetchProductIds = async () => {
        try {
          // Fetch data from Sanity based on product IDs
          const idsData = await fetchSanityDataByIds(dataByIds);
          setSanityData(idsData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchProductIds();
    }
    sanityData.map((item) => {
      if (sanityData.length > 0) {
        setProductName(item.productTitle);
        setProductPrice(item.price);
        const quantity = getProductQuantity(item._id);
        setProductQuantity(quantity);
      }
    });
  }, [data, price, productNos, sanityData]);

  const body = {
    productName: productName,
    productPrice: productPrice,
    productQuantity: productQuantity,
  };
  useEffect(() => {
    // console.log("body sent into stripe Data",body)
  }, [sanityData]);

  const handleStripeCheckout = () => {
    try {
      stripeData(body);
      console.log(result);
    } catch (error) {}
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {sanityData.length == 0 ? (
        <div className="flex flex-col items-center my-20">
          <div className="font-sora text-2xl font-bold w-[90%]"></div>
          <div>
            <ShoppingBag width={100} height={200} />
          </div>
          <div>
            <p className="font-sora text-2xl font-bold text-center md:text-4xl">
              Your Shopping Bag is Empty
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-6 my-10 font-sora items-center mx-3 border-b">
            <div className="col-span-2 order-1">
              {sanityData.map((item) => (
                <div key={item._id}>
                  <CartItemsCard item={item} />
                </div>
              ))}
            </div>
            <div className="bg-[#fbfcff] lg:h-[100%] px-1 ml-4 order-last my-6">
              <div className="inline-grid w-full">
                <p className="font-bold my-4 text-xl">Order summary</p>
                <div className="flex my-4 justify-between items-center">
                  <p className="text-xl">Quantity</p>
                  <p>{qty == undefined ? 0 : qty} Product</p>
                </div>
                <div className="flex my-4 justify-between items-center">
                  <p className="text-xl">Subtotal</p>
                  <p className="">${totalPrice}</p>
                </div>
                <PrimaryButton
                  classNames=""
                  onClick={handleStripeCheckout}
                  title="Process to Checkout"
                />
                {/* <PrimaryButton
                  classNames=""
                  onClick={clearCartFunc}
                  title="Clear Cart"
                /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
