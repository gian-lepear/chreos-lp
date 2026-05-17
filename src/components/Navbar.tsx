import type { ReactNode } from "react";
import { Link } from "wouter";

interface NavbarProps {
  children?: ReactNode;
}

export function Navbar({ children }: NavbarProps) {
  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50"
      style={{
        background: "rgba(15,28,44,0.92)",
        backdropFilter: "blur(16px)",
        willChange: "transform",
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-10">
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
          style={{ fontFamily: "'Newsreader Variable', serif" }}
          className="cursor-pointer text-4xl font-semibold tracking-tight text-[#fcf9f3] md:text-5xl"
        >
          Chreos
        </Link>
        {children}
      </div>
    </nav>
  );
}
