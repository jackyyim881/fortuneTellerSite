"use client";

import { useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// Assuming you have these color utilities from a design system or Tailwind
const colors = {
  primary: "bg-red-600",
  secondary: "bg-yellow-400",
  text: "text-gray-800",
  background: "bg-gray-100",
};

const ZodiacCard = ({ zodiac }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`${colors.background} rounded-lg shadow-lg overflow-hidden mb-4`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className={`w-full ${colors.primary} ${colors.text} p-4 flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl font-bold">{zodiac.name}</h2>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-4"
          >
            <InfoItem title="元素" content={zodiac.element} />
            <InfoItem title="陰陽" content={zodiac.yinYang} />
            <InfoItem
              title="幸運數字"
              content={zodiac.luckyNumbers.join(", ")}
            />
            <InfoItem
              title="幸運顏色"
              content={zodiac.luckyColors.join(", ")}
            />
            <InfoItem
              title="幸運花卉"
              content={zodiac.luckyFlowers.join(", ")}
            />
            <InfoItem
              title="性格特點"
              content={zodiac.personalityTraits.join(", ")}
            />
            <InfoItem
              title="相容星座"
              content={zodiac.compatibleSigns.join(", ")}
            />
            <InfoItem
              title="不相容星座"
              content={zodiac.incompatibleSigns.join(", ")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const InfoItem = ({ title, content }) => (
  <motion.div
    className="mb-2"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <span className="font-semibold">{title}:</span> {content}
  </motion.div>
);

export default function ZodaicsPageInfo({ name, data }) {
  return (
    <div className={`${colors.background} min-h-screen p-8`}>
      <motion.h1
        className={`text-4xl font-bold ${colors.text} mb-8`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {name}生肖信息
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {data?.map((zodiac) => (
          <ZodiacCard key={zodiac.id} zodiac={zodiac} />
        ))}
      </motion.div>
    </div>
  );
}
