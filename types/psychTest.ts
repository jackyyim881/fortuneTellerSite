export interface PsychTest {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface Question {
  question: string;
  options: string[];
  type: string;
  category: string;
  instructions: string;
}

export interface TestCreationResult {
  id: string;
  title: string;
  description: string;
  questions: QuestionCreationResult[];
}

export interface QuestionCreationResult {
  id: string;
  question: string;
  type: string;
  category: string;
  instructions: string;
  options: OptionCreationResult[];
}

export interface OptionCreationResult {
  id: string;
  text: string;
}
