export default function SwitchLanguage() {
  return (
    <div className="flex justify-center  top-20 left-0 p-4 space-x-4 absolute items-center">
      <button className="px-4 py-2 bg-blue-600 text-white  rounded-lg hover:bg-blue-700 transition duration-300">
        English
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        繁體中文
      </button>
    </div>
  );
}
