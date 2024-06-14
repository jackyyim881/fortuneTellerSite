import MatchList from "@/components/match-list";
import { currentUser } from "@clerk/nextjs/server";
import FormList from "@/components/add-starsign-form-list";
import { getStarSigns } from "../../action";

export default async function MatchPage() {
  const user = await currentUser();
  const username = user?.fullName as string;
  const email = user?.emailAddresses[0].emailAddress as string;
  const starSigns = await getStarSigns();
  return (
    <section className="p-4">
      <div className="">
        <h1 className="title">配對</h1>
        <div className="">
          {user ? (
            <>
              <div className="mt-5">
                <MatchList matches={[]} />
                <div className=" relative mt-5 text-2xl text-red-700   font-bold">
                  <p className="p-4">已成功注册</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="mt-5 text-red-500">請先登錄以查看配對</p>
              <FormList
                username={username}
                email={email}
                starSigns={starSigns}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
