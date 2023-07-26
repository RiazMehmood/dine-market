import getStripePromise from "@/lib/stripe";
import { PrimaryButton } from "./PrimaryButton";
import { useAppSelector } from "@/app/store/hooks";

const CheckoutBtn = () => {

  const body = useAppSelector(state=>state.cart.products)
  console.log(body)

  const handleStripeCheckout = async () => {
    try {
      const stripe = await getStripePromise();
      const response = await fetch("/api/payments/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (data.session) {
        stripe?.redirectToCheckout({ sessionId: data.session.id });
      }
    } catch (error) {}
  };
  return (
    <PrimaryButton
      classNames=""
      onClick={handleStripeCheckout}
      title="Process to Checkout"
    />
  );
};

export default CheckoutBtn;
