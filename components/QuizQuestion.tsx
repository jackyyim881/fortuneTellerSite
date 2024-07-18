import React from "react";

interface QuizQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

export default function QuizQuestion({
  question,
  options,
  onAnswer,
}: QuizQuestionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            className="w-full h-[250px] text-2xl font-bold bg-white text-black py-2 px-4 rounded hover:bg-gray-100 transition duration-300"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
