"use client";
import MatchList from "@/components/MatchList";
import MatchButton from "@/components/MatchPeopleComponent";
import { useUser } from "@clerk/nextjs";
export default function MatchPage({ match }: any) {
  const { user } = useUser();
  return (
    <div className="flex  relative  justify-center min-h-screen items-center">
      <div className="border p-4 ">
        <h1 className="text-4xl  font-bold ">配對</h1>
        {user ? (
          <MatchList matches={[]} />
        ) : (
          <p className="text-red-500">請先登錄以查看配對</p>
        )}
        <MatchButton />
      </div>
    </div>
  );
}
