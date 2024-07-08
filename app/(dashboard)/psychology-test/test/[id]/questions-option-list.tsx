type Option = {
  id: string;
  text: string;
};

export default function QuestionOptionList({ options }: { options: Option[] }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded p-3 hover:bg-indigo-50 transition duration-150"
          >
            <p className="text-gray-800">{option.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
