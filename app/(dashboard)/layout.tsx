import { Metadata } from "next";
import MainNavigation from "./main-navbar";
export const metadata: Metadata = {
  title: "愛情兼容性計算機",
  icons: "calc.jpg",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500">
      <MainNavigation />
      <div className="mx-auto max-w-[1200px] container">{children}</div>
    </main>
  );
}
