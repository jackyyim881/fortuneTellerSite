import FortuneForm from "@/components/fortune/FortuneForm";
import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen container mx-auto">
      <main className=" p-4">{children}</main>
      <FortuneForm />
    </div>
  );
}
