import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { socket } from "@/lib/socket";
import "@/utils/i18n";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import OnlineUsers from "./onlineUsers";

type User = {
  userId: string;
  starSignId: number;
  profileImageUrl: string;
};

type Message = {
  room: string;
  content: string;
};

export type State = {
  pair: User | null;
  room: string | null;
  messages: string[];
  newMessage: string;
  onlineUsers: User[];
};

export default function PairComponent(starSign: any) {
  const user = useUser();
  const { t } = useTranslation();
  const initialState = {
    pair: null,
    room: null,
    messages: [],
    newMessage: "",
    onlineUsers: [],
  };
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    if (user.isLoaded) {
      const currentUser = {
        userId: user.user?.fullName || user.user?.username,
        starSignId: 1, // Example starSignId
        profileImageUrl: user?.user?.imageUrl || "/user.png",
      };
      socket.emit("user_online", currentUser);

      socket.on("update_user_list", (onlineUsers: User[]) => {
        setState((prevState) => ({ ...prevState, onlineUsers }));
      });

      socket.on("pair_found", (pairedUser: User & { room: string }) => {
        setState((prevState) => ({
          ...prevState,
          pair: pairedUser,
          room: pairedUser.room,
        }));
      });

      socket.on("pair_connected", ({ room, pairedUser }) => {
        console.log(`Connected to room: ${room} with user:`, pairedUser);
        // Update the state or perform other actions as needed
      });

      socket.on("message", (content: string) => {
        setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, content],
        }));
      });

      return () => {
        socket.off("update_user_list");
        socket.off("pair_found");
        socket.off("pair_connected");
        socket.off("message");
      };
    }
  }, [user.isLoaded]);

  return (
    <div className="mt-10 inset-3">
      <div className="flex space-x-20 justify-center items-center">
        <div className="">
          {state.pair === null && (
            <p className="text-gray-100 text-4xl font-bold">
              {t("finding_pair")}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={user?.user?.imageUrl || "/user.png"}
              alt="user image"
              className="ring-2 ring-gray-200"
              width={100}
              height={100}
            />
          </div>
          <div className="mt-4">
            {state.pair && (
              <div>
                <h2 className="text-lg font-bold">{t("paired_with")}</h2>
                <p>
                  {t("user_id")} {state.pair.userId}
                </p>
                <p>
                  {t("star_sign_id")} {state.pair.starSignId}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <OnlineUsers {...state} />
    </div>
  );
}

// const sendMessage = () => {
//   if (state.room && state.newMessage) {
//     socket.emit("message", { room: state.room, content: state.newMessage });
//     setState((prevState) => ({ ...prevState, newMessage: "" }));
//   }
// };

// {state.room && (
//   <div className="mt-4">
//     <h2 className="text-lg font-bold">
//       {t("room_number")} {state.room}
//     </h2>
//     <div>
//       {state.messages.map((msg, idx) => (
//         <p key={idx}>{msg}</p>
//       ))}
//     </div>
//     <input
//       type="text"
//       value={state.newMessage}
//       onChange={(e) =>
//         setState((prevState) => ({
//           ...prevState,
//           newMessage: e.target.value,
//         }))
//       }
//       className="border border-gray-300 rounded-lg px-2 py-1 mt-2"
//     />
//     <button
//       onClick={sendMessage}
//       className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-2 hover:bg-blue-700 transition duration-300"
//     >
//       {t("send_message")}
//     </button>
//   </div>
// )}
