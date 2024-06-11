import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse the JSON body from the request
    const { name, gender, year, month, day, hour } = body;

    // Perform your calculations here based on the input data
    const result = {
      fortune: `This is a mock fortune result for ${name} (${gender}) born on ${year}-${month}-${day} at ${hour} hours.`,
    };

    return NextResponse.json(result);
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
