import Image from "next/image";
import React from "react";
import SectionHeadings from "../ui/SectionHeading";

const Promotions = () => {
  return (
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
                GET UP TO <span className={"text-3xl"}>60%</span>
              </label>
              <label className={"block"}>for the summer season</label>
            </div>
            <div>
              <Image
                src={"/event1.webp"}
                alt={"Promotion Girl"}
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
              GET 30% OFF
            </label>
            <label className={"text-sm text-white"}>USE PROMO CODE</label>
            <label
              className={
                "text-lg tracking-widest text-white bg-gray-500 px-4 py-1 rounded-lg"
              }
            >
              DINEWEEKENDSALE
            </label>
          </div>
        </div>
        <div
          className={"flex flex-col md:h-[371px] justify-between items-center"}
          style={{ backgroundColor: "#efe1c7" }}
        >
          <div>
            <label className={"text-md"}>
              Flex Sweatshirt
              <br />
            </label>
            <label>
              <span className={"text-md line-through"}>$100.00</span>{" "}
              <span className={"font-semibold"}>$75.00</span>
            </label>
          </div>
          <div>
            <Image
              src={"/event2.webp"}
              alt={"Promotion"}
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
              Flex Push Button Bomber
              <br />
            </label>
            <label>
              <span className={"text-md line-through"}>$225.00</span>{" "}
              <span className={"font-semibold"}>$190.00</span>
            </label>
          </div>
          <div>
            <Image
              src={"/event3.webp"}
              alt={"Promotion"}
              width={240}
              height={340}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
