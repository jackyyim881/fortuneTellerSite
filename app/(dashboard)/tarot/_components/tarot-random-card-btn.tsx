"use client";

import { useState, useEffect } from "react";
import { TarotCard } from "@/types/types";
import Card from "./tarot-card";
import { useUser } from "@clerk/clerk-react";
import { redirect, useRouter } from "next/navigation";
export default function TarotRandomCard() {
  const [card, setCard] = useState<TarotCard | null>(null);
  const user = useUser();
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLogged(true); // User is logged in
    } else {
      setIsLogged(false); // User is not logged in
      router.push("/sign-in"); // Redirect to sign-in page
    }
  }, [user, router]);
  const fetchRandomCard = async () => {
    if (!isLogged) {
      return; // If not logged in, do nothing (or you can redirect again here)
    }
    const response = await fetch("/api/tarot");
    const data = await response.json();
    setCard(data);
  };

  if (!isLogged) {
    return null; // Optionally, show a loading indicator or a message instead
  }
  return (
    <div className="p-4">
      <button
        onClick={fetchRandomCard}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        抽取一張塔羅牌
      </button>
      {card && <Card card={card} />}
    </div>
  );
}
