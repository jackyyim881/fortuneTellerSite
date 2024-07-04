export default function SearchResult({ search }: { search: any }) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-xl font-bold text-gray-800 mb-4">搜索结果</h1>
      <div className="flex-grow h-px bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
      <div className="text-center mt-4">
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
