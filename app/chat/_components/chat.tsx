"use client";

import MessageInput from "./message-input";
import MessageList from "./message-list";
import { useReducer } from "react";
import { useChannel } from "ably/react";
import { useUser } from "@clerk/nextjs";

const ADD = "ADD";

const reducer = (prev, event) => {
  switch (event.name) {
    case ADD:
      return [...prev, event];
    default:
      return prev;
  }
};

export default function Chat({ channelName }) {
  const clerk_user = useUser();

  // const user = {
  //   imageUrl: clerkUser.user?.imageUrl,
  // };

  const user = clerk_user?.user;

  const [messages, dispatch] = useReducer(reducer, []);
  const { channel, ably } = useChannel(channelName, (message) => {
    dispatch({ name: ADD, ...message });
  });

  const publishMessage = (text) => {
    if (user) {
      channel.publish({
        name: ADD,
        data: {
          text,
          userId: user.id,
          username: user.username || user.fullName,
          avatarUrl: user.imageUrl,
        },
      });
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-grow overflow-y-auto p-5">
          <MessageList
            messages={messages}
            currentUserId={user ? user.id : ""}
          />
        </div>
        <div className="p-5">
          <MessageInput onSubmit={publishMessage} />
        </div>
      </div>
    </>
  );
}
