"use client";
import { createUserWithStarSign } from "../action";
import { useState } from "react";
export type StarSign = {
  id: number;
  name: string;
};

type username = {
  fullName: string;
  username: string;
};
export default function FormList({
  username: initialUsername,
  email: initialEmail,
  initialStarSignId = 1,
  starSigns,
}: {
  username: string;
  email: string;
  initialStarSignId?: number;
  starSigns: StarSign[];
}) {
  const [username, setUsername] = useState(initialUsername);
  const [email, setEmail] = useState(initialEmail);
  const [starSignId, setStarSignId] = useState(initialStarSignId);
  // Handler for username change
  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handleStarSignChange = (event: any) => {
    setStarSignId(event.target.value);
  };

  return (
    <>
      <span className=" absolute mt-5 text-xl  rounded-md font-bold      text-gray-700">
        請先登錄以查看配對
      </span>
      <div className="">
        <form
          action={createUserWithStarSign}
          className="bg-white p-8  mt-24 rounded-lg  shadow-lg w-full max-w-md mx-auto leading-7"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            創建新用戶
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              名字
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              電子郵件
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="starSignId"
              className="block text-gray-700 font-semibold mb-2"
            >
              星座
            </label>
            <select
              id="starSignId"
              name="starSignId"
              value={starSignId}
              onChange={handleStarSignChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {starSigns.map((sign: StarSign) => (
                <option key={sign.id} value={sign.id}>
                  {sign.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 mt-5 text-white font-semibold py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            創建
          </button>
        </form>
      </div>
    </>
  );
}
