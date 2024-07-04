"use client";
import { PsychTest } from "@/types/psychTest";

export default function FormList({ data }: { data: PsychTest }) {
  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
        <p className="mb-4">{data.description}</p>
        {data.questions.map((question, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{question.question}</h3>
            <ul className="list-disc list-inside flex space-x-4">
              {question.options.map((option, idx) => (
                <li key={idx} className="mb-1 list-none border rounded-md p-2">
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
