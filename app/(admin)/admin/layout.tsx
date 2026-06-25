import { AdminNav } from "@/components/admin/AdminNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-page grid gap-8 py-10 lg:grid-cols-[220px_1fr] lg:py-14">
      <AdminNav />
      {children}
    </main>
  );
}
