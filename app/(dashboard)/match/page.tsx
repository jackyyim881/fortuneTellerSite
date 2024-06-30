import MatchList from "./_components/match-list";
import FormList from "./_components/add-starsign-form-list";
import { currentUser } from "@clerk/nextjs/server";
import { retrieveStarSigns, retrieveUserInfo } from "./action";
import SectionInfo from "./section";
export default async function MatchPage() {
  const user = await currentUser();
  const starSigns = await retrieveStarSigns();

  if (!user) {
    return <div>Please sign in to access the dashboard.</div>;
  }

  const userInfo = await retrieveUserInfo();

  console.log(userInfo);

  // if userinfo is null, then we need to create a user
  if (!userInfo) {
    return <div>loading...</div>;
  }
  const { fullName, username } = user;
  const email = user.emailAddresses[0].emailAddress;
  const displayName = (fullName as string) || (username as string);
  // const username = user?.username ?? "";
  // const email = user?.emailAddresses[0].emailAddress ?? "";

  return (
    <div className="p-4">
      <h1 className="text__title">配對</h1>

      <SectionInfo
        displayName={displayName}
        email={email}
        starSigns={starSigns}
      />
    </div>
  );
}
