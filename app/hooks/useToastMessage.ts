import { startToast } from "@/lib/toast";
type ProcessState = "start" | "match" | "end" | "result";

export function useToastMessage(processState: ProcessState) {
  return startToast(processState);
}
