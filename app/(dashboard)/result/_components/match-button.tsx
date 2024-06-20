"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function MatchButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Use the useRouter hook for navigation
  const handleClick = async (e: any) => {
    e.preventDefault();
    router.push("/match");

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
        "開始配對" // Changed to a simple text since navigation is now handled programmatically
      )}
    </button>
  );
}
