import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const fetchData = prisma.question.findMany();
  try {
    const data = await fetchData;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch chances" },
      { status: 500 }
    );
  }
}
