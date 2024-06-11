"use client";
import ScoreResult from "@/components/ScoreResult";
import { useState, useEffect } from "react";

export default function Page() {
  const [quizData, setQuizData] = useState(null as any);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]) as any;
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    fetch("/quiz.json")
      .then((response) => response.json())
      .then((data) => setQuizData(data));
  }, []);

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  if (!quizData) {
    return <div>加载中...</div>;
  }

  if (isCompleted) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">你的结果</h1>
        <p>感谢你完成测试！</p>
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>
              问题 {index + 1}: {answer}
            </li>
          ))}
        </ul>
        <ScoreResult score={answers.length} />
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{quizData.title}</h1>
      <div>
        <p>{currentQuestion.question}</p>
        <div className="mt-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className="block bg-blue-500 text-white py-2 px-4 rounded mt-2"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div></div>
        <div className="result">
          <p>
            当前进度: {currentQuestionIndex + 1} / {quizData.questions.length}
          </p>
        </div>
      </div>
    </div>
  );
}
