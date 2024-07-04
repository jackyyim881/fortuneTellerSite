"use client";
import { useState } from "react";
import Image from "next/image";
import i18n from "@/utils/i18n";
import { State } from "./pairing-items";
import Modal from "@/components/ui/Modal";
export default function OnlineUsers(state: State) {
  const [modalState, setModalState] = useState({ isOpen: false, user: null });

  const handleModalOpen = (user) => {
    // If the same user is clicked again, toggle the modal's open state
    if (modalState.user && modalState.user === user.userId) {
      setModalState({ ...modalState, isOpen: !modalState.isOpen });
    } else {
      // If a different user is clicked, open the modal with the new user's details
      setModalState({ isOpen: true, user });
    }
  };
  return (
    <>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            {i18n.t("online_users")}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {i18n.t("currently_online_users")}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {state.onlineUsers.map((user, idx) => (
              <li key={idx} className="px-4 py-4 sm:px-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-12 w-12 rounded-full ring-2 ring-indigo-500 ring-offset-2"
                      src={user.profileImageUrl || "/user.png"}
                      alt={`${user.userId}'s avatar`}
                      onClick={() => handleModalOpen(user)}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {user.userId}
                    </p>
                    <p className="text-sm text-gray-500">
                      {i18n.t("star_sign")}: {user.starSignId}
                    </p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {i18n.t("online")}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {modalState.isOpen && modalState.user ? (
        <Modal user={modalState.user} />
      ) : null}
    </>
  );
}
