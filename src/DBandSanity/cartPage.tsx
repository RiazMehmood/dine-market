"use client";
import { useEffect, useState } from "react";
import { fetchSanityDataByIds } from "./sanityData";
import CartItemsCard from "@/components/ui/CartItemsCard";
import { Image as SImage } from "sanity";
import { ShoppingBag } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    getProductData();
  }, [sanityData]);

  const getProductData = async () => {
    try {
      const res = await fetch("/api/cart");
      if (res.ok) {
        const result = await res.json();
        const DBfilteredData = result.res.map((item: Items) => item.product_id);
        setData(DBfilteredData);
      } else {
        console.log("Failed to Fetch Data");
      }
    } catch (error) {
      console.log("An Error Occured", error);
    }
  };

  useEffect(() => {
    // Fetch product IDs from the database
    const fetchProductIds = async () => {
      try {
        const productIds = data;

        // Fetch data from Sanity based on product IDs
        const idsData = await fetchSanityDataByIds(productIds);
        setSanityData(idsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProductIds();
  }, [data]);

  if (loading) {
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
                  <p>2 Product</p>
                </div>
                <div className="flex my-4 justify-between items-center">
                  <p className="text-xl">Subtotal</p>
                  <p className="">$123</p>
                </div>
                <PrimaryButton
                  classNames=""
                  onClick={undefined}
                  title="Process to Checkout"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
