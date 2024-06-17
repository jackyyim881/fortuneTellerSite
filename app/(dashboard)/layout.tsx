import { ClerkProvider } from "@clerk/nextjs";
import Header from "./header";
import MainNav from "@/components/main-nav";
import { Suspense } from "react";
import Loading from "../loading";
import { Inter } from "next/font/google";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "愛情兼容性計算機",
  icons: "calc.jpg",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      <MainNav />
      <main className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500">
        {children}
      </main>
    </section>
  );
}
