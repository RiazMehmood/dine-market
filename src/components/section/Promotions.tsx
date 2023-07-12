import Image from "next/image";
import React from "react";
import SectionHeadings from "../ui/SectionHeading";
import { Image as SImage } from "sanity";
import { getPromoData } from "../sanityData/promoData";
import { urlForImage } from "../../../sanity/lib/image";

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

const Promotions = async () => {
  const data: Promo[] = await getPromoData();
  // console.log(data[0]);

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
            {/*60% off*/}
            <div
              className={
                "h-auto flex flex-col md:flex-row md:justify-around justify-center items-center bg-gray-300"
              }
            >
              <div>
                <label
                  className={
                    "block font-sora font-semibold md:text-3xl md:font-bold text-xl"
                  }
                >
                  {data[0].cardTitle1}
                </label>
                <label className={"block"}>{data[0].cardSubtitle1}</label>
              </div>
              <div>
                <Image
                  src={urlForImage(data[0].cardImage1).url()}
                  alt={data[0].cardTitle1}
                  width={300}
                  height={250}
                />
              </div>
            </div>
            {/*30% off*/}
            <div
              className={
                "h-[250px] flex flex-col items-center justify-center flex-grow gap-y-3 bg-gray-900"
              }
            >
              <label className={"text-3xl text-white md:text-5xl font-bold"}>
                {data[0].cardTitle2}
              </label>
              <label className={"text-sm text-white"}>
                {data[0].cardSubtitle2}
              </label>
              <label
                className={
                  "text-lg tracking-widest text-white bg-gray-500 px-4 py-1 rounded-lg"
                }
              >
                {data[0].cardPromoCode2}
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
              <label className={"text-md"}>
                {data[0].cardTitle3}
                <br />
              </label>
              <label>
                <span className={"text-md line-through"}>
                  ${data[0].cardPreviousPrice3}.00
                </span>{" "}
                <span className={"font-semibold"}>
                  ${data[0].cardCurrentPrice3}.00
                </span>
              </label>
            </div>
            <div>
              <Image
                src={urlForImage(data[0].cardImage3).url()}
                alt={data[0].cardTitle3}
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
              <label className={"text-md"}>
                {data[0].cardTitle4}
                <br />
              </label>
              <label>
                <span className={"text-md line-through"}>
                  ${data[0].cardPreviousPrice4}.00
                </span>
                <span className={"font-semibold"}>
                  ${data[0].cardCurrentPrice4}.00
                </span>
              </label>
            </div>
            <div>
              <Image
                src={urlForImage(data[0].cardImage4).url()}
                alt={data[0].cardTitle4}
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

export default Promotions;
