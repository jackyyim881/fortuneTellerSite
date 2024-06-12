export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-4">
      <div className="">{children}</div>
    </main>
  );
}
