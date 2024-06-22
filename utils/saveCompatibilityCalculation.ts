import prisma from "@/lib/prisma";

type CompatibilityCalculationScope = {
  userAId: number;
  userBId: number;
  birthDateA: string;
  birthTimeA: string;
  birthDateB: string;
  birthTimeB: string;
  score: number;
  analysis1: string;
  analysis2: string;
  compatibilityAnalysis: string;
};

export const saveCompatibilityCalculation = async ({
  userAId,
  userBId,
  birthDateA,
  birthTimeA,
  birthDateB,
  birthTimeB,
  score,
  analysis1,
  analysis2,
  compatibilityAnalysis,
}: CompatibilityCalculationScope) => {
  const newCalculation = await prisma.compatibilityCalculation.create({
    data: {
      birthDateA: new Date(birthDateA),
      birthTimeA: new Date(`1970-01-01T${birthTimeA}:00Z`),
      birthDateB: new Date(birthDateB),
      birthTimeB: new Date(`1970-01-01T${birthTimeB}:00Z`),
      score,
      analysis1,
      analysis2,
      compatibilityAnalysis,
    },
  });
  console.log("Saved compatibility calculation: ", newCalculation.id);
  return newCalculation;
};
