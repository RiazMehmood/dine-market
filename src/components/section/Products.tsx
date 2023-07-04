import React from "react";
import SectionHeadings from "../ui/SectionHeading";
import Image from "next/image";
import { PrimaryButton } from "../ui/PrimaryButton";
import Link from "next/link";

function Products() {
  return (
    <section className={"w-full mt-24"}>
      <SectionHeadings
        miniHeading={"Products"}
        mainHeading={"Check What We Have"}
      />
      <div className={"flex flex-wrap gap-5 justify-around items-center"}>
        <div className={"flex flex-col items-center justify-center gap-y-3"}>
          <Image
            src={"/product1.png"}
            alt={"Products Girl 1"}
            width={300}
            height={300}
          />
          <label className={"font-semibold"}>Brushed Raglan Sweatshirt</label>
          <label className={"font-semibold"}>$195</label>
        </div>
        <div className={"flex flex-col items-center justify-center gap-y-3"}>
          <Image
            src={"/product2.png"}
            alt={"Products Girl 2"}
            width={300}
            height={300}
          />
          <label className={"font-semibold"}>Cameryn Sash Tie Dress</label>
          <label className={"font-semibold"}>$545</label>
        </div>
      </div>
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
            <p className={"font-light"}>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <div className="mt-6">
              <Link href={"/allProducts"}>
                <PrimaryButton
                  classNames={"px-14"}
                  title={"See All Products"}
                  onClick={undefined}
                />
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Products;
