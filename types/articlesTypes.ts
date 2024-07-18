export type Category = {
  name: string;
  id: number;
  description: string;
};

export type Article = {
  title: string;
  content: string;
  authorId: number;
  dreamCategoryId: number;
};

export type Data = {
  categories: Record<string, number>;
  articles: Record<string, Article>;
};
