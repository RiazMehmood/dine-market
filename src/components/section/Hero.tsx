import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { getHeroData } from "../sanityData/heroData";
import { Image as SImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";

interface HeroTypes {
  _id: string;
  heroDiscountBadge: string;
  heroMainImage: SImage;
  heroMainAlt: string;
  heroSponsorLogos: SImage;
}

const Hero = async () => {
  const data: HeroTypes[] = await getHeroData();

  return (
    <div>
      {data.map((item) => (
        <div className="flex items-center justify-between mt-14 mx-14">
          <div className="max-w-2xl">
            <p className="bg-[#e1edff] text-[#3f00ff] w-[100px] font-bold rounded-lg  px-2 py-1 text-center">
              {item.heroDiscountBadge}
            </p>

            <h1 className="scroll-m-20 text-4xl font-extrabold mt-10 tracking-tight  lg:text-6xl">
              An Industrial Take on Streetwear
            </h1>
            <p className="leading-7 mr-4 text-sm [&:not(:first-child)]:mt-6">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>

            <Link href={"/products"}>
              <Button className="m-5">
                <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
              </Button>
            </Link>
            <div className="flex justify-evenly mt-20 gap-x-12">
              <Image
                src="/featured1.webp"
                alt="featured"
                height={100}
                width={100}
              />
              <Image
                src="/featured2.webp"
                alt="featured"
                height={100}
                width={100}
              />
              <Image
                src="/featured3.webp"
                alt="featured"
                height={100}
                width={100}
                className="hidden lg:block"
              />
              <Image
                src="/featured4.webp"
                alt="featured"
                height={100}
                width={100}
                className="hidden lg:block"
              />
            </div>
          </div>
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
  );
};

export default Hero;
