import React from "react";
import { Answer } from "@/types/index";
import PDFDownloadQuizAnswer from "./pdf-download-quiz-answer";
import ScoreResult from "./score-result";
import CompleteForm from "../../../../components/CompleteForm";

export default function QuizResults({ answers }) {
  const renderAnswersItem = answers.map((answer) => answer.answer);
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">你的結果</h1>
      <p className="text-2xl text-center mb-8">感謝你完成測試</p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          你的答案 <span className="text-red-500">({answers.length})</span>
        </h2>
        <ul className="list-decimal pl-5">
          {answers.map((answer, index) => (
            <li key={index} className="mb-2">
              {answer.answer}
            </li>
          ))}
        </ul>
      </div>
      <PDFDownloadQuizAnswer answers={renderAnswersItem} />
      <ScoreResult score={answers.length} />
      <CompleteForm />
    </div>
  );
}
