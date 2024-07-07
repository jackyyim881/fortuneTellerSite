import { astro } from "iztro";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { solarDateStr, timeIndex, gender, fixLeap, language } = body;

    console.log("Received body:", body);

    // Validate the received data
    if (
      !solarDateStr ||
      !timeIndex ||
      !gender ||
      fixLeap === undefined ||
      !language
    ) {
      throw new Error("Invalid input data");
    }

    const astrolabe = astro.bySolar(
      solarDateStr,
      timeIndex,
      gender,
      fixLeap,
      language
    );

    return NextResponse.json(astrolabe, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while processing the request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "This endpoint only supports POST requests" },
    { status: 405 }
  );
}
