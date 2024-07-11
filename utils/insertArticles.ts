import prisma from "../lib/prisma";

type ArticleData = {
  title: string;
  content: string;
  dreamCategoryId: number;
  authorId: number;
};

export async function insertArticle(articleData: ArticleData) {
  return await prisma.dreamArticle.create({
    data: {
      title: articleData.title,
      content: articleData.content,
      dreamCategory: {
        connect: {
          id: articleData.dreamCategoryId,
        },
      },
      author: {
        connect: {
          id: articleData.authorId,
        },
      },
    },
  });
}
