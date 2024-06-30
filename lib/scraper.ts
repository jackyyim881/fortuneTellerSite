import { CheerioAPI, load } from "cheerio";

export type SpecialArticleData = {
  name: string;
  description: string;
  date: string;
  type: string;
};

export const fetchSpecialArticlesData = async (
  url: string,
  limit: number = 10
): Promise<SpecialArticleData[]> => {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $: CheerioAPI = load(html);
    const articles: SpecialArticleData[] = [];
    $("div.zt-list-bd").each((index, element) => {
      if (index < limit) {
        const name = $(element).find("dt span.type").text().trim();
        const description = $(element)
          .find("dl.zt-con dt h3.tit")
          .text()
          .trim();
        const type = $(element).find("span.type").text().trim();
        const date = $(element)
          .find("dl.zt-con dd.zt-ft span.zt-time")
          .text()
          .trim();
        // Add the extracted data to the articles array
        articles.push({ name, description, date, type });
      }
    });
    return articles;
  } catch (error) {
    console.error("Error fetching articles data:", error);
    return [];
  }
};

const url = "http://www.suanming.com/zt/";
fetchSpecialArticlesData(url, 5).then((data) => {});
