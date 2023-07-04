import Image from "next/image";
import Link from "next/link";
import { AddtoCart } from "./AddtoCart";
import { IProduct } from "@/lib/types";
import { urlForImage } from "../../sanity/lib/image";




const ProductCard = (props: IProduct) => {
  return (
    <div>
      <Link href={`products/${props._id}`}>
        <div className="flex flex-col items-center overflow-hidden my-4">
          <Image src={urlForImage(props.image).url()} width={200} height={200} alt={props.alt} />
          <h3 className="font-bold text-lg mt-3">
            Title: <span className="text-base font-normal">{props.title}</span>
          </h3>
          <p className="font-bold text-lg">
            <span className="text-base font-normal">{props.category?.category}</span>
          </p>
          <p className="font-bold text-lg">
            Price: <span className="text-base font-normal">${props.price}</span>
          </p>
          {/* {props.description ? <p className="font-semibold text-base">{props.description}</p> : ""} */}
        </div>
      </Link>
      <div className="flex items-center justify-center">
        <AddtoCart product={props} />
      </div>
    </div>
  );
};

export default ProductCard;
