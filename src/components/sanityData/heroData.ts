import { client } from "../../../sanity/lib/client";

export const getHeroData = async () => {
  const res = await client.fetch(`*[_type=="hero"]{
        _id, heroDiscountBadge, heroMainImage, heroSponsorLogos,
      }`);

//   console.log(res);
  return res;
};
