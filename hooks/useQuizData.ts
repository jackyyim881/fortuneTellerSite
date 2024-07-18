import { useState, useEffect } from "react";
import { QuizData } from "@/types/index";
import prisma from "@/lib/prisma";

export function useQuizData(url: string) {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: QuizData) => {
        setQuizData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quiz data:", error);
        setIsLoading(false);
      });
  }, [url]);

  return { quizData, isLoading };
}
