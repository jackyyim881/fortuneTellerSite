"use client";
import { StarSign } from "@prisma/client";
import PairComponent from "./pairing-items";

type Person = {
  name: string;
  gender: "boy" | "girl";
};

type Match = {
  boy: Person;
  girl: Person;
};

type MatchListProps = {
  starSign: StarSign[];
};

export default function MatchList({ starSign }: MatchListProps) {
  const handleReset = () => {
    window.location.reload();
  };
  function ListMatches({ matches }: any) {
    return (
      <div>
        {matches.map((match: any, index: any) => (
          <li key={index} className="">
            {match.boy.name} and {match.girl.name} are a match!
          </li>
        ))}
      </div>
    );
  }

  function ButtonReset({ handleReset }: any) {
    return (
      <button className="button--match--primary" onClick={handleReset}>
        重新配對
      </button>
    );
  }

  function ButtonPair({ findPair }: any) {
    return (
      <button onClick={findPair} className="button--match--primary">
        尋找配對
      </button>
    );
  }

  return (
    <>
      <div className="">
        <ul className="">{/* <ListMatches /> */}</ul>
        <div className="flex space-x-4">
          <ButtonReset handleReset={handleReset} />
          <ButtonPair />
        </div>
        <PairComponent starSign={starSign} />
      </div>
    </>
  );
}
