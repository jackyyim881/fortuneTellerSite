"use client";
import { useState } from "react";

type State = {
  state: "edit" | "save" | "disabled";
};

export default function Button({ title, onClick, disabled, state }) {
  const [buttonState, setButtonState] = useState<State>({ state: state });

  return (
    <form>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </form>
  );
}
