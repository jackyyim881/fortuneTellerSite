import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import MainNav from "@/components/main-nav";
import Header from "./(dashboard)/header";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <main className="">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
