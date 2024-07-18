"use server";

import cheerio from "cheerio";
const BASE_URL = "http://www.chance.org.tw/";

export async function fetchData() {
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
      data.push({ href, text, img });
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw new Error("Failed to fetch data");
  }
}
