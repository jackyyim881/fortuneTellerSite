"use server";
import prisma from "@/lib/prisma";
import { Category } from "./_components/categories-client";

export async function fetchDreamCategories(): Promise<Category[]> {
  const data = await prisma.dreamCategory.findMany({
    select: {
      name: true,
    },
  });
  const categories = data.map((category) => {
    return {
      name: category.name,
      img: "",
    };
  });
  return categories;
}

export async function fetchAllDreamArticles(): Promise<any> {
  // Fetch all articles and their related categories in a single query
  const allArticles = await prisma.dreamArticle.findMany({
    select: {
      title: true,
      content: true,
      authorId: true,
      dreamCategory: {
        select: {
          name: true,
        },
      },
    },
  });

  // Extract the articles from the fetched data
  const articles = allArticles.map((article) => ({
    title: article.title,
    content: article.content,
    authorId: article.authorId,
    category: article.dreamCategory.name,
  }));

  return articles;
}

export async function fetchDreamArticles(category: string): Promise<any> {
  "use server";

  // Fetch the category and its related articles in a single query
  const findCategoryWithArticles = await prisma.dreamCategory.findFirst({
    where: {
      name: category,
    },

    include: {
      dreamArticles: {
        select: {
          title: true,
          content: true,
          authorId: true,
          dreamCategoryId: true,
        },
      },
    },
  });

  // If the category is not found, return null
  if (!findCategoryWithArticles) {
    return null;
  }

  // Extract the articles from the fetched category data
  const articles = findCategoryWithArticles.dreamArticles.map((article) => ({
    title: article.title,
    content: article.content,
    authorId: article.authorId,
  }));

  return articles;
}

export async function searchArticlesGroupsUseCase(search = "", page = 1) {
  const perPage = 10;
  const skip = (page - 1) * perPage;

  const where = search
    ? {
        OR: [
          { title: { contains: search } },
          { content: { contains: search } },
        ],
      }
    : {};

  const [data, total] = await Promise.all([
    prisma.dreamArticle.findMany({
      where,
      take: perPage,
      skip,
      orderBy: { createdAt: "desc" },
    }),
    prisma.dreamArticle.count({ where }),
  ]);

  return {
    data,
    perPage,
    total,
    totalPages: Math.ceil(total / perPage),
  };
}
