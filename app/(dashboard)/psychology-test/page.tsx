"use client";
import Link from "next/link";
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
        <div className=" w-[500px] font-bold rounded-md bg-white">
          <div className="leading-6">
            <div className="text-center">
              <h1 className="text-3xl  mt-4 ">你的结果</h1>
              <p className=" text-2xl mt-4 ">感谢你完成测试！</p>
            </div>
            <div className="p-4">
              <h2>
                你的答案
                <span className="text-[#FF0000]">({answers.length})</span>
              </h2>
              {answers.map((answer, index) => (
                <p key={index} className="mt-2">
                  {index + 1}. {answer}
                </p>
              ))}
            </div>
            <div className="*:p-4 leading-10">
              <PDFDownloadQuizAnswer answers={answers} />
              <ScoreResult score={answers.length} />
            </div>
            <div className="mt-6 leading-10">
              <CompleteForm />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div className="">
      <h1 className="text__title">{quizData.title}</h1>
      <Link href="psychology-test/edit">
        <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          修改答案
        </button>
      </Link>
      <div>
        <h2 className="text_small_heading">{currentQuestion.question}</h2>
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
        <div className="mt-4  text-white font-bold">
          <span className="border  rounded-md p-2">
            当前进度 &nbsp;
            {currentQuestionIndex + 1} / {quizData.questions.length}
          </span>
        </div>
      </div>
    </div>
  );
}
