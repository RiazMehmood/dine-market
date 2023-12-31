import ProductCard from "@/components/ui/ProductCard";
import { getProductData } from "@/components/sanityData/fetch";
import { AllProducts } from "@/lib/types";


const allProducts = async () => {
  const data: AllProducts[] = await getProductData();
  
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-12 items-center">
        {data.map((item) => (
          <ProductCard
            key={item._id}
            productTitle={item.productTitle}
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
