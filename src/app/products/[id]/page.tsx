import { Image } from "sanity";
import { getProductData as data } from "../../../components/sanityData/fetch";

export interface ProductInterface {
  _id: string;
  title: string;
  category?: { category: string };
  price: number;
  description?: string;
  image: Image;
  alt: string;
}

const getProductData = async (id: string) => {
  const getData = await data();

  console.log(getData);
  // console.log(product.category?.category)
  return getData.filter((product: ProductInterface) => product._id === id);
};

export default async function Page({ params }: { params: { id: string } }) {
  const sizes: string[] = ["XS", "S", "M", "L", "XL"];
  const result: ProductInterface[] = await getProductData(params.id);
  console.log(result);
  // const data = await result
  return (
    <div className="">
      {result.map((item) => (
        <div>
          <div className="flex flex-wrap m-9.5">
            <img src="/product1.png" alt="logo " className="mx-6" />
            <div>
              <h1 className="font-bold text-4xl">Cameryn Sash Tie Dress</h1>
              <h2 className="text-zinc-200">Dress</h2>
              <h2 className="text-xl mt-10 font-medium">Select Size</h2>
              <div className="flex gap-5">
                {sizes.map((size) => (
                  <div className="">
                    <div className="font-bold bg-gray-300 rounded-full w-10 h-10 flex justify-center items-center">
                      {size}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        // <div key={item._id} className="">
        //   <ProductCard
        //     key={item._id}
        //     _id={item._id as unknown as number}
        //     title={item.title}
        //     category={item.category}
        //     price={item.price}
        //     image={item.image}
        //     alt={item.title}
        //   />
        // </div>
      ))}
    </div>
  );
}
