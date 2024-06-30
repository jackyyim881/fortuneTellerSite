import Image from "next/image";
import i18n from "@/utils/i18n";
import { State } from "./pairing-items";
export default function OnlineUsers(state: State) {
  return (
    <>
      <div className="mt-8  font-bold">
        <h2 className="text-3xl">{i18n.t("online_users")}</h2>
        <div className="grid grid-cols-3 text-2 mt-5 leading-6 gap-4">
          {state.onlineUsers.map((user, idx) => (
            <div key={idx} className="flex m-4 flex-col items-center">
              <div className=" ring-2 ring-gray-200 leading-4 w-16 h-16 rounded-full overflow-hidden">
                <div className="">
                  <Image
                    src={user.profileImageUrl || "/user.png"}
                    alt="user image"
                    className=""
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <p>{user?.userId}</p>
              <div className="flex">
                星座 &nbsp;
                <p>{user?.starSignId}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
