"use client";

import Image from "next/image";
import Ably from "ably";
import { AblyProvider } from "ably/react";
import Status from "./status";

export default function Realtime() {
  const client = new Ably.Realtime({ authUrl: "/api/ably/" });

  return (
    <AblyProvider client={client}>
      <Status />
    </AblyProvider>
  );
}
