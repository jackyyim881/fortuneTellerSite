import CategoriesClient from "./_components/categories-client";
import { fetchDreamCategories } from "./actions";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchDreamCategories();
  return (
    <main className="font-bold p-2">
      <div className="mt-8">
        <CategoriesClient initialCategories={categories} />
      </div>
      <div className="">{children}</div>
    </main>
  );
}
