"use client";

import Image from "next/image";
import { useState } from "react";

export default function Categories() {
  const categories = [
    { name: "人物", img: "/images/person.png" },
    { name: "生活", img: "/images/life.png" },
    { name: "物品", img: "/images/items.png" },
    { name: "身体", img: "/images/body.png" },
    { name: "动物", img: "/images/animals.png" },
    { name: "植物", img: "/images/plants.png" },
    { name: "鬼神", img: "/images/ghosts.png" },
    { name: "建筑", img: "/images/buildings.png" },
    { name: "自然", img: "/images/nature.png" },
    { name: "情爱", img: "/images/love.png" },
    { name: "梦文化", img: "/images/dream-culture.png" },
  ];
  return (
    <div className="flex bg-slate-100 p-4  space-x-4">
      {categories.map((category, index) => (
        <div key={index} className="flex">
          <span className=" p-4 bg-white "> {category.name}</span>
        </div>
      ))}
    </div>
  );
}
