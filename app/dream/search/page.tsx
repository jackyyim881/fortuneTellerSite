import { useSearchParams } from "next/navigation";

export default function Page() {
  const search = useSearchParams();
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}
