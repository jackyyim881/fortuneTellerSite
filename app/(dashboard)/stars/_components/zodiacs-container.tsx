"use client";

import { useState } from "react";
import { Zodiac, Zodiacs } from "@/types/types";
import ZodiacsList from "./zodiacs-list";
import ZodiacDetails from "@/components/ui/actions_with_shared_borders";

export default function ZodiacContainer({
  initialZodiacs,
}: {
  initialZodiacs: Zodiacs;
}) {
  const [zodiacs] = useState<Zodiacs>(initialZodiacs);
  const [selectedZodiac, setSelectedZodiac] = useState<Zodiac>(zodiacs[0]);

  const handleSelectedZodiac = (zodiac: Zodiac) => {
    setSelectedZodiac(zodiac);
  };

  return (
    <div className="container mx-auto p-4">
      <ZodiacsList
        zodiacs={zodiacs}
        selectedZodiac={selectedZodiac}
        onSelectZodiac={handleSelectedZodiac}
      />
      <div className="mt-6">
        {selectedZodiac && <ZodiacDetails selectedZodiac={selectedZodiac} />}
      </div>
    </div>
  );
}
