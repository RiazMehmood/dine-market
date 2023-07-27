import { NextResponse, NextRequest } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { v4 as uid } from "uuid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

//DELETE products from DB by id
export const DELETE = async (request: NextRequest) => {
const userid = cookies().get("user_id")?.value as string

try {
    const res = await db
    .delete(cartTable)
    .where(eq(cartTable.user_id, userid))
    .returning();
    return NextResponse.json({ res });
} catch (error) {
    console.log("error in DELETE request", error);
}
};
