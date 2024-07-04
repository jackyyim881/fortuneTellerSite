import RandomChance from "./_components/random-chances";
import TarotRandomCard from "./_components/tarot-random-card-btn";

export default async function Page() {
  return (
    <div className="p-4">
      <h1 className="text__title">塔羅牌</h1>
      <TarotRandomCard />
      <RandomChance />
    </div>
  );
}
