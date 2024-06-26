import MatchList from "@/components/MatchList";
import { useUser } from "@clerk/nextjs";
import { ToastContainer, toast } from "react-toastify";
import { currentUser } from "@clerk/nextjs/server";
import FormList from "@/components/form-list";
import { getStarSigns } from "../action";
import { useToastMessage } from "@/app/hooks/useToastMessage";
import ClientToastHandler from "@/components/ClientToastHandler";

export default async function MatchPage() {
  const user = await currentUser();
  const username = user?.fullName as string;
  const email = user?.emailAddresses[0].emailAddress as string;
  const starSigns = await getStarSigns();
  return (
    <section className="p-4">
      <div className="">
        <h1 className="title ">配對</h1>
        <div className="">
          {user ? (
            <>
              <div className="mt-5">
                <MatchList matches={[]} />
                <p className="mt-5 text-red-500   font-bold">已成功注册</p>
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

      <ClientToastHandler />
    </section>
  );
}
