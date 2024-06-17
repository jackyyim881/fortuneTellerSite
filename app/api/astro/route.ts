import { astro } from "iztro";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse the JSON body from the request
    const { solarDateStr, timeIndex, gender, fixLeap, language } = body;
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
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "This endpoint only supports POST requests" },
    { status: 405 }
  );
}
