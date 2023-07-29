"use client";

import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import Hero from "../section/Hero";
import { HeroTypes } from "@/lib/types";

import { SyncLoader } from "react-spinners";


const HeroData = () => {
  const [heroData, setHeroData] = useState<HeroTypes[]>([]);

  useEffect(() => {
    // Fetch hero data from an asynchronous source
    const fetchHeroData = async () => {
      try {
        const data: HeroTypes[] = await client.fetch(`*[_type=="hero"]{
          _id, heroDiscountBadge, heroMainImage, heroSponsorLogos,
        }`);
        setHeroData(data);
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      }
    };
    fetchHeroData();
  }, []);
  // console.log("hero data in client", heroData)

  if (heroData.length === 0) {
    return (
      <div className="flex justify-center text-2xl">
        <SyncLoader color={"#123abc"} loading={true} />
      </div>
    );
  
  }

  return (
    <div>
      <Hero heroData={heroData} />
    </div>
  );
};

export default HeroData;
