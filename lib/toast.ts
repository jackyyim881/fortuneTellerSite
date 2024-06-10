import { toast } from "react-toastify";

type ProcessState = "start" | "match" | "end" | "result";

const processMessages: Record<ProcessState, string> = {
  start: "Process has started!",
  match: "We found a match!",
  end: "Process has ended!",
  result: "Here are the results!",
};

export function startToast(process: ProcessState) {
  const notify = () => toast(processMessages[process]);

  return notify;
}
