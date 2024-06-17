"use client";
import { useState } from "react";
import { createStarId } from "./action";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ id: string }>();
  const decodedId = decodeURIComponent(params.id);
  return (
    <>
      <ul className="flex mt-7 space-x-4 ml-4">
        <li className=" text-4xl font-bold">{decodedId}</li>{" "}
      </ul>
    </>
  );
}
