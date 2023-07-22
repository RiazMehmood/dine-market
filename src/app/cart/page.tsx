import { PrimaryButton } from "@/components/ui/PrimaryButton";
import CartPage from "@/DBandSanity/cartPage";

const Page = () => {
  return (
    <div>
        <div className="font-sora text-2xl font-bold w-[90%]">
          <h1 className="text-center md:text-left md:mx-10">Shopping Cart</h1>
        </div>
        <CartPage />
    </div>
  );
};

export default Page;
