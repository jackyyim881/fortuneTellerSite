"use client";

import { useRef, useState } from "react";
interface EditComponentProps {
  isEditing: boolean;
  toggleEditing: () => void;
}

export default function EditComponent({
  isEditing,
  toggleEditing,
}: EditComponentProps) {
  const isEditingRef = useRef(isEditing);

  const handleClick = () => {
    isEditingRef.current = !isEditingRef.current;
    toggleEditing();
    console.log(isEditingRef.current);
  };

  return (
    <>
      {isEditing ? (
        <button
          onClick={handleClick}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Edit
        </button>
      )}
    </>
  );
}
