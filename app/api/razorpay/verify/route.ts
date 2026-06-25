import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderData } = await req.json();
    const secret = process.env.RAZORPAY_KEY_SECRET;

    if (!secret) {
      return Response.json({ success: false, error: "Missing Razorpay secret" }, { status: 500 });
    }

    const expectedSig = crypto.createHmac("sha256", secret).update(`${razorpay_order_id}|${razorpay_payment_id}`).digest("hex");

    if (expectedSig !== razorpay_signature) {
      return Response.json({ success: false }, { status: 400 });
    }

    return Response.json({
      success: true,
      orderId: `mirayaa_${Date.now()}`,
      orderData
    });
  } catch {
    return Response.json({ success: false }, { status: 400 });
  }
}
