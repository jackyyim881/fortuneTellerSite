export interface TarotCard {
  name: string;
  number: string;
  arcana: string;
  suit: string;
  img: string;
  fortune_telling: string[];
  keywords: string[];
  meanings: {
    light: string[];
    shadow: string[];
  };
  Elemental?: string;
  Affirmation?: string;
  "Questions to Ask": string[];
}

export interface TarotData {
  description: string;
  cards: TarotCard[];
}

export type Zodiac = {
  name: string;
  date: string;
  img: string;
  details: {
    keyword: string;
    planet: string;
    color: string;
    gemstone: string;
    element: string;
    traits: string;
    compatibility: string;
    luckyNumber: string;
  };
};

export type Zodiacs = Zodiac[];
