"use client";
import PairComponent from "./pairing-items";

export default function MatchList({ starSign }: any) {
  const handleReset = () => {
    window.location.reload();
  };

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
        <div className="flex space-x-4">
          <ButtonReset handleReset={handleReset} />
          <ButtonPair />
        </div>
        <PairComponent starSign={starSign} />
      </div>
    </>
  );
}
