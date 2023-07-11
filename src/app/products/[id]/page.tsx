import { Image } from "sanity";
import { getProductData as data } from "../../../components/sanityData/fetch";
import { urlForImage } from "../../../../sanity/lib/image";
import Onclickfunc from "@/components/ui/onclickfunc";

interface AllProducts {
  _id: string;
  alt: string;
  image: Image;
  productTitle: string;
  subtitle: string;
  price: number;
  productDetails: string;
  productCare: string[];
}

const getProductData = async (id: string) => {
  const getData = await data();
  return getData.filter((product: AllProducts) => product._id === id);
};

export default async function Page({ params }: { params: { id: string } }) {
  const sizes: string[] = ["XS", "S", "M", "L", "XL"];
  const result: AllProducts[] = params?.id
    ? await getProductData(params.id)
    : [];

  return (
    <div className="bg-[#fcfcfc] w-[95%] m-auto flex justify-center">
      {result.map((item) => (
        <div className="flex">
          <div className="flex items-center justify-center flex-col">
            <div className="lg:flex lg:flex-row lg:justify-around lg:max-h-screen lg:gap-10">
              <div className="flex mt-10 md:w-[700px] justify-around md:justify-around lg:justify-evenly lg:gap-14">
                <div className=" w-16 md:w-24 md:h-24 lg:w-28 lg:h-28 h-16">
                  <img
                    src={urlForImage(item.image).url()}
                    alt={item.productTitle}
                  />
                </div>
                <div className="w-[170px] h-[180px] md:w-[450px] md:h-[470px] lg:w-[60rem] lg:h-[60rem]">
                  <img
                    src={urlForImage(item.image).url()}
                    alt={item.productTitle}
                   width={'700px'}
                   height={'700px'}
                  />
                </div>
              </div>
              <div className="font-sora lg:mt-10">
                <div className="my-10 md:my-4 lg:my-9 font-sora">
                  <h1 className=" font-sora text-2xl lg:text-4xl">{item.productTitle}</h1>
                  <h2 className="text-[#c2c2c2] font-sora font-bold text-2xl lg:font-semibold">
                    {item.subtitle}
                  </h2>
                </div>
                <h2 className="text-sm text-justify mt-10 font-bold">
                  SELECT SIZE
                </h2>
                <div className="flex gap-5">
                  {sizes.map((size) => (
                    <div className="">
                      <div className="font-bold hover:shadow-xl hover:cursor-pointer hover:border-2 mt-5 rounded-full w-10 h-10 flex justify-center items-center">
                        {size}
                      </div>
                    </div>
                  ))}
                </div>
                <Onclickfunc price={item.price} />
              </div>
            </div>
            <div className="bg-white my-12 font-sora w-[95%]  flex flex-col justify-center">
              <div className="p-4">
                <h2 className="font-bold pb-12 border-b-2 border-black/40 font-sora text-2xl">
                  Product Information
                </h2>
                <p className="my-12 font-semibold text-[#989087]">
                  PRODUCT DETAILS
                </p>
                <p className="text-justify">{item.productDetails}</p>
                <p className="my-12 font-semibold text-[#989087]">
                  PRODUCT CARE
                </p>
                {item.productCare.map((items) => (
                  <li>{items}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
