// ButtonStateServer.tsx
import ButtonStateClient from "./button-state";
import { saveData } from "../actions"; // This is where we'll define our server action

interface ButtonStateServerProps {
  initialData: any;
}

export default function ButtonStateServer({
  initialData,
}: ButtonStateServerProps) {
  return <ButtonStateClient initialData={initialData} saveAction={saveData} />;
}
