import { submitCompatibilityData } from "./actions";
import { redirect } from "next/navigation";

export default async function CompatibilityForm() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const result = await submitCompatibilityData(formData);
    redirect(
      `/result?date1=${result.date1}&time1=${result.time1}&date2=${result.date2}&time2=${result.time2}`
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <form action={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="date1"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            甲方 - 出生日期
          </label>
          <input
            type="date"
            required
            id="date1"
            name="date1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            aria-labelledby="date1-label"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="time1"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            時間（當地時間）
          </label>
          <input
            type="time"
            id="time1"
            name="time1"
            defaultValue="00:00"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            aria-labelledby="time1-label"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="date2"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            乙方 - 出生日期
          </label>
          <input
            id="date2"
            type="date"
            required
            name="date2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            aria-labelledby="date2-label"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="time2"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            時間（當地時間）
          </label>
          <input
            id="time2"
            type="time"
            name="time2"
            defaultValue="00:00"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            aria-labelledby="time2-label"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          計算兼容性
        </button>
      </form>
    </div>
  );
}
