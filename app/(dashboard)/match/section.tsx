import FormList from "./_components/add-starsign-form-list";
import MatchList from "./_components/match-list";
import { getStarSignsForUser, retrieveUserInfo } from "./action";
export default async function SectionInfo({ displayName, email, starSigns }) {
  const user = await retrieveUserInfo();
  const starSignData = getStarSignsForUser();
  if (!user) {
    throw new Error("You must be signed in to use this feature");
  }
  const starSignUser = (await starSignData).userInfo?.starSign.name;
  return (
    <>
      {!starSignUser ? (
        <>
          <div>
            <h1 className="text_small_heading">
              你好，{displayName}！請填寫以下信息以查看你的配對。
            </h1>
            <FormList
              username={displayName}
              email={email}
              starSigns={starSigns}
            />
          </div>
        </>
      ) : (
        <div className="mt-5">
          <MatchList starSign={starSignUser} />
        </div>
      )}
    </>
  );
}
