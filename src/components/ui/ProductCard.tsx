import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { Image as SanityImage } from "sanity";

interface AllProducts {
  _id: string,
  alt: string,
  image: SanityImage,
  title: string,
  subtitle: string,
  price: number
  categories: string

}


const ProductCard = (props: AllProducts) => {
  return (
    <div>
      <Link href={`products/${props._id}`}>
        <div className="flex flex-col m-auto overflow-hidden my-4">
          <Image src={urlForImage(props.image).url()} width={250} height={266} alt={props.alt} />
          <h3 className="font-bold text-lg mt-3">
            <span className="text-[15px] font-sora font-bold text-left">{props.title}</span>
          </h3>
          <p className="font-bold text-lg">
            <span className="text-base font-normal">{props.subtitle}</span>
          </p>
          <p className="font-bold text-lg">
            <span className="text-[18px] font-bold font-sora">${props.price}</span>
          </p>
          {/* {props.description ? <p className="font-semibold text-base">{props.description}</p> : ""} */}
        </div>
      </Link>
      {/* <div className="flex items-center justify-center">
        <AddtoCart product={props} />
      </div> */}
    </div>
  );
};

export default ProductCard;
