import FormList from "./_components/add-starsign-form-list";
import MatchList from "./_components/match-list";
import { getStarSignsForUser, retrieveUserInfo } from "./action";
export default async function SectionInfo({ displayName, email, starSigns }) {
  const user = await retrieveUserInfo();
  const starSign = getStarSignsForUser();
  if (!user) {
    throw new Error("You must be signed in to use this feature");
  }

  return (
    <>
      {!user ? ( // Inverted the condition here
        <>
          <p className="text_small_heading">
            你好，{displayName}！請填寫以下信息以查看你的配對。
          </p>
          <FormList
            username={displayName}
            email={email}
            starSigns={starSigns}
          />
        </>
      ) : (
        <div className="mt-5">
          <MatchList starSign={starSign} />
        </div>
      )}
    </>
  );
}
