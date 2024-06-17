import FortuneForm from "@/components/fortune-form";
import { ReactNode } from "react";

export const metadata = {
  title: "星座運勢",
  icons: "",
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen container mx-auto">
      <main className=" p-4">{children}</main>
    </div>
  );
}
