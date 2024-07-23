import { ReactNode } from "react";

export const metadata = {
  title: "星座運勢",
  icons: "",
};
export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="p-4">
      <div className=""></div>
      {children}
    </main>
  );
}
