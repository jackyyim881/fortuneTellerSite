import React from "react";

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export default function ProgressIndicator({
  current,
  total,
}: ProgressIndicatorProps) {
  return (
    <div className="mt-5 text-white font-bold">
      <span className="border rounded-md p-2">
        當前進度 &nbsp; {current} / {total}
      </span>
    </div>
  );
}
