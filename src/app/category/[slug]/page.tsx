import ProductCard from "@/components/ui/ProductCard";
import { getProductData as data } from "../../../components/sanityData/fetch";
import { IProduct } from "@/lib/types";

const getProductData = async (category: string) => {
  const getData = await data();
  // console.log(getData[0].category.category);
  // console.log("next value", category);
  return getData.filter(
    (product: IProduct) => product.category?.category === category
  );
};



export default async function Page({ params }: { params: { slug: string } }) {
  const result: IProduct[] = await getProductData(params.slug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-6 items-center">
      {result.map((item) => (
        <div key={item._id}>
          <ProductCard
            key={item._id}
            _id={item._id}
            title={item.title}
            category={item.category}
            price={item.price}
            image={item.image}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
}
