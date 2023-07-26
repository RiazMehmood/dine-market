import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripeKey: string = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(stripeKey, { apiVersion: "2022-11-15" });

export async function POST(request: NextRequest) {
  let data = await request.json();
  // console.log(data);

  try {
    if (data.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1NY7wvB9ghs2qA4OVBkcE60C" },
          { shipping_rate: "shr_1NY7wBB9ghs2qA4OHxBZjKPg" },
        ],
        line_items: data.map((item: any) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.product_name,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });

      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    return NextResponse.json(err.message);
  }
}
