"use client";

import Pairing from "./Pairing";

type Person = {
  name: string;
  gender: "boy" | "girl";
};

type Match = {
  boy: Person;
  girl: Person;
};

type MatchListProps = {
  matches: Match[];
};

export default function MatchList({ matches }: MatchListProps) {
  const handleReset = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="">
        <ul className="">
          {matches.map((match, index) => (
            <li key={index} className="">
              {match.boy.name} and {match.girl.name} are a match!
            </li>
          ))}
        </ul>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={handleReset}
        >
          重新配對
        </button>
      </div>
      <Pairing />
    </>
  );
}
