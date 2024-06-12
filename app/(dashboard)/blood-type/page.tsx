export default async function Page() {
  async function matchBlood(formData: FormData) {
    "use server";
    const bloodType = formData.get("bloodType");
    const response = await fetch(
      `http://localhost:3000/api/blood-match?bloodType=${bloodType}`
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <form className="mb-4" action={matchBlood}>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              selected
            >
              Select an option
            </option>
            <option value="A" id="bloodType">
              A
            </option>
            <option value="B" id="bloodType">
              B
            </option>
            <option value="AB" id="bloodType">
              AB
            </option>
            <option value="O" id="bloodType">
              O
            </option>
          </select>
          <button className="block w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            submit
          </button>
        </form>
      </div>
    </>
  );
}
