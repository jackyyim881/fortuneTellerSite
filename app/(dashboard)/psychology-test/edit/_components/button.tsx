"use client";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  state: "save" | "edit" | "create" | "test";
  href?: string;
};

export default function Button({ title, state, href, ...props }: ButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded text-white font-bold transition-colors duration-200";
  const stateClasses = {
    save: "bg-green-500 hover:bg-green-600",
    edit: "bg-blue-500 hover:bg-blue-600",
    create: "bg-indigo-500 hover:bg-indigo-600",
    test: "bg-purple-500 hover:bg-purple-600",
  };

  return (
    <button className={`${baseClasses} ${stateClasses[state]}`} {...props}>
      {title}
    </button>
  );
}
