export async function GET() {
  return Response.json({
    orders: [
      { id: "mirayaa_1024", status: "processing", total: 398 },
      { id: "mirayaa_1023", status: "paid", total: 249 }
    ]
  });
}

export async function POST(request: Request) {
  const order = await request.json();
  return Response.json({ id: `mirayaa_${Date.now()}`, ...order }, { status: 201 });
}
