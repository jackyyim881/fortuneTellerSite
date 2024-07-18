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

export type State = {
  pair: User | null;
  room: string | null;
  messages: string[];
  newMessage: string;
  onlineUsers: User[];
};

const initialState: State = {
  pair: null,
  room: null,
  messages: [],
  newMessage: "",
  onlineUsers: [],
};

export default function PairComponent({ starSign }: { starSign: string }) {
  const { user, isLoaded } = useUser();

  const { t } = useTranslation();

  const [state, setState] = useState<State>(initialState);
  useEffect(() => {
    if (!isLoaded) return;

    const currentUser = {
      userId: user?.fullName || user?.username || "",
      starSignId: starSign,
      profileImageUrl: user?.imageUrl || "",
    };

    socket.emit("user_online", currentUser);

    const socketHandlers = {
      update_user_list: (onlineUsers: User[]) =>
        setState((prev) => ({ ...prev, onlineUsers })),
      pair_found: (pairedUser: User & { room: string }) =>
        setState((prev) => ({
          ...prev,
          pair: pairedUser,
          room: pairedUser.room,
        })),
      pair_connected: ({
        room,
        pairedUser,
      }: {
        room: string;
        pairedUser: User;
      }) => console.log(`Connected to room: ${room} with user:`, pairedUser),
      message: (content: string) =>
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, content],
        })),
    };

    Object.entries(socketHandlers).forEach(([event, handler]) => {
      socket.on(event, handler);
    });

    return () => {
      Object.keys(socketHandlers).forEach((event) => {
        socket.off(event);
      });
    };
  }, [isLoaded, starSign, user]);

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {state.pair ? t("paired_with") : t("finding_pair")}
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {t("your_profile")}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={user?.imageUrl || ""}
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user?.fullName || user?.username}
                      </div>
                      <div className="text-sm text-gray-500">
                        {t("star_sign_id")} {starSign}
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
              {state.pair && (
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    {t("paired_user")}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={state.pair.profileImageUrl}
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {state.pair.userId}
                        </div>
                        <div className="text-sm text-gray-500">
                          {t("star_sign_id")} {state.pair.starSignId}
                        </div>
                      </div>
                    </div>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
        <div className="mt-6">
          <OnlineUsers {...state} />
        </div>
      </div>
    </div>
  );
}
