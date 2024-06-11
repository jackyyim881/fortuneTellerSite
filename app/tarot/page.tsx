import RandomCard from "@/components/tarot/RandomCard";

export default async function Page() {
  return (
    <div className="p-4">
      <h1 className="font-bold text-3xl">Tarot</h1>
      <RandomCard />
    </div>
  );
}
