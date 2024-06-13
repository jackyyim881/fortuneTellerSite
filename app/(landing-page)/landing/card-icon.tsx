import Image from "next/image";
import React from "react";

interface CardIconProps {
  icon: any;
  title: string;
  description: string;
}

export default function CardIcon({ icon, title, description }: CardIconProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <div className="w-5 h-5">{icon}</div>
      <h3 className="text-3xl m-5">{title}</h3>
      <p className="text-xl">{description}</p>
    </div>
  );
}
