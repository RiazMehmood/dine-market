import { ReactNode } from "react";
import { Image } from "sanity";

export interface IProduct {
  _id: number;
  title: string;
  category?: {category:string};
  price: number;
  description?: string;
  image: Image;
  alt: string
};

export interface AllProducts {
  _id: string;
  alt: string;
  image: Image;
  productTitle: string;
  subtitle: string;
  price: number;
  categories: string;
  productDetails?: string;
  productCare?: string[];
}

export interface Promo {
  _id: string;
  logo?: Image;
  promoFooter?: string;
  footerGirl?: Image;
}

export interface PromoData {
  _id: string;
  cardCurrentPrice3: number;
  cardCurrentPrice4: number;
  cardImage1: Image;
  cardImage3: Image;
  cardImage4: Image;
  cardPreviousPrice3: number;
  cardPreviousPrice4: number;
  cardPromoCode2: string;
  cardSubtitle1: string;
  cardSubtitle2: string;
  cardTitle1: string;
  cardTitle2: string;
  cardTitle3: string;
  cardTitle4: string;
  promoFooter: string;
}

//Redux Types
export interface Product {
  name: string;
  product_id: string;
  quantity: number;
  price: number;
}

export interface CartState {
  products: Product[];
  totalQuantity: number;
  totalPrice: number;
}

export interface HeroTypes {
  _id: string;
  heroDiscountBadge: string;
  heroMainImage: Image;
  heroMainAlt: string;
  heroSponsorLogos: Image[];
}

export interface Items {
  id: number;
  user_id: string;
  product_id: string;
  quantity: number;
}

export interface Carousal {
  key: string;
  price: string;
  image: Image;
  productTitle: string;
}

export interface ReactChild {
  children: ReactNode;
}

export interface IProps {
  // num: number;
  // setNum?: (value: number | ((prevVar: number) => number)) => void;
  id: string;
}


export interface AddToCartItems {
  name: string;
  product_id: string;
  quantity: number;
  price: number;
}