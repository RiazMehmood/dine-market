import ProductCard from "@/components/ui/ProductCard";
import { client } from "../../../sanity/lib/client";
import { IProduct } from "@/lib/types";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product']{
    _id, title, category ->  {category}, price, description, image
  }`);
  return res;
};

const allProducts = async () => {
  const data: IProduct[] = await getProductData();
  // console.log(data[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-6 items-center">
      {data.map((item) => (
        <ProductCard
          key={item._id}
          title={item.title}
          category={item.category}
          price={item.price}
          image={item.image}
          _id={item._id}
          alt={item.title}
        />
      ))}
    </div>
  );
};

export default allProducts;
