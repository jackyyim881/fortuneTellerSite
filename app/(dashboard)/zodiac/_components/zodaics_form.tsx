"use client";

import CardComponent from "@/components/ui/Card";
import { useState } from "react";

export default function ZodaicsPageInfo({
  name,
  data,
}: {
  name: string;
  data: any;
}) {
  return (
    <div className="p-4">
      <h1 className="text-3xl mt-2 font-bold">生肖</h1>
      <div className="mt-2">
        {/* <EditComponent isEditing={isEditing} toggleEditing={toggleEditing} /> */}
      </div>
      <div className="bg-white p-4 font-thin mt-4 rounded-md shadow-lg">
        {data?.map((zodiac: any) => {
          return (
            <div key={zodiac.id} className="text-2xl *:py-2 ">
              <div className="text-4xl  font-bold bg-blue-200 rounded-md">
                <h1 className="ml-2">{zodiac.name}</h1>
              </div>
              <p>元素{zodiac.element}</p>
              <p>陰陽{zodiac.yinYang}</p>
              <p>幸運數字{zodiac.luckyNumbers.join(" , ")}</p>
              <p>幸運顏色{zodiac.luckyColors.join(" , ")}</p>
              <p>幸運花卉{zodiac.luckyFlowers.join(" , ")}</p>
              <p>性格特點{zodiac.personalityTraits.join(" , ")}</p>
              <p>相容星座{zodiac.compatibleSigns.join(" , ")}</p>
              <p>不相容星座{zodiac.incompatibleSigns.join(" , ")}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4">
        {/* <CardComponent
          title={data.title}
          description={data.description}
          img={data.img}
          href={data.href}
          isEditing={isEditing}
        /> */}
      </div>
    </div>
  );
}
