import { NextResponse, NextRequest } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { v4 as uid } from "uuid";
import { cookies } from "next/headers";

export const GET = async (request: NextRequest) => {
  try {
    const res = await db.select().from(cartTable);
    return NextResponse.json({ res });
  } catch (error) {
    console.log("ERR");
    return NextResponse.json({ message: "Failed to Fetch Data" });
  }
};

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
  } catch (error) {}
};
