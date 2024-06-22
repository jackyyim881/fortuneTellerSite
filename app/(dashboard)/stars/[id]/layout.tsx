import { ReactNode } from "react";

export const metadata = {
  title: "星座運勢",
};
export default function Layout({ children }: { children: ReactNode }) {
  return <main className="p-4">{children}</main>;
}
