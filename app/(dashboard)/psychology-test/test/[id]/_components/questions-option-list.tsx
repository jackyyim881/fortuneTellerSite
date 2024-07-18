"use client";
import { Button } from "@/components/Button";
import { useState, useTransition } from "react";
import { MdCancel, MdDelete, MdRemove, MdSave } from "react-icons/md";

type Option = {
  id?: string;
  text: string;
};

type QuestionOptionListProps = {
  questionId: string;
  options: Option[];
  onUpdateOptions: (questionId: string, newOptions: Option[]) => Promise<any>;
};

export default function QuestionOptionList({
  questionId,
  options: initialOptions,
  onUpdateOptions,
}: QuestionOptionListProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [options, setOptions] = useState(initialOptions);
  const [isPending, startTransition] = useTransition();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setOptions(initialOptions);
  };

  const handleSave = () => {
    startTransition(async () => {
      try {
        await onUpdateOptions(questionId, options);
        setIsEditing(false);
      } catch (error) {
        console.error("Failed to update options:", error);
        // Handle error (e.g., show an error message to the user)
      }
    });
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], text: value };
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, { text: "" }]);
  };

  const handleRemoveOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  if (isEditing) {
    return (
      <div className=" space-y-2 ">
        {options.map((option, index) => (
          <div key={option.id || index} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter option text"
              value={option.text}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="w-[400px] p-2 border rounded"
            />
            <Button onClick={() => handleRemoveOption(index)}>
              <MdDelete />
            </Button>
          </div>
        ))}
        <Button onClick={handleAddOption}>Add Option</Button>
        <div className="space-x-2">
          <Button onClick={handleSave} disabled={isPending}>
            {isPending ? "Saving..." : <MdSave />}
          </Button>
          <Button onClick={handleCancel}>
            <MdCancel className="inline-block" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ul className=" list-none leading-8 font-bold pl-5 mb-4">
        {options.map((option, index) => (
          <li key={option.id || index}>{option.text}</li>
        ))}
      </ul>
      <Button onClick={handleEdit}>Edit Options</Button>
    </div>
  );
}
