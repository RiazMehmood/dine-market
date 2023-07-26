import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";


const stripeKey: string = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(stripeKey, { apiVersion: "2022-11-15" });

export async function POST(request: NextRequest) {
  let data = await request.json();
  let priceId = data.productPrice;
  let itemQuantity = data.productQuantity;


const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: itemQuantity,
      },
    ],
    mode: "payment",
    success_url: `${request.headers.get("origin")}/?success=true`,
    cancel_url: `${request.headers.get("origin")}/?canceled=true`,
  });

  return NextResponse.json({session});
}
