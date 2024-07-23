import { fetchDreamArticles } from "../../actions";

export async function ArticleList({ category }: { category: string }) {
  const articles = await fetchDreamArticles(category);

  if (articles.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No articles found for this category.
      </p>
    );
  }

  return (
    <section className="p-4 space-y-6">
      {articles.map((article: any) => (
        <div key={article.id} className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl text-gray-700 font-bold mb-2">
            {article.title}
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            {article.content}
          </p>
        </div>
      ))}
    </section>
  );
}
