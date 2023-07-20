// pages/index.tsx (or your desired page or API route)
"use client";
import { useEffect, useState } from "react";
import { fetchSanityDataByIds } from "./sanityData";
import CartItemsCard from "@/components/ui/CartItemsCard";
import { Image as SImage } from "sanity";

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
  }, []);
  const getProductData = async () => {
    try {
      const res = await fetch("/api/cart");
      if (res.ok) {
        const result = await res.json();
        console.log("data in result of db", result.res);
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
  console.log(" Data Sent to sanity ", sanityData);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {sanityData.map((item) => (
        <div key={item._id}>
          <CartItemsCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default CartPage;
