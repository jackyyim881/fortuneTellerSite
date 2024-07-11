"use client";
import { Button } from "@/components/Button";
import { MdCancel, MdEdit, MdSave } from "react-icons/md";
import { useRef, useState, useTransition } from "react";
interface ButtonStateClientProps {
  initialData: any;
  saveAction: (data: any) => Promise<void>;
}

export default function ButtonState({
  initialData,
  saveAction,
}: ButtonStateClientProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dataRef = useRef(initialData);

  const handleToggleClick = () => {
    if (isEditing) {
      // Save logic
      startTransition(async () => {
        await saveAction(dataRef.current);
        setIsEditing(false);
      });
    } else {
      // Edit logic
      setIsEditing(true);
    }
  };

  return (
    <>
      <Button
        variant="solid"
        color={isEditing ? "green" : "blue"}
        onClick={handleToggleClick}
        className="transition-all duration-300 ease-in-out"
        disabled={isPending}
      >
        {isEditing ? (
          <div className="flex justify-center items-center space-x-8">
            <div className=" ">
              <MdCancel
                className=" bg-red-500 ring-red-500 ring-4  rounded-full inline-block cursor-pointer"
                onClick={() => setIsEditing(false)}
              />
            </div>
            <MdSave
              className="inline-block cursor-pointer"
              onClick={handleToggleClick}
            />
          </div>
        ) : (
          <MdEdit className="inline-block cursor-pointer" />
        )}
        <span className="ml-2">
          {isPending ? "Saving..." : isEditing ? "Save" : "Edit"}
        </span>
      </Button>
    </>
  );
}
