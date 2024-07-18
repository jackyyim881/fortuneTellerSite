import { fetchPsychTestWithQuestions } from "../actions";
import EditOptionsButton from "./_components/edit-options-button";
import QuestionOptionList from "./_components/questions-option-list";
import { updateQuestionOptions } from "./actions";

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
  async function handleUpdateOptions(
    questionId: string,
    newOptions: { id?: string; text: string }[]
  ) {
    "use server";
    const result = await updateQuestionOptions(questionId, newOptions);
    if (result.success) {
      // You might want to refresh the page data here
      // or update the state in the client component
      return result.data;
    } else {
      throw new Error(result.error);
    }
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
                  <QuestionOptionList
                    questionId={question.id}
                    options={question.options}
                    onUpdateOptions={handleUpdateOptions}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
