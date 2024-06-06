"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function MatchButton() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <button
      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <AnimatePresence>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Loading...
          </motion.div>
        </AnimatePresence>
      ) : (
        <Link
          href="/match"
          className="
            text-md font-bold 
            bg-blue-600 text-white 
        
            rounded-lg hover:bg-blue-700 
            transition duration-300>
      "
        >
          開始配對
        </Link>
      )}
    </button>
  );
}
