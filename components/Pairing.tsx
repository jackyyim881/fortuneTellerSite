// components/Pairing.tsx
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Image from "next/image";
interface User {
  userId: string;
  starSignId: number;
}

interface Message {
  room: string;
  content: string;
}

const initialState = {
  pair: null as User | null,
  room: null as string | null,
  messages: [] as string[],
  newMessage: "",
  user: { userId: "1", starSignId: 1 } as User, // Example user
};

const socket: Socket = io("http://localhost:3001");

export default function Pairing() {
  const [state, setState] = useState(initialState);
  const user = useUser();
  console.log(user?.user?.imageUrl);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to server");
    });

    socket.on("pair_found", (pairedUser: User & { room: string }) => {
      setState((prevState) => ({
        ...prevState,
        pair: pairedUser,
        room: pairedUser.room,
      }));
    });

    socket.on("message", (content: string) => {
      setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, content],
      }));
    });

    return () => {
      socket.off("connect");
      socket.off("pair_found");
      socket.off("message");
    };
  }, []);

  const findPair = () => {
    socket.emit("find_pair", state.user);
  };

  const sendMessage = () => {
    if (state.room && state.newMessage) {
      socket.emit("message", { room: state.room, content: state.newMessage });
      setState((prevState) => ({ ...prevState, newMessage: "" }));
    }
  };

  return (
    <div className="">
      <button
        onClick={findPair}
        className="
            bg-blue-600 mt-5 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300
        "
      >
        Find Pair
      </button>
      <div className="flex justify-center items-center">
        <div className="">
          {state.pair === null && (
            <p className="text-center text-gray-100 text-lg ">
              Waiting for a pair...
            </p>
          )}
          {user.isLoaded && (
            <p className="text-center text-gray-10 text-lg">
              User ID: {state.user.userId}, Star Sign ID:{" "}
              {state.user.starSignId}
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
                <h2 className="text-lg font-bold">Paired with:</h2>
                <p>User ID: {state.pair.userId}</p>
                <p>Star Sign ID: {state.pair.starSignId}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {state.room && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Room: {state.room}</h2>
          <div>
            <h3 className="text-lg font-bold">Messages:</h3>
            {state.messages.map((msg, idx) => (
              <p key={idx}>{msg}</p>
            ))}
          </div>
          <input
            type="text"
            value={state.newMessage}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                newMessage: e.target.value,
              }))
            }
            className="border border-gray-300 rounded-lg px-2 py-1 mt-2"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-2 hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </div>
      )}
    </div>
  );
}
