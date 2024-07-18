"use client";
import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
type CreateTestFormClientProps = {
  createTest: (formData: FormData) => Promise<void>;
};

export default function FormCreateListPage({
  createTest,
}: CreateTestFormClientProps) {
  const { pending } = useFormStatus();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [currentValue, setCurrentValue] = useState(""); // you can manage data with it

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
      textareaRef.current.style.overflow =
        scrollHeight > textareaRef.current.clientHeight ? "auto" : "hidden";
    }
  }, [currentValue]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentValue(event.target.value);
  };
  return (
    <>
      <form
        action={createTest}
        className="flex flex-col w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
      >
        <h1 className="text__sub-title">Create a new test</h1>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            ref={textareaRef}
            value={currentValue}
            onChange={handleChange}
            style={{ overflow: "hidden" }}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {pending ? "Creating..." : "Create Test"}
        </button>
      </form>
    </>
  );
}
