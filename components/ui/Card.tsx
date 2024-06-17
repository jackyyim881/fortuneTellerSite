"use client";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="bg-white p-4 rounded-md shadow-md hover:bg-gray-100">
      <Image
        src={img}
        alt={title}
        width={200}
        height={200}
        className="rounded-md"
      />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="mt-2 text-sm">{description}</p>
      <Link href={href}>
        <div className="text-blue-500 mt-4 block">Learn more</div>
      </Link>
      <div className="text-sm">
        <div>
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
    </div>
  );
}
