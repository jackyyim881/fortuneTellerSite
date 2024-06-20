export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
      {children}
    </section>
  );
}
