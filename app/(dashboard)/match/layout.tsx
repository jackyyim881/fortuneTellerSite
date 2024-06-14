import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useToastMessage } from "../../../hooks/useToastMessage";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-4">
      <div className="">{children}</div>
      <ToastContainer />
    </main>
  );
}
