import ProductCard from "@/components/ui/ProductCard";
import { getProductData } from "@/components/sanityData/fetch";
import { Image } from "sanity";

interface AllProducts {
  _id: string;
  alt: string;
  image: Image;
  productTitle: string;
  subtitle: string;
  price: number;
}

const allProducts = async () => {
  const data: AllProducts[] = await getProductData();
  
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-12 items-center">
        {data.map((item) => (
          <ProductCard
            key={item._id}
            title={item.productTitle}
            subtitle={item.subtitle}
            price={item.price}
            image={item.image}
            _id={item._id}
            alt={item.productTitle}
            categories={""}
          />
        ))}
      </div>
    </div>
  );
};

export default allProducts;
