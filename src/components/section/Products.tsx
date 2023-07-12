"use client";
import SectionHeadings from "../ui/SectionHeading";
import Image from "next/image";
import Carousel from "../ui/carousal";
import { client } from "../../../sanity/lib/client";
import { Image as SImage } from "sanity";
import { useEffect, useState } from "react";
import PromoFooter from "@/components/ui/promoFooter";

interface Carousal {
  key: string;
  price: string;
  image: SImage;
  productTitle: string;
}

const Products = () => {
  const [carousalItems, setCarousalItems] = useState<Carousal[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res: Carousal[] = await client.fetch(`*[_type=="product"]{
        _id, productTitle, image, price
      }`);
      setCarousalItems(res);
    }

    fetchData();
  }, []);

  // console.log("data for carousal", carousalItems);

  return (
    <section className={"w-full mt-24"}>
      <SectionHeadings
        miniHeading={"Products"}
        mainHeading={"Check What We Have"}
      />
      <Carousel items={carousalItems} />
      <div className={"mt-24"}>
        <div>
          <label
            className={"lg:text-5xl md:text-4xl text-3xl md:ml-2 font-semibold"}
          >
            Unique and Authentic Vintage Designer Jewellery
          </label>
        </div>
        {/* GRID */}
        <div className="mt-6 grid grid-cols-2 gap-y-4 gap-x-4 lg:grid-cols-4  place-items-center mx-4">
          <div className="lg:order-1">
            <label className={"font-semibold text-lg"}>
              Using Good Quality Materials
            </label>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="lg:order-2">
            <label className={"font-semibold text-lg"}>
              100% Handmade Products
            </label>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="lg:order-5">
            <label className={"font-semibold text-lg"}>
              Modern Fashion Design
            </label>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="lg:order-6">
            <label className={"font-semibold text-lg"}>
              Discount for Bulk Orders
            </label>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          {/* picture */}
          <div className="col-span-2 sm:col-span-1 sm:row-span-2 lg:order-3 lg:row-span-2 mt-4">
            <Image
              src={"/product3.png"}
              alt={"Products Girl 3"}
              width={300}
              height={300}
            />
          </div>
          {/* Picture text */}
          <div className="col-span-2 sm:col-span-1 sm:row-span-2 lg:order-4 lg:row-span-2">
            <PromoFooter />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Products;
