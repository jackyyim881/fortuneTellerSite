export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-[1200px] container">
      <div className="p-4">{children}</div>
    </main>
  );
}
