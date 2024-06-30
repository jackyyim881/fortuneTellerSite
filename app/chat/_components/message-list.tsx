"use client";

import { Avatar } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function MessageList({ messages }) {
  const { user } = useUser();
  const createLi = (message) => (
    <li
      key={message.id}
      className="bg-slate-50 group my-2 flex justify-between p-3"
    >
      <div className="flex items-center">
        <Avatar
          src={user?.imageUrl}
          alt="avatar"
          className="w-8 h-8 rounded-full mr-2"
        />

        <p>{message.data.text}</p>
      </div>
    </li>
  );

  return <ul>{messages.map(createLi)}</ul>;
}
