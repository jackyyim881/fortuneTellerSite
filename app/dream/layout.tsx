import Categories from "@/components/dream/categories";
import SearchBar from "@/components/dream/searchbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-4">
      <div className="">{children}</div>
    </main>
  );
}
