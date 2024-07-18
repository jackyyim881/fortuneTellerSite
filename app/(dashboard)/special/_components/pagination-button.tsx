"use client";
import clsx from "clsx";
import React, { useState } from "react";
export default function PaginationButton() {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="space-x-4 items-center mt-6">
      <button
        className={clsx(
          "bg-white",
          "text-black",
          "font-bold",
          "py-2",
          "px-4",
          "rounded",
          "focus:outline-none",
          "focus:shadow-outline",
          { "cursor-not-allowed opacity-50": currentPage === 1 }
        )}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        上一頁
      </button>
      <button
        className={clsx(
          "bg-white",
          "text-black",
          "font-bold",
          "py-2",
          "px-4",
          "rounded",
          "focus:outline-none",
          "focus:shadow-outline"
        )}
        onClick={handleNextPage}
      >
        下一頁
      </button>
    </div>
  );
}
