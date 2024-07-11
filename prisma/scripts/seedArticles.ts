import { insertArticle } from "../../utils/insertArticles";
import { Category, Article, Data } from "../../types/articlesTypes";
import { insertCategory } from "../../utils/insertCategory";
import { DreamCategory } from "@prisma/client";
export async function seedCategories(categories: Record<string, number>) {
  try {
    for (const [name, id] of Object.entries(categories)) {
      const category: DreamCategory = { name, id, description: "" };
      const result = await insertCategory(category); // Insert category into the database
      console.log("Category inserted successfully:", result);
    }
  } catch (error) {
    console.error("Error inserting categories:", error);
  }
}

export async function seedArticles(articles: Record<string, Article>) {
  try {
    for (const [key, article] of Object.entries(articles)) {
      const result = await insertArticle(article); // Insert article into the database
      console.log("Article inserted successfully:", result);
    }
  } catch (error) {
    console.error("Error inserting articles:", error);
  }
}
