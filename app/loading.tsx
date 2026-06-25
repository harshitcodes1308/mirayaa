export default function Loading() {
  return (
    <main className="mx-page py-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="aspect-[3/4] animate-pulse rounded-[6px] bg-[var(--surface)]" />
        ))}
      </div>
    </main>
  );
}
