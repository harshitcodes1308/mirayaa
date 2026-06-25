import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

const orders = [
  { id: "mirayaa_1024", customer: "Ananya Rao", items: 2, total: 398, status: "processing", date: "Today" },
  { id: "mirayaa_1023", customer: "Meera Kapoor", items: 1, total: 249, status: "paid", date: "Yesterday" },
  { id: "mirayaa_1022", customer: "Ishita Sen", items: 3, total: 547, status: "shipped", date: "2 days ago" }
];

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
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border-b border-[var(--border)] px-4 py-3 font-mono-price text-[var(--ivory)]">{order.id}</td>
              <td className="border-b border-[var(--border)] px-4 py-3">{order.customer}</td>
              <td className="border-b border-[var(--border)] px-4 py-3">{order.items}</td>
              <td className="border-b border-[var(--border)] px-4 py-3 font-mono-price text-[var(--gold)]">{formatPrice(order.total)}</td>
              <td className="border-b border-[var(--border)] px-4 py-3">{order.status}</td>
              <td className="border-b border-[var(--border)] px-4 py-3">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="bg-[var(--surface)] px-4 py-3 text-xs text-[var(--champagne)]/55">Sample operational data. Supabase-backed reads can replace this once credentials are added. Product count: {products.length}.</p>
    </div>
  );
}
