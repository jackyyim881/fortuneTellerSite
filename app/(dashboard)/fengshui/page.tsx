import { submitData } from "../../action";

export default async function Page() {
  const data = await fetch("http://localhost:3000/api/astro");
  console.log(data);
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-3xl font-bold text-center text-gray-900">紫星</h1>
      <p className="mt-4 text-gray-700">
        风水是一种古老的中国传统文化，主要是通过环境的布局和装饰来达到调整人们的气场，从而达到改变人们运势的目的。
      </p>
      <form className="mt-6 space-y-4" action={submitData}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            阳历日期 (YYYY-M-D)
          </label>
          <input
            type="date"
            name="solarDateStr"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            出生时辰序号 (0~12)
          </label>
          <input
            type="number"
            name="timeIndex"
            min="0"
            max="12"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            性别 (男/女)
          </label>
          <select
            name="gender"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            是否调整闰月
          </label>
          <select
            name="fixLeap"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            语言
          </label>
          <select
            name="language"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="zh-CN">简体中文</option>
            <option value="zh-TW">繁体中文</option>
            <option value="en-US">English (US)</option>
            <option value="ko-KR">한국어</option>
            <option value="ja-JP">日本語</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          提交
        </button>
      </form>
    </div>
  );
}
