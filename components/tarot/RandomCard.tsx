"use client";

import { useState } from "react";
import { TarotCard } from "@/types/type_lib";
import Card from "./Card";

export default function RandomCard() {
  const [card, setCard] = useState<TarotCard | null>(null);
  const fetchRandomCard = async () => {
    const response = await fetch("http://localhost:3000/api/tarot");
    const data = await response.json();
    setCard(data);
  };
  return (
    <div className="p-4">
      <button
        onClick={fetchRandomCard}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Draw a Random Card
      </button>
      {card && <Card card={card} />}
    </div>
  );
}
