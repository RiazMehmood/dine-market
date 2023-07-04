import ProductCard from "@/components/ui/ProductCard";
import { getProductData } from "@/components/sanityData/fetch";
import { Image } from "sanity";


interface AllProducts {
  id: string,
  alt: string,
  image: Image,
  productTitle: string,
  subtitle: string,
  price: number

}

const allProducts = async () => {

  const data: AllProducts[] = await getProductData();
  // console.log(data[0].productTitle);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-6 items-center">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          title={item.productTitle}
          subtitle={item.subtitle}
          price={item.price}
          image={item.image}
          id={item.id}
          alt={item.productTitle}
        />
      ))}
    </div>
  );
};

export default allProducts;
