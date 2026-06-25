import { getRazorpay } from "@/lib/razorpay";

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();
    const razorpay = getRazorpay();
    const order = await razorpay.orders.create({
      amount: Math.round(Number(amount) * 100),
      currency: "INR",
      receipt: `mirayaa_${Date.now()}`
    });

    return Response.json({ orderId: order.id, amount: order.amount });
  } catch (error) {
    return Response.json(
      {
        error: error instanceof Error ? error.message : "Unable to create Razorpay order"
      },
      { status: 500 }
    );
  }
}
