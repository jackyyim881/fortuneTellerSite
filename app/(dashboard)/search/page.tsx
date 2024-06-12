"use client";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const search = useSearchParams().get("query");
  return (
    <div>
      <h1>Search</h1>
      {search ? (
        <p>
          Your search keyword is{" "}
          <span className="font-bold text-white text-1xl">{search}</span>.
        </p>
      ) : (
        <p>Please enter a keyword to search.</p>
      )}
    </div>
  );
}
