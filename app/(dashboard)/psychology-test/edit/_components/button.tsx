"use client";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  state: "save" | "edit";
};

export default function Button({ title, state, ...props }: ButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded text-white font-bold transition-colors duration-200";
  const stateClasses = {
    save: "bg-green-500 hover:bg-green-600",
    edit: "bg-blue-500 hover:bg-blue-600",
  };

  return (
    <button className={`${baseClasses} ${stateClasses[state]}`} {...props}>
      {title}
    </button>
  );
}
