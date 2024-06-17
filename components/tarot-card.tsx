import React from "react";
import { TarotCard } from "@/types/types";
import Image from "next/image";

type CardProps = {
  card: TarotCard;
};

export default function Card({ card }: CardProps) {
  return (
    <div className="mt-4 p-4 border rounded shadow-md bg-white max-w-lg">
      <h2 className="text-2xl font-bold mb-2">{card.name}</h2>
      <Image
        src={`/images/${card.img}`}
        width={200}
        height={50}
        alt={card.name}
        className="mb-4 "
      />
      <p>
        <strong>Number:</strong> {card.number}
      </p>
      <p>
        <strong>Arcana:</strong> {card.arcana}
      </p>
      <p>
        <strong>Suit:</strong> {card.suit}
      </p>
      <p>
        <strong>Keywords:</strong> {card.keywords.join(", ")}
      </p>

      <h3 className="text-xl font-bold mt-4">Fortune Telling</h3>
      <ul className="list-disc list-inside">
        {card.fortune_telling.map((fortune, index) => (
          <li key={index}>{fortune}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mt-4">Meanings (Light)</h3>
      <ul className="list-disc list-inside">
        {card.meanings.light.map((meaning, index) => (
          <li key={index}>{meaning}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mt-4">Meanings (Shadow)</h3>
      <ul className="list-disc list-inside">
        {card.meanings.shadow.map((meaning, index) => (
          <li key={index}>{meaning}</li>
        ))}
      </ul>

      <p className="mt-4">
        <strong>Elemental:</strong> {card.Elemental}
      </p>
      <p>
        <strong>Affirmation:</strong> {card.Affirmation}
      </p>

      <h3 className="text-xl font-bold mt-4">Questions to Ask</h3>
      <ul className="list-disc list-inside">
        {card["Questions to Ask"].map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
}
