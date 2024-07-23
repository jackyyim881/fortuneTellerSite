import QuizMenuList from "./_components/quiz-menu-list";
import { fetchQuizQuestions } from "./actions";
type Option = {
  id: string;
  text: string;
};
type Question = {
  id: string;
  question: string;
  options: Option[];
};
export default async function QuizPage() {
  const questions: Question[] = await fetchQuizQuestions();
  return (
    <>
      <QuizMenuList questions={questions} />
    </>
  );
}
