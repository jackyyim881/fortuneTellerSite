import React from "react";

interface ScoreResultProps {
  score: number;
}

export default function ScoreResult({ score }: ScoreResultProps) {
  return <div>Score Result Component: {score}</div>;
}
