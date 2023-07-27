import HeroData from "@/components/ui/heroData";
import Newsletters from "@/components/section/Newsletters";
import Products from "@/components/section/Products";
import Promotions from "@/components/section/Promotions";

export default function Home() {
  return (
    <>
      <HeroData />
      <Promotions />
      <Products />
      <Newsletters />
    </>
  );
}
