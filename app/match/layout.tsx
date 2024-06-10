import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useToastMessage } from "../hooks/useToastMessage";

export default function Layout({ children }: { children: React.ReactNode }) {
  // const process = useToastMessage("start");
  // const notify = () => {
  //   return toast("Hello coders it was easy!");
  // };

  return (
    <main className="p-4">
      <div className=" border  rounded-md shadow-md">{children}</div>
      <ToastContainer />
    </main>
  );
}
