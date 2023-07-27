'use client'
import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image';
import Image from 'next/image';
import {Promo} from "@/lib/types"


const PromoFooterGirl = () => {
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
    {promoData.length > 0 && promoData[0]?.footerGirl && (
      <Image
        src={urlForImage(promoData[0].footerGirl).url()}
        alt="website logo"
        width={250}
        height={350}
      />
    )}
  </div>
  )
}

export default PromoFooterGirl