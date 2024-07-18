import { Button } from "@/components/Button";
import { Container } from "./_components/Container";
import { NavLink } from "@/components/NavLink";
import Image from "next/image";
import MobileNavigation from "@/components/MobileNavigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Image
                src="/images.png"
                width={50}
                height={50}
                alt="image"
                className="h-10 w-auto"
              />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#features">功能</NavLink>
              <NavLink href="#testimonials">感言</NavLink>
              <NavLink href="#about">關於</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">登入</NavLink>
            </div>
            <Button href="/register" color="blue">
              <span>
                註冊 <span className="hidden md:inline">免費</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
