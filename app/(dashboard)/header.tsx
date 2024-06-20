import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function ClerkHeader() {
  return (
    <div className=" flex  justify-center text-xs  items-center">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
