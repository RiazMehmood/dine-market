
import CartItemsCard from "@/components/ui/CartItemsCard";

const Page = () => {

const cartItems = [
  123,
  500
]

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item}>{<CartItemsCard cartItems={item} key={item} />}</div>
      ))}
      <p className="text-slate-600">
        Total Price:
        <span className="text-slate-900 font-bold">{cartItems[1]}$</span>
      </p>
    </div>
  );
};

export default Page;
