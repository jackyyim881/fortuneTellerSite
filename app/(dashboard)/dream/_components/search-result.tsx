export default function SearchResult({ search }: { search: any }) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-xl font-bold text-gray-800 mb-4">搜索结果</h1>
      <div className="border-t-2 border-b-[0.5] border-gray-300 my-4"></div>

      <div className="text-center">
        {search ? (
          <div>
            您搜索的关键词是{" "}
            <span className="text-gray-700 font-semibold">{search}</span>。
          </div>
        ) : (
          <p>请输入关键词进行搜索。</p>
        )}
      </div>
    </div>
  );
}
