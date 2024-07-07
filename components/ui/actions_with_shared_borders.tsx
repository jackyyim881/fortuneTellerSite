"use client";

import { ZodiacDetailsProps } from "@/types/types";

export default function ZodiacDetails({ selectedZodiac }: ZodiacDetailsProps) {
  return (
    <div
      className="divide-y divide-gray-200 overflow-hidden rounded-lg h-[400px] 
    
      bg-white 
    shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
    >
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-purple-700 text-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
            <h2 className="text-4xl  font-bold mt-2">{selectedZodiac?.name}</h2>
            <h3 className="text-xl">({selectedZodiac?.date})</h3>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 text-sm leading-6 has-[400px] p-8">
        <div className="*:p-2 ">
          <p className="">
            <strong>關鍵詞:</strong> {selectedZodiac?.details?.keyword}
          </p>
          <p>
            <strong>主宰星:</strong> {selectedZodiac?.details?.planet}
          </p>
          <p>
            <strong>顏色:</strong> {selectedZodiac?.details?.color}
          </p>
          <p>
            <strong>寶石:</strong> {selectedZodiac?.details?.gemstone}
          </p>
          <p>
            <strong>元素:</strong> {selectedZodiac?.details?.element}
          </p>
        </div>
        <div className="*:p-2">
          <p>
            <strong>性格特徵:</strong> {selectedZodiac?.details?.traits}
          </p>
          <p>
            <strong>配對星座:</strong> {selectedZodiac?.details?.compatibility}
          </p>
          <p>
            <strong>幸運數字:</strong> {selectedZodiac?.details?.luckyNumber}
          </p>
        </div>
      </div>
    </div>
  );
}
