import { client } from "../../../sanity/lib/client";

export const getPromoData = async () => {
  const res = await client.fetch(`*[_type=="promotions"]`);

//   console.log(res);
  return res;
};


