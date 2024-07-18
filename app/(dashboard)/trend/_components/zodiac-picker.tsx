"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ZodiacSign = {
  name: string;
  color: string;
};
const zodiacSigns = [
  { name: "白羊座", color: "bg-red-500" },
  { name: "金牛座", color: "bg-green-500" },
  { name: "雙子座", color: "bg-yellow-500" },
  { name: "巨蟹座", color: "bg-blue-500" },
  { name: "獅子座", color: "bg-orange-500" },
  { name: "處女座", color: "bg-indigo-500" },
  { name: "天秤座", color: "bg-pink-500" },
  { name: "天蠍座", color: "bg-purple-500" },
  { name: "射手座", color: "bg-teal-500" },
  { name: "摩羯座", color: "bg-gray-500" },
  { name: "水瓶座", color: "bg-cyan-500" },
  { name: "雙魚座", color: "bg-lime-500" },
];

export default function ZodiacPicker() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startSpinning = () => {
    setIsSpinning(true);
    setSelectedSign(null);
    setCurrentIndex(0);
    toast("正在抽取星座...", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (isSpinning) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % zodiacSigns.length);
      }, 100);

      const spinDuration = 3000 + Math.random() * 2000; // 3-5 seconds
      const timeout = setTimeout(() => {
        clearInterval(interval);
        setIsSpinning(false);
        const randomIndex = Math.floor(Math.random() * zodiacSigns.length);
        setSelectedSign(zodiacSigns[randomIndex]);
      }, spinDuration);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isSpinning]);

  return (
    <div className="flex flex-col items-center justify-center  ">
      <button
        onClick={startSpinning}
        disabled={isSpinning}
        className={clsx(
          "px-4 py-2 mb-8 text-white rounded-full transition-all",
          isSpinning
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        )}
      >
        {isSpinning ? "正在抽取..." : "抽取星座"}
      </button>
      <div
        className={clsx(
          "w-64 h-64 rounded-full flex items-center justify-center text-3xl font-bold text-white transition-all duration-300",
          isSpinning
            ? zodiacSigns[currentIndex].color
            : selectedSign
            ? selectedSign.color
            : "bg-gray-300"
        )}
      >
        {selectedSign
          ? selectedSign.name
          : isSpinning
          ? zodiacSigns[currentIndex].name
          : "?"}
      </div>
      <ToastContainer />
    </div>
  );
}
