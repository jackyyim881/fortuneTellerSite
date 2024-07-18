"use client";
import { useState } from "react";
import Button from "./_components/button";
import { editPsychTestQuestions } from "./actions";
type ButtonComponentProps = {
  onEditStateChange: (isEditing: boolean) => void;
};

export default function ButtonComponent({
  onEditStateChange,
}: ButtonComponentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
    onEditStateChange(true);
  };

  const handleSaveClick = async () => {
    await editPsychTestQuestions;
    setIsEditing(false);
    onEditStateChange(false);
  };

  return (
    <>
      <Button
        title="Save"
        onClick={handleSaveClick}
        disabled={!isEditing}
        state="save"
      />
      <Button
        title="Edit"
        onClick={handleEditClick}
        disabled={isEditing}
        state="edit"
      />
    </>
  );
}
