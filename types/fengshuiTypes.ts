export type AstrologyData = {
  plugins: any[];
  gender: string;
  solarDate: string;
  lunarDate: string;
  chineseDate: string;
  rawDates: {
    lunarDate: {
      lunarYear: number;
      lunarMonth: number;
      lunarDay: number;
      isLeap: boolean;
    };
    chineseDate: {
      yearly: string[];
      monthly: string[];
      daily: string[];
      hourly: string[];
    };
  };
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
};

type Palace = {
  index: number;
  name: string;
  isBodyPalace: boolean;
  isOriginalPalace: boolean;
  heavenlyStem: string;
  earthlyBranch: string;
  majorStars: Star[];
  minorStars: Star[];
  adjectiveStars: AdjectiveStar[];
  changsheng12: string;
  boshi12: string;
  jiangqian12: string;
  suiqian12: string;
  decadal: Decadal;
  ages: number[];
};

type Star = {
  name: string;
  type: string;
  scope: string;
  brightness: string;
  mutagen?: string;
};

type AdjectiveStar = {
  name: string;
  type: string;
  scope: string;
};

type Decadal = {
  range: [number, number];
  heavenlyStem: string;
  earthlyBranch: string;
};
