"use client";
import { useState } from "react";
type MessageInputProps = {
  onSubmit: (message: string) => void;
  disabled?: boolean;
};
import { Input } from "@/components/ui/input";

export default function MessageInput({
  onSubmit,
  disabled = false,
}: MessageInputProps) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={input}
        onChange={handleChange}
        className={`absolute bottom-0`}
        disabled={disabled}
        placeholder={
          disabled ? "This input has been disabled." : "Your message here"
        }
      />
    </form>
  );
}
