"use client";
import { useState } from "react";
import Categories from "./dream-categories-items";

export type Category = {
  name: string;
  img: string;
};

export default function CategoriesClient({
  initialCategories,
}: {
  initialCategories: Category[];
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Categories
      data={initialCategories}
      activeCategory={activeCategory}
      onCategoryClick={handleCategoryClick}
    />
  );
}
