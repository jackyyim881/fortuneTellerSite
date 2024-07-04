"use client";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const search = useSearchParams().get("query");
  return (
    <div className="inline-block p-2">
      <h1
        className="
        text__title
      "
      >
        Search
      </h1>
      {search ? (
        <p
          className="
        text_small_heading
        "
        >
          Your search keyword is{" "}
          <span className="font-bold text-black text-2xl">{search}</span>.
        </p>
      ) : (
        <p>Please enter a keyword to search.</p>
      )}
    </div>
  );
}
