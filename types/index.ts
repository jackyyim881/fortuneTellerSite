export interface QuizData {
  title: string;
  questions: Question[];
}

// export interface Question {
//   question: string;
//   options: string[];
// }

export interface Answer {
  questionIndex: number;
  answer: string;
}
export interface Question {
  id: string;
  question: string;
  options: { id: string; text: string; questionId: string }[];
}

export interface QuizMenuListProps {
  questions: Question[];
}
