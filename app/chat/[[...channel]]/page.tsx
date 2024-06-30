"use client";
import { AblyProvider, ChannelProvider } from "ably/react";
import * as Ably from "ably";

import dynamic from "next/dynamic";
const Chat = dynamic(() => import("../_components/chat"), { ssr: false });

import ChannelList from "../_components/channel-list";
export default function Page({ params }) {
  const client = new Ably.Realtime({ authUrl: "/api/ably" });
  const channelName = `chat:${params.channel}`;
  const channels = [
    { path: "/chat/announcements", label: "# Announcements" },

    { path: "/chat/general", label: "# General" },

    { path: "/chat/random", label: "# Random" },

    { path: "/chat/mods-only", label: "# Mods-only", modOnly: true },
  ];
  return (
    <>
      <AblyProvider client={client}>
        <ChannelProvider channelName={channelName}>
          <div className="grid h-[calc(100vh-72.8px)] grid-cols-4">
            <div className="border-r border-gray-200 p-5">
              <ChannelList channels={channels} />
            </div>

            <div className="col-span-2">
              <Chat channelName={channelName} />
            </div>

            <div className="border-l border-gray-200 p-5"></div>
          </div>
        </ChannelProvider>{" "}
      </AblyProvider>
    </>
  );
}
