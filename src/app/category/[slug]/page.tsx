import ProductCard from "@/components/ui/ProductCard";
import { getProductData as data } from "../../../components/sanityData/fetch";
import { Image } from "sanity";

interface AllProducts {
  _id: string;
  alt: string;
  image: Image;
  productTitle: string;
  subtitle: string;
  price: number;
  categories: string;
}

const getProductData = async (category: string) => {
  const getData = await data();
  return getData.filter(
    (product: AllProducts) => product.categories === category
  );
};

export default async function Page({ params }: { params: { slug: string } }) {
  const result: AllProducts[] = await getProductData(params.slug);

  return (
    <div className="flex justify-center items-center">
      {result.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-6 items-center">
          {result.map((item) => (
            <div key={item._id}>
              <ProductCard
                key={`item._id`}
                _id={item._id}
                title={item.productTitle}
                categories={item.categories}
                price={item.price}
                image={item.image}
                alt={item.productTitle}
                subtitle={item.subtitle}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-2xl font-sora font-bold">No Items Found</p>
      )}
    </div>
  );
}
