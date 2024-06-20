import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" justify-center mt-10 max-w-md mx-auto">
      <SignIn />
    </div>
  );
}
