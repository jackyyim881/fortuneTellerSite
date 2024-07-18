"use client";

import { Avatar } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { MessageListProps, Message } from "@/types/types";

export default function MessageList({
  messages,
  currentUserId,
}: MessageListProps) {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  function renderMessageItem(message: Message, index) {
    const isCurrentUser = message.data.userId === currentUserId;
    return (
      <li
        key={index}
        className={`flex items-start space-x-2 mb-4 ${
          isCurrentUser ? "justify-end" : "justify-start"
        }`}
      >
        {!isCurrentUser && (
          <Avatar
            src={message.data.avatarUrl}
            alt={`${message.data.username}'s avatar`}
            className="w-8 h-8"
          />
        )}
        <div
          className={`rounded-lg p-3 ${
            isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          {!isCurrentUser && (
            <p className="font-bold text-sm mb-1">{message.data.username}</p>
          )}
          <p>{message.data.text}</p>
        </div>
        {isCurrentUser && (
          <Avatar
            src={message.data.avatarUrl}
            alt="Your avatar"
            className="w-8 h-8"
          />
        )}
      </li>
    );
  }
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">Chat</h2>
        <div className="border-b border-gray-200 mb-4"></div>
        <p className="">
          Hello{" "}
          <span className="text-1xl">
            {isSignedIn ? user.fullName : "stranger"}
          </span>
        </p>
      </div>
      <ul>{messages.map(renderMessageItem)}</ul>
    </>
  );
}
