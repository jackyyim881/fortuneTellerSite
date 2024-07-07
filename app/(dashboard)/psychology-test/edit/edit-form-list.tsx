"use client";
import { PsychTest } from "@/types/psychTest";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
type FormListProps = {
  initialData: PsychTest;
};

export default function FormList({ initialData }: FormListProps) {
  const pathname = usePathname();
  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold mb-4">{initialData.title}</h1>
        <p className="mb-4">{initialData.description}</p>
        {initialData.questions.map((question, index) => (
          <div key={index} className="mb-6">
            <Link href={`${pathname}/${index}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-slate-400 cursor-pointer">
                {question.question}
              </h3>
            </Link>
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
