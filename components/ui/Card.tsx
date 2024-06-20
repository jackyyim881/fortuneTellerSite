"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type CardProps = {
  title: string;
  description: string;
  img: string;
  href: string;
};
type EditComponentProps = {
  isEditing: boolean;
};

type CombinedProps = CardProps & EditComponentProps;

export default function CardComponent({
  title,
  description,
  img,
  href,
  isEditing,
}: CombinedProps) {
  const [image, setImage] = useState(null);
  return (
    <div className="bg-white p-4 w-[400px] rounded-md shadow-md hover:bg-gray-100">
      {image ? (
        <Image
          src={image}
          alt={title}
          className="rounded-full ring-2 ring-red-500"
          width={100}
          height={100}
        />
      ) : (
        <span>
          <svg>
            <circle
              cx="150"
              cy="75"
              r="70"
              fill="none"
              stroke="black"
              strokeWidth="4"
            />
          </svg>
        </span>
      )}

      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="mt-2 text-sm">{description}</p>
      <Link href={href}>
        <div className="text-blue-500 mt-4 block">Learn more</div>
      </Link>
      <div className="text-sm">
        {isEditing ? (
          <Link
            href={`
          /zodiac/${title}
          `}
            className="text-blue-500 mt-4 block"
          >
            Edit
          </Link>
        ) : null}
      </div>
    </div>
  );
}
