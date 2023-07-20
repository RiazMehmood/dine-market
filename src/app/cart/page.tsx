import { PrimaryButton } from "@/components/ui/PrimaryButton";
import CartPage from "@/DBandSanity/cartPage";

const Page = () => {
  return (
    <div>
      <div>
        <div className="font-sora text-2xl font-bold w-[90%]">
          <h1 className="text-center md:text-left md:mx-10">Shopping Cart</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-6 my-10 font-sora items-center mx-3 border-b">
          <div className="col-span-2 order-1">
            <CartPage />
          </div>
          {/* Order summary */}
          
        </div>
      </div>
    </div>
  );
};

export default Page;
