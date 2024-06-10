"use client";
import { useEffect } from "react";
import { useToastMessage } from "@/app/hooks/useToastMessage";
import { ToastContainer } from "react-toastify";

export default function ClientToastHandler() {
  const notify = useToastMessage("start");

  useEffect(() => {
    notify();
  }, [notify]);

  return <ToastContainer />;
}
