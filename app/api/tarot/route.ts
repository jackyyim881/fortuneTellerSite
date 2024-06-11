import { NextResponse } from "next/server";
import tarotData from "@/public/tarot-images.json";
import { TarotData, TarotCard } from "@/app/types/type_lib";

export async function GET() {
  const data: TarotData = tarotData;
  const cards: TarotCard[] = data.cards;

  const randomIndex = Math.floor(Math.random() * cards.length);
  const randomCard = cards[randomIndex];

  return NextResponse.json(randomCard);
}
