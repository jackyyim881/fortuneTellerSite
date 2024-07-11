"use client";
import React, { useState } from "react";
import { Button } from "@/components/Button";

export default function EditOptionsButton({ questionId, options, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedOptions, setEditedOptions] = useState(options);

  const handleEdit = (e: any) => {
    setIsEditing(true);
    console.log("Edit options");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedOptions(options);
  };

  const handleSave = async () => {
    try {
      const updatedQuestion = await onUpdate(questionId, editedOptions);
      setEditedOptions(updatedQuestion.options);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update options:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...editedOptions];
    newOptions[index] = { ...newOptions[index], text: value };
    setEditedOptions(newOptions);
  };

  const handleAddOption = () => {
    setEditedOptions([...editedOptions, { text: "" }]);
  };

  const handleRemoveOption = (index) => {
    const newOptions = editedOptions.filter((_, i) => i !== index);
    setEditedOptions(newOptions);
  };

  if (isEditing) {
    return (
      <div className="space-y-2">
        {editedOptions.map((option, index) => (
          <div key={option.id || index} className="flex items-center space-x-2">
            <input
              type="text"
              value={option.text}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="w-full p-2 border rounded"
            />
            <Button onClick={() => handleRemoveOption(index)}>Remove</Button>
          </div>
        ))}
        <Button onClick={handleAddOption}>Add Option</Button>
        <div className="space-x-2">
          <Button onClick={handleSave}>Save</Button>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return <Button onClick={handleEdit}>Edit Options</Button>;
}
