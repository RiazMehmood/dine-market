import { client } from "../../../sanity/lib/client";


export const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"]{
        _id, productTitle, image, productCare, subtitle, productDetails, price, categories,
      }`);
    return res;
  };