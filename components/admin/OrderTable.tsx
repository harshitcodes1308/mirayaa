import { formatPrice } from "@/lib/utils";

const orders: {
  id: string;
  customer: string;
  items: number;
  total: number;
  status: string;
  date: string;
}[] = [];

export function OrderTable() {
  return (
    <div className="overflow-x-auto border border-[var(--border)]">
      <table className="w-full min-w-[720px] border-collapse bg-[var(--surface)] text-sm">
        <thead className="text-left text-[var(--gold)]">
          <tr>
            {["Order ID", "Customer", "Items", "Total", "Status", "Date"].map((heading) => (
              <th key={heading} className="border-b border-[var(--border)] px-4 py-3 font-medium">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[var(--champagne)]/76">
          {orders.length ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td className="border-b border-[var(--border)] px-4 py-3 font-mono-price text-[var(--ivory)]">{order.id}</td>
                <td className="border-b border-[var(--border)] px-4 py-3">{order.customer}</td>
                <td className="border-b border-[var(--border)] px-4 py-3">{order.items}</td>
                <td className="border-b border-[var(--border)] px-4 py-3 font-mono-price text-[var(--gold)]">{formatPrice(order.total)}</td>
                <td className="border-b border-[var(--border)] px-4 py-3">{order.status}</td>
                <td className="border-b border-[var(--border)] px-4 py-3">{order.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="px-4 py-10 text-center text-[var(--champagne)]/68">
                No orders yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <p className="bg-[var(--surface)] px-4 py-3 text-xs text-[var(--champagne)]/55">Orders will appear here once checkout starts receiving paid orders.</p>
    </div>
  );
}
