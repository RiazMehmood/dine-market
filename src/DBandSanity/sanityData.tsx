import { client } from "../../sanity/lib/client";

// Function to fetch data from Sanity based on product IDs
export async function fetchSanityDataByIds(ids: string[]) {
  if (!Array.isArray(ids) || ids.length === 0) {
    throw new Error("Invalid or empty array of product IDs.");
  }

  const query = `*[ _type == "product" && _id in [${ids
    .map((id) => `"${id}"`)
    .join(", ")}] ]`;

  // Fetch the data using the query
  const data = await client.fetch(query);
  console.log("query", data);
  return data;
}
