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
