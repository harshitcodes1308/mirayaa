import { products } from "@/lib/data";

export async function GET() {
  return Response.json({ products });
}
