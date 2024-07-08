import { PsychTest } from "@/types/psychTest";
import { fetchPsychTestQuestions } from "../actions";
import FormIDListPage from "./form-id-list";

export default async function QuestionIdInfoPage({ params: { id } }) {
  const data: PsychTest = await fetchPsychTestQuestions();
  const questionIndex = parseInt(id);
  const question = data.questions[questionIndex];
  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <FormIDListPage data={data} question={question} />
    </div>
  );
}
