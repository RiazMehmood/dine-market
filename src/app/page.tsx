import Hero from "@/components/section/Hero";
import Newsletters from "@/components/section/Newsletters";
import Products from "@/components/section/Products";
import Promotions from "@/components/section/Promotions";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotions />
      <Products />
      <Newsletters />
    </>
  );
}
