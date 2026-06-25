const policyCopy: Record<string, { title: string; body: string[] }> = {
  shipping: {
    title: "Shipping Policy",
    body: ["Orders ship across India. Free shipping applies above Rs. 499.", "Delivery timelines depend on pincode and courier availability."]
  },
  refund: {
    title: "Refund Policy",
    body: ["Returns are accepted for damaged or incorrect pieces when reported promptly.", "Keep unboxing photos and order details ready for faster support."]
  },
  terms: {
    title: "Terms",
    body: ["Product colors may vary slightly by screen and lighting.", "Prices and availability can change as handmade batches sell out."]
  }
};

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = policyCopy[slug] ?? policyCopy.terms;

  return (
    <main className="mx-page max-w-3xl py-12 lg:py-16">
      <h1 className="font-display text-6xl tracking-[-0.025em]">{policy.title}</h1>
      <div className="mt-8 grid gap-4 text-sm leading-7 text-[var(--champagne)]/76">
        {policy.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
