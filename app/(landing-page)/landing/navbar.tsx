import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between  items-center">
      <div className="flex items-center space-x-4 ml-4">
        <Image src="/images.png" width={50} height={50} alt="image" />
        <h1 className="text-2xl font-bold">風水</h1>
      </div>
      <div className="flex items-center space-x-4 mr-4">
        <Link href="/login">登入</Link>
        <Link href="/register">注冊</Link>
      </div>
    </nav>
  );
}
