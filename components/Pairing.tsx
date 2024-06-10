// components/Pairing.tsx
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

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

const socket: Socket = io("http://localhost:3001"); // Adjust the URL if needed

export default function Pairing() {
  const [state, setState] = useState(initialState);
  const user = useUser();
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
    <div>
      <button onClick={findPair}>Find Pair</button>
      {state.pair === null && <p>Waiting for a pair...</p>}
      {user.isLoaded && (
        <p>
          User ID: {state.user.userId}, Star Sign ID: {state.user.starSignId}
        </p>
      )}
      {state.pair && (
        <div>
          <h2>Paired with:</h2>
          <p>User ID: {state.pair.userId}</p>
          <p>Star Sign ID: {state.pair.starSignId}</p>
        </div>
      )}
      {state.room && (
        <div>
          <h2>Room: {state.room}</h2>
          <div>
            <h3>Messages:</h3>
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
          />
          <button onClick={sendMessage}>Send Message</button>
        </div>
      )}
    </div>
  );
}
