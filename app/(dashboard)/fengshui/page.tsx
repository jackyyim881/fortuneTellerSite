import { getAstrolabe } from "./actions";
import Form from "./fengshui-form-list";

export default async function Page() {
  return (
    <>
      <div className="p-6 max-w-[1200px] mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-3xl font-bold text-center text-gray-900">紫星</h1>
        <p className="mt-4 text-center text-gray-700">
          风水是一种古老的中国传统文化，主要是通过环境的布局和装饰来达到调整人们的气场，从而达到改变人们运势的目的。
        </p>
        <div className="mt-4">
          <Form submitData={getAstrolabe} />
        </div>
      </div>
    </>
  );
}
