"use server";
import { generateName } from "./action";

export default async function NameGeneratorForm() {
  return (
    <div className=" w-1/2">
      <form action={generateName} method="post" className="">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="输入你的名字"
          className="p-2 border rounded w-full "
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 h bg-blue-500  text-white py-2 px-4 rounded active:bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            生成新名字
          </button>
        </div>
      </form>
    </div>
  );
}
