import clsx from "clsx";
import { Inter, Lexend } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={clsx(
        "h-full scroll-smooth bg-white antialiased",
        inter.variable,
        lexend.variable
      )}
    >
      <div className="">{children}</div>
    </main>
  );
}
