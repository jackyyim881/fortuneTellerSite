"use client";

import Link from "next/link";
import Button from "../_components/button";
import { useState } from "react";
import { useFormState } from "react-dom";
import { editQuestion } from "../actions";

export default function FormIDListPage({
  data,
  question,
}: {
  data: any;
  question: any;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [state, formAction] = useFormState(editQuestion, null);

  return (
    <>
      <div className="">
        <Link
          href="./"
          className="text-blue-100 hover:underline mb-4 inline-block"
        >
          &larr; Back to all questions
        </Link>
        <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
        <div className="bg-white shadow-md rounded p-6">
          <form action={formAction}>
            <input type="hidden" name="questionId" value={question} />
            <h2 className="text-xl font-semibold mb-4">
              {isEditing ? (
                <input
                  type="text"
                  name="question"
                  defaultValue={question.question}
                  className="w-full p-2 border rounded"
                />
              ) : (
                question.question
              )}
            </h2>
            <ul className="space-y-2">
              {question.options.map((option, index) => (
                <li key={index} className="border rounded-md p-2">
                  {isEditing ? (
                    <input
                      type="text"
                      name={`option-${index}`}
                      defaultValue={option}
                      className="w-full p-1"
                    />
                  ) : (
                    option
                  )}
                </li>
              ))}
            </ul>
            {isEditing && (
              <input
                type="hidden"
                name="options"
                value={JSON.stringify(question.options)}
              />
            )}
            <div className="space-x-4 p-2 mt-4">
              {isEditing ? (
                <>
                  <Button title="Save" state="save" type="submit" />
                  <Button
                    title="Cancel"
                    state="edit"
                    type="button"
                    onClick={() => setIsEditing(false)}
                  />
                </>
              ) : (
                <Button
                  title="Edit"
                  state="edit"
                  type="button"
                  onClick={() => setIsEditing(true)}
                />
              )}
            </div>
          </form>
        </div>
        {state?.message && (
          <p className="mt-4 text-green-500">{state.message}</p>
        )}
      </div>
    </>
  );
}
