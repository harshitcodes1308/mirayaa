import { OrderTable } from "@/components/admin/OrderTable";

export default function OrdersPage() {
  return (
    <section>
      <h1 className="mb-8 font-display text-5xl tracking-[-0.02em]">Orders</h1>
      <OrderTable />
    </section>
  );
}
