import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { parseISO, setHours, setMinutes, setSeconds } from "date-fns";

export async function POST(request: Request) {
  const {
    birthDateA,
    birthTimeA,
    birthDateB,
    birthTimeB,
    score,
    analysis1,
    analysis2,
    compatibilityAnalysis,
  } = await request.json();

  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const birthDateTimeA = setSeconds(
    setMinutes(
      setHours(parseISO(birthDateA), parseInt(birthTimeA.split(":")[0])),
      parseInt(birthTimeA.split(":")[1])
    ),
    0
  );
  const birthDateTimeB = setSeconds(
    setMinutes(
      setHours(parseISO(birthDateB), parseInt(birthTimeB.split(":")[0])),
      parseInt(birthTimeB.split(":")[1])
    ),
    0
  );

  const compatibilityCalculation = await prisma.compatibilityCalculation.create(
    {
      data: {
        birthDateA: birthDateTimeA,
        birthTimeA: birthDateTimeA,
        birthDateB: birthDateTimeB,
        birthTimeB: birthDateTimeB,
        score: parseFloat(score),
        analysis1,
        analysis2,
        compatibilityAnalysis,
      },
    }
  );

  return NextResponse.json({ compatibilityCalculation }, { status: 200 });
}
