import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

let stripePromise = Promise<Stripe|null>

const getStripePromise =()=>{
    let key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""

    if(!stripePromise && process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ){
        stripePromise = loadStripe(key)
    }
    return stripePromise;
}

export default getStripePromise;