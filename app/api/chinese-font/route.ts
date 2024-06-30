import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { ttfToBase64 } from "@/lib/ttfToBase64";

export async function GET(req: NextRequest) {
  try {
    const base64Font = await ttfToBase64(
      path.join(process.cwd(), "public", "fonts", "TaipeiSans.ttf")
    );

    return NextResponse.json({ base64Font });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
