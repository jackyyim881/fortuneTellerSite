export default function SearchResult({ search }: { search: any }) {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">搜索结果</h1>
      <div className="">
        {search ? (
          <div>
            您搜索的关键词是{" "}
            <span className="font-bold text-white text-1xl">{search}</span>。
          </div>
        ) : (
          <p>请输入关键词进行搜索。</p>
        )}
      </div>
    </div>
  );
}
