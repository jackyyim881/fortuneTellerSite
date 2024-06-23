import Image from "next/image";
import React from "react";

interface CardIconProps {
  icon: any;
  title: string;
  description: string;
}

export default function CardIcon({ icon, title, description }: CardIconProps) {
  return (
    <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
        <div className="w-5 h-5">{icon}</div>
        <h3 className="text-3xl m-5">{title}</h3>
        <p className="text-xl">{description}</p>
      </figcaption>
    </ul>
  );
}
