"use client";

import React, { useState, Fragment, useEffect } from "react";
import { motion } from "framer-motion";

export default function SpinningWheel() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [offset, setOffset] = useState(Math.random());
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setOffset(Math.random());
  }, []);
  const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ]; // Zodiac signs as items
  const numOfItems = zodiacSigns.length;
  const anglePerItem = 360 / numOfItems;
  const r = 200;
  const cx = 250;
  const cy = 250;
  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const newRotation = Math.random() * 3600 + 3600; // Random rotation between 3600 and 7200 degrees
    setRotation(newRotation);
    setTimeout(() => {
      setIsSpinning(false);
      const finalAngle = newRotation % 360;
      const selectedItemIndex =
        Math.floor(finalAngle / anglePerItem + offset * numOfItems) %
        numOfItems;

      setSelectedItem(selectedItemIndex as any);
      setShowPopup(true); // Show popup with the result
    }, 4000); // Adjust duration to match animation
  };

  const renderItems = (numOfItems: number): JSX.Element[] => {
    let items: JSX.Element[] = [];
    for (let i = 0; i < numOfItems; i++) {
      let xLength = Math.cos(2 * Math.PI * (i / numOfItems + offset)) * (r - 5);
      let yLength = Math.sin(2 * Math.PI * (i / numOfItems + offset)) * (r - 5);
      let txLength =
        Math.cos(2 * Math.PI * ((i + 0.5) / numOfItems + offset)) * (r / 2);
      let tyLength =
        Math.sin(2 * Math.PI * ((i + 0.5) / numOfItems + offset)) * (r / 2);
      items.push(
        <Fragment key={i}>
          <line
            stroke="rgba(0,0,0,0.5)"
            strokeWidth="1"
            x1={cx + xLength}
            y1={cy + yLength}
            x2={cx}
            y2={cy}
          />
          <text
            x={cx + txLength}
            y={cy + tyLength}
            fontSize="15px"
            transform={`rotate(${((i + 0.5) / numOfItems + offset) * 360} 
                  ${cx + txLength},
                  ${cy + tyLength})`}
          >
            {i}
          </text>
        </Fragment>
      );
    }
    return items;
  };

  return (
    <section className="flex justify-center items-center">
      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={handleSpin}
      >
        Spin the Wheel!
      </button>
      <div className=" ">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          style={{ width: "40vw", height: "80vh" }}
          animate={{ rotate: rotation }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <g fill="white" stroke="green" strokeWidth="10">
            <circle cx="250" cy="250" r={r} />
          </g>
          <g>{renderItems(numOfItems)}</g>
          <g fill="#61DAFB">
            <circle cx="250" cy="250" r="15" />
          </g>
          <g fill="black">
            <circle cx="250" cy="250" r="5" />
          </g>
          <g fill="lime" stroke="purple" strokeWidth="2">
            <polygon points="250,70 230,30 270,30" />
          </g>
        </motion.svg>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Your Luck: Item {selectedItem}</h2>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
