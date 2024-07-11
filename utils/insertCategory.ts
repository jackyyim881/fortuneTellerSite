import prisma from "../lib/prisma";
import { Category } from "../types/articlesTypes";

export async function insertCategory(category: Category): Promise<any> {
  const data = prisma.dreamCategory.create({
    data: {
      name: category.name,
      id: category.id,
      description: category.description,
    },
  });
  return data;
}
