import Header from "./header";

import { Metadata } from "next";
import NavbarSample from "@/components/ui/simple_with_menu_button_on_left";
export const metadata: Metadata = {
  title: "愛情兼容性計算機",
  icons: "calc.jpg",
};

const navigationLinks = [
  { href: "/", name: "首頁", current: true },
  { href: "/stars", name: "星座", current: true },
  { href: "/trend", name: "運勢", current: true },
  { href: "/zodiac", name: "生肖", current: true },
  { href: "/dream", name: "周公解夢", current: true },
  { href: "/psychology-test", name: "心理測試", current: true },
  { href: "/fengshui", name: "風水命理", current: true },
  { href: "/blood-type", name: "血型", current: true },
  { href: "/tarot", name: "塔羅牌", current: true },
  { href: "/naming", name: "起名", current: true },
  { href: "/special", name: "專題", current: true },
  { href: "/more", name: "更多", current: true },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen">
      <NavbarSample navigation={navigationLinks} />
      <main className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500">
        <div className="mx-auto max-w-[1200px] container">{children}</div>
      </main>
    </section>
  );
}
