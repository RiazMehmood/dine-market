import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { AllProducts } from "@/lib/types";

const ProductCard = (props: AllProducts) => {
  return (
    <div>
      <Link href={`/products/${props._id}`}>
        <div className="flex flex-col m-auto overflow-hidden my-4">
          <Image
            src={urlForImage(props.image).url()}
            width={250}
            height={266}
            alt={props.alt}
          />
          <h3 className="font-bold text-lg mt-3">
            <span className="text-[15px] font-sora font-bold text-left">
              {props.productTitle}
            </span>
          </h3>
          <p className="font-bold text-lg">
            <span className="text-base font-normal">{props.subtitle}</span>
          </p>
          <p className="font-bold text-lg">
            <span className="text-[18px] font-bold font-sora">
              {(props.price).toLocaleString('en-US',{ style: 'currency', currency: 'USD'})}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
