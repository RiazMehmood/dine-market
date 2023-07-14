"use client";

import { useEffect, useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";

interface Promo {
  _id: string;
  promoFooter: string;
}

const PromoFooter = () => {
  const [promoData, setPromoData] = useState<Promo[]>([]);

  useEffect(() => {
    const fetchPromoData = async () => {
      const data: Promo[] = await client.fetch(`*[_type=="promotions"]`);
      setPromoData(data);
    };

    fetchPromoData();
  }, []);

  return (
    <div>
        <p className={"font-light"}>{promoData?.[0]?.promoFooter}</p>
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
    
  );
};

export default PromoFooter;
