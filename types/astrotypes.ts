export interface AstrolabeResult {
  plugins: string[];
  gender: string;
  solarDate: string;
  lunarDate: string;
  chineseDate: string;
  rawDates: RawDates;
  time: string;
  timeRange: string;
  sign: string;
  zodiac: string;
  earthlyBranchOfBodyPalace: string;
  earthlyBranchOfSoulPalace: string;
  soul: string;
  body: string;
  fiveElementsClass: string;
  palaces: Palace[];
  copyright: string;
}

export interface RawDates {
  lunarDate: LunarDate;
  chineseDate: ChineseDate;
}

export interface LunarDate {
  lunarYear: number;
  lunarMonth: number;
  lunarDay: number;
  isLeap: boolean;
}

export interface ChineseDate {
  yearly: string[];
  monthly: string[];
  daily: string[];
  hourly: string[];
}

export interface Palace {
  index: number;
  name: string;
  isBodyPalace: boolean;
  isOriginalPalace: boolean;
  heavenlyStem: string;
  earthlyBranch: string;
  majorStars: Star[];
  minorStars: Star[];
  adjectiveStars: Star[];
  changsheng12: string;
  boshi12: string;
  jiangqian12: string;
  suiqian12: string;
  decadal: Decadal;
  ages: number[];
}

export interface Star {
  name: string;
  type: string;
  scope: string;
  brightness?: string;
  mutagen?: string;
}

export interface Decadal {
  range: [number, number];
  heavenlyStem: string;
  earthlyBranch: string;
}
