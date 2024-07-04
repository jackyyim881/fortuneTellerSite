// app/api/chance/route.ts
import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
const BASE_URL = "http://www.chance.org.tw/";

// Handle GET requests
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await fetch(BASE_URL);
    const $ = cheerio.load(await response.text());
    const td = $('td[width="709"][valign="top"]');
    const data: {
      href: string | undefined;
      text: string;
      img: string | undefined;
    }[] = [];

    td.find("a").each((index, element) => {
      const href = $(element).attr("href");
      const text = $(element).text().trim();
      const img = $(element).find("img").attr("src");
      // Push the extracted data into the array
      data.push({ href, text, img });
    });
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch chances" },
      { status: 500 }
    );
  }
}

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newChance = {
      title: body.title,
      content: body.content,
    };

    // Here, you would typically save `newChance` to your database

    return NextResponse.json({
      message: "Chance saved successfully",
      chance: newChance,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save chance" },
      { status: 500 }
    );
  }
}
