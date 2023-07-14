import CartItemsCard from "@/components/ui/CartItemsCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ShoppingBag } from "lucide-react";

const Page = () => {
  // const res = await fetch("/api/cart", {
  //   method: "GET"
  // });
  // console.log(res)

  return (
    <div>
      {true ? (
        <div>
          <div className="font-sora text-2xl font-bold w-[90%]">
            <h1 className="text-center md:text-left md:mx-10">Shopping Cart</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-6 my-10 font-sora items-center mx-3 border-b">
            <div className="col-span-2 order-1">
              <CartItemsCard />
              <CartItemsCard />
              <CartItemsCard />
            </div>
            {/* Order summary */}
            <div className="bg-[#fbfcff] lg:h-[100%] px-1 ml-4 order-last my-6">
              <div className="inline-grid w-full">
                <p className="font-bold my-4 text-xl">Order summary</p>
                <div className="flex my-4 justify-between items-center">
                  <p className="text-xl">Quantity</p>
                  <p>2 Product</p>
                </div>
                <div className="flex my-4 justify-between items-center">
                  <p className="text-xl">Subtotal</p>
                  <p className="">$123</p>
                </div>
                <PrimaryButton
                  classNames=""
                  onClick={undefined}
                  title="Process to Checkout"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Empty Shopping Cart
        <div className="flex flex-col items-center my-20">
          <div className="font-sora text-2xl font-bold w-[90%]">
            <h1 className="text-center md:text-left">Shopping Cart</h1>
          </div>
          <div>
            <ShoppingBag width={100} height={200} />
          </div>
          <div>
            <p className="font-sora text-2xl font-bold text-center md:text-4xl">
              Your Shopping Bag is Empty
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
