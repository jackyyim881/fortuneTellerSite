import { Language } from "iztro/lib/data/types";

export interface Question {
  id: string;
  question: string;
  options: { id: string; option: string; questionId: string }[];
}

export interface QuizMenuListProps {
  questions: Question[];
}

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

export type ZodiacDetailsProps = {
  selectedZodiac: {
    name: string;
    date: string;
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
};

export type MessageListProps = {
  messages: any[];
  currentUserId: string;
};

export type FormDataProps = {
  solarDateStr: string;
  gender: "男" | "女";
  timeIndex: number;
  fixLeap: boolean;
  language: Language;
};

type Params = {
  category: string;
};

type DreamArticle = {
  id: string;
  title: string;
  content: string;
  category: string;
};

export type Message = {
  id: string;
  data: {
    text: string;
    profileUrl: string;
    username: string;
    avatarUrl: string;
    userId: string;
  };
};

export type Zodiacs = Zodiac[];

// interface StarSign {
//   name: string;
// }

// interface User {
//   name: string;
//   email: string;
//   clerkUserId: string;
//   starSign: string;
// }

// interface BirthChart {
//   userEmail: string;
//   birthDate: string;
//   birthTime: string;
//   birthPlace: string;
//   ascendant: string;
//   sunSign: string;
//   moonSign: string;
// }

// interface FengShuiReading {
//   userEmail: string;
//   readingDate: string;
//   propertyType: string;
//   direction: string;
//   analysis: string;
//   recommendations: string;
// }
