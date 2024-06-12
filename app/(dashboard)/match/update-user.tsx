export default function UpdateUser({ onClick }: any) {
  return (
    <>
      <div>
        <h1>UpdateUser</h1>
      </div>
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click me
      </button>
    </>
  );
}
