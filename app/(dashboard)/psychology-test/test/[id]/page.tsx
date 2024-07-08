import { fetchPsychTestWithQuestions } from "../actions";
import QuestionOptionList from "./questions-option-list";
import ButtonStateServer from "./button-state-server";

export default async function TestIDInfoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const fetchTestQuestion = await fetchPsychTestWithQuestions({ id: id });

  if (!fetchTestQuestion) {
    return <div className="text-center text-2xl mt-10">Test not found</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">
          {fetchTestQuestion.title}
        </h1>
        <p className="text-lg mb-8 text-gray-100">
          {fetchTestQuestion.description}
        </p>

        <div className="space-y-8">
          {fetchTestQuestion.questions.map((question, index) => (
            <div
              key={question.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="bg-indigo-100 px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-indigo-800">
                  Question {index + 1}: {question.question}
                </h2>
                <ButtonStateServer />
              </div>
              <div className="px-6 py-4">
                <p className="text-sm text-gray-600 mb-2">
                  Type:{" "}
                  <span className="font-medium text-indigo-600">
                    {question.type}
                  </span>
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Category:{" "}
                  <span className="font-medium text-indigo-600">
                    {question.category}
                  </span>
                </p>
                {question.instructions && (
                  <p className="text-sm text-gray-700 mb-4 italic">
                    {question.instructions}
                  </p>
                )}

                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  Options:
                </h3>
                <div className="">
                  <QuestionOptionList options={question.options} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
