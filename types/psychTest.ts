export type Question = {
  id?: string; // Optional, as it might not be present in the initial JSON data
  question: string;
  options: string[];
  type: string;
  category: string;
  instructions: string;
};
export type PsychTest = {
  id?: string; // Optional, as it might not be present in the initial JSON data
  title: string;
  description: string;
  questions: Question[];
};

export type TestCreationResult = {
  id: string;
  title: string;
  description: string;
  questions: QuestionCreationResult[];
};

export type QuestionCreationResult = {
  id: string;
  question: string;
  type: string;
  category: string;
  instructions: string;
  options: OptionCreationResult[];
};

export type OptionCreationResult = {
  id: string;
  text: string;
};
