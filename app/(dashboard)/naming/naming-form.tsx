"use server";
import { generateName } from "./action";

export default async function NameGeneratorForm() {
  return (
    <div className="">
      <form action={generateName} method="post" className="">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="输入你的名字"
          className="p-2 border rounded w-full max-w-md"
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500  text-white py-2 px-4 rounded"
        >
          生成新名字
        </button>
      </form>
    </div>
  );
}
