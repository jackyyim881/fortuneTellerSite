import SearchComponent from "@/components/SearchComponent";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Header() {
  return (
    <header className="p-4 flex border bg-blue  dark:bg-gray-800">
      <div className="">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <SearchComponent />
    </header>
  );
}
