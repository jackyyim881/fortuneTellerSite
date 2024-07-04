import { currentUser } from "@clerk/nextjs/server";
import { retrieveStarSigns, retrieveUserInfo } from "./action";
import SectionInfo from "./section";

export default async function MatchPage() {
  const user = await currentUser();
  const starSigns = await retrieveStarSigns();

  if (!user) {
    return <div>Please sign in to access the dashboard.</div>;
  }
  const { fullName, username } = user;
  const email = user.emailAddresses[0].emailAddress;
  const displayName = (fullName as string) || (username as string);

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
