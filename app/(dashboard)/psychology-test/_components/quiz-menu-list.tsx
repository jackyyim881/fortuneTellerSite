"use client";

import { useState } from "react";
import Link from "next/link";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResults from "./QuizResults";
import LoadingSpinner from "../../../loading";
import ProgressIndicator from "@/components/ProgressIndicator";
import { useQuizData } from "@/hooks/useQuizData";
import { Answer } from "@/types";

export default function QuizMenuList({ questions }) {
  const { quizData, isLoading } = useQuizData("/quiz.json");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, { questionIndex: currentQuestionIndex, answer }]);
    if (quizData && currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };
  if (isLoading) return <LoadingSpinner />;
  if (!quizData) return <div>Failed to load quiz data</div>;
  if (isCompleted) return <QuizResults answers={answers} />;

  const currentQuestion = quizData.questions[currentQuestionIndex];
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="menu__title mb-4">{quizData.title}</h1>
        <Link href="/psychology-test/edit" className="">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            修改答案
          </button>
        </Link>
        <QuizQuestion
          question={currentQuestion.question}
          options={currentQuestion.options}
          onAnswer={handleAnswer}
        />
        <ProgressIndicator
          current={currentQuestionIndex + 1}
          total={quizData.questions.length}
        />
      </div>
    </>
  );
}
