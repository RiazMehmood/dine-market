import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { urlForImage } from "../../../sanity/lib/image";
import { HeroTypes } from "@/lib/types";

const Hero = ( {heroData} : { heroData: HeroTypes[] }) => {
  console.log("hero data",heroData)


 
  return (
    <div>
      <div>
        {heroData && heroData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between mt-14 mx-14"
          >
            <div className="max-w-2xl">
              {/* Discount badge */}
              <p className="bg-[#e1edff] text-[#3f00ff] w-[100px] font-bold rounded-lg  px-2 py-1 text-center">
                {item.heroDiscountBadge}
              </p>

              {/* Hero title */}
              <h1 className="scroll-m-20 text-4xl font-extrabold mt-10 tracking-tight  lg:text-6xl">
                An Industrial Take on Streetwear
              </h1>

              {/* Hero description */}
              <p className="leading-7 mr-4 text-sm [&:not(:first-child)]:mt-6">
                Anyone can beat you but no one can beat your outfit as long as
                you wear Dine outfits.
              </p>

              {/* Start shopping button */}
              <Link href={"/products"}>
                <Button className="m-5">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
                </Button>
              </Link>

              {/* Featured images */}
              <div className="flex justify-evenly mt-20 gap-x-12">
                {item.heroSponsorLogos.map((img, ind) => (
                  <div key={ind}>
                    <Image
                      src={urlForImage(img).url()}
                      alt="featured"
                      height={100}
                      width={100}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Hero main image */}
            <div className="bg-[#ffece3] md:w-96 md:h-96 rounded-full mr-20 hidden sm:block ">
              <div className="-m-10">
                <Image
                  src={urlForImage(item.heroMainImage).url()}
                  alt={item.heroMainAlt}
                  width={700}
                  height={700}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
