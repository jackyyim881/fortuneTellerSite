"use client";
import CompleteForm from "./_components/complete-form";
import PDFDownloadQuizAnswer from "./_components/pdf-download-quiz-answer";
import ScoreResult from "./_components/score-result";
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
      <div className="flex justify-center ">
        <div className="p-4 w-[500px] font-bold rounded-md bg-white">
          <h1 className="text-4xl  mb-4 text-center">你的结果</h1>
          <p className=" text-2xl text-center">感谢你完成测试！</p>
          {answers.map((answer, index) => (
            <p key={index} className="mt-2">
              {index + 1}. {answer}
            </p>
          ))}
          <PDFDownloadQuizAnswer answers={answers} />
          <ScoreResult score={answers.length} />
          <div className="mt-5">
            <CompleteForm />
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div className="mx-auto container ">
      <h1 className="text-2xl">{quizData.title}</h1>
      <div>
        <p className="text__title">{currentQuestion.question}</p>
        <div className="flex space-x-4 mt-4">
          {currentQuestion.options.map((option, index) => (
            <div className="w-[500px]" key={index}>
              <button
                key={index}
                className="w-full h-[250px] mx-auto text-2xl font-bold container bg-white text-black py-2 px-4 rounded mt-2 hover:bg-gray-100"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
        <div></div>
        <div className="mt-4">
          <p>
            当前进度: {currentQuestionIndex + 1} / {quizData.questions.length}
          </p>
        </div>
      </div>
    </div>
  );
}
