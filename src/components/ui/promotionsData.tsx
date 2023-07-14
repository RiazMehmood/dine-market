"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeadings from "../ui/SectionHeading";
import { Image as SImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import { SyncLoader } from "react-spinners";
import { client } from "../../../sanity/lib/client";

interface Promo {
  _id: string;
  cardCurrentPrice3: number;
  cardCurrentPrice4: number;
  cardImage1: SImage;
  cardImage3: SImage;
  cardImage4: SImage;
  cardPreviousPrice3: number;
  cardPreviousPrice4: number;
  cardPromoCode2: string;
  cardSubtitle1: string;
  cardSubtitle2: string;
  cardTitle1: string;
  cardTitle2: string;
  cardTitle3: string;
  cardTitle4: string;
  promoFooter: string;
}

const PromotionsData = () => {
  const [promoData, setPromoData] = useState<Promo[]>([]);

  useEffect(() => {
    // Fetch promo data from an asynchronous source
    const fetchPromoData = async () => {
      try {
        const data: Promo[] = await client.fetch(`*[_type=="promotions"]`);
        setPromoData(data);
      } catch (error) {
        console.error("Failed to fetch promo data:", error);
      }
    };

    // Fetch promo data when the component mounts
    fetchPromoData();
  }, []);

  // Add a check for empty promoData array
  if (promoData.length === 0) {
    return (
      <div className="flex justify-center text-2xl my-24">
        <SyncLoader color={"#123abc"} loading={true} />
      </div>
    );
  }

  return (
    <>
      <section className={"mt-14"}>
        <SectionHeadings
          miniHeading={"Promotions"}
          mainHeading={"Our Promotion Events"}
        />
        <div
          className={
            "grid grid-cols-1 items-center md:grid-cols-2 md:mx-4 mx-2 w-[95%] gap-4"
          }
        >
          <div className={"flex flex-col md:col-span-2 justify-center gap-4 "}>
            {/* 60% off */}
            <div
              className={
                "h-auto flex flex-col md:flex-row md:justify-around justify-center items-center bg-gray-300"
              }
            >
              <div>
                {/* Promo title and subtitle */}
                <label
                  className={
                    "block font-sora font-semibold md:text-3xl md:font-bold text-xl"
                  }
                >
                  {promoData[0]?.cardTitle1}
                </label>
                <label className={"block"}>{promoData[0]?.cardSubtitle1}</label>
              </div>
              <div>
                {/* Promo image */}
                <Image
                  src={urlForImage(promoData[0].cardImage1).url()}
                  alt={promoData[0]?.cardTitle1}
                  width={300}
                  height={250}
                />
              </div>
            </div>

            {/* 30% off */}
            <div
              className={
                "h-[250px] flex flex-col items-center justify-center flex-grow gap-y-3 bg-gray-900"
              }
            >
              <label className={"text-3xl text-white md:text-5xl font-bold"}>
                {promoData[0]?.cardTitle2}
              </label>
              <label className={"text-sm text-white"}>
                {promoData[0]?.cardSubtitle2}
              </label>
              <label
                className={
                  "text-lg tracking-widest text-white bg-gray-500 px-4 py-1 rounded-lg"
                }
              >
                {promoData[0]?.cardPromoCode2}
              </label>
            </div>
          </div>

          <div
            className={
              "flex flex-col md:h-[371px] justify-between items-center"
            }
            style={{ backgroundColor: "#efe1c7" }}
          >
            <div>
              {/* Promo title and price */}
              <label className={"text-md"}>
                {promoData[0]?.cardTitle3}
                <br />
              </label>
              <label>
                <span className={"text-md line-through"}>
                  ${promoData[0]?.cardPreviousPrice3}.00
                </span>{" "}
                <span className={"font-semibold"}>
                  ${promoData[0]?.cardCurrentPrice3}.00
                </span>
              </label>
            </div>
            <div>
              {/* Promo image */}
              <Image
                src={urlForImage(promoData[0]?.cardImage3).url()}
                alt={promoData[0]?.cardTitle3}
                width={240}
                height={300}
              />
            </div>
          </div>

          <div
            className={
              "flex flex-col md:h-[371px] justify-between items-center bg-gray-300"
            }
          >
            <div>
              {/* Promo title and price */}
              <label className={"text-md"}>
                {promoData[0]?.cardTitle4}
                <br />
              </label>
              <label>
                <span className={"text-md line-through"}>
                  ${promoData[0]?.cardPreviousPrice4}.00
                </span>{" "}
                <span className={"font-semibold"}>
                  ${promoData[0]?.cardCurrentPrice4}.00
                </span>
              </label>
            </div>
            <div>
              {/* Promo image */}
              <Image
                src={urlForImage(promoData[0]?.cardImage4).url()}
                alt={promoData[0]?.cardTitle4}
                width={240}
                height={340}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromotionsData;
