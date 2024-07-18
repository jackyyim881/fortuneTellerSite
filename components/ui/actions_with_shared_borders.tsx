"use client";

import { ZodiacDetailsProps } from "@/types/types";
import { Sun, Moon, Star } from "lucide-react";

export default function ZodiacDetails({ selectedZodiac }: ZodiacDetailsProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg shadow-2xl overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <Sun className="w-12 h-12 mr-4 text-yellow-300" />
            <div>
              <h2 className="text-4xl font-bold">{selectedZodiac?.name}</h2>
              <h3 className="text-xl opacity-75">({selectedZodiac?.date})</h3>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold">
              {selectedZodiac?.details?.keyword}
            </p>
            <p className="opacity-75">關鍵詞</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <DetailItem
              icon={<Moon className="w-5 h-5" />}
              label="主宰星"
              value={selectedZodiac?.details?.planet}
            />
            <DetailItem
              icon={
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: selectedZodiac?.details?.color }}
                />
              }
              label="顏色"
              value={selectedZodiac?.details?.color}
            />
            <DetailItem
              icon={<Star className="w-5 h-5" />}
              label="寶石"
              value={selectedZodiac?.details?.gemstone}
            />
          </div>
          <div className="space-y-4">
            <DetailItem
              icon={<div className="w-5 h-5 rounded-full bg-blue-300" />}
              label="元素"
              value={selectedZodiac?.details?.element}
            />
            <DetailItem
              icon={<div className="w-5 h-5 text-center font-bold">♥</div>}
              label="配對星座"
              value={selectedZodiac?.details?.compatibility}
            />
            <DetailItem
              icon={<div className="w-5 h-5 text-center font-bold">#</div>}
              label="幸運數字"
              value={selectedZodiac?.details?.luckyNumber}
            />
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-800 p-6 mt-6">
        <h4 className="text-xl font-semibold mb-3">性格特徵</h4>
        <p className="text-lg leading-relaxed">
          {selectedZodiac?.details?.traits}
        </p>
      </div>
    </div>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <div className="flex items-center">
      <div className="mr-3 text-yellow-300">{icon}</div>
      <div>
        <p className="font-medium">{value}</p>
        <p className="text-sm opacity-75">{label}</p>
      </div>
    </div>
  );
}
