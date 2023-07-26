import { NextResponse, NextRequest } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { v4 as uid } from "uuid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

//Get Request to get data from DB
export const GET = async (request: NextRequest) => {
  try {
    const userid = cookies().get("user_id")?.value;
    if (userid) {
      const res = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.user_id, userid));
      return NextResponse.json({ res });
    }
  } catch (error) {
    console.log("ERR");
    return NextResponse.json({ message: "Failed to Fetch Data" });
  }
};

//POST request to POST data into DB
export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const _uid = uid();
  const setCookies = cookies();

  const userid = cookies().get("user_id")?.value;
  if (!userid) {
    setCookies.set("user_id", _uid);
  }
  try {
    const res = await db
      .insert(cartTable)
      .values({
        user_id: cookies().get("user_id")?.value as string,
        product_id: req.product_id,
        quantity: 1,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log("error in POST operation", error);
  }
};

//DELETE products from DB by id
export const DELETE = async (request: NextRequest) => {
  const searchParams = new URLSearchParams(request.nextUrl.search);
  const data = searchParams.get("id");
  const productId = data as string;
  try {
    const res = await db
      .delete(cartTable)
      .where(eq(cartTable.product_id, productId))
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log("error in DELETE request", error);
  }
};


//UPDATE products from DB by id
export const PUT = async (request: NextRequest) => {
  const searchParams = new URLSearchParams(request.nextUrl.search);
  const data = searchParams.get("id");
  const insertedQuantity = Number(searchParams.get("quantity"));
  const productId = data as string;
  try {
    const res = await db
      .update(cartTable).set({quantity: insertedQuantity})
      .where(eq(cartTable.product_id, productId))
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log("error in UPDATE request", error);
  }
};