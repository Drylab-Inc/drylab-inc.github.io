"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import { ModeToggle } from "@/components/ui/theme-button";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-background/50 backdrop-blur-xl"
            : "bg-background/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-3xl">
            <p className="text-foreground">drylab</p>
          </Link>

          <div className="flex flex-row space-x-2">
            <a
              className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-foreground bg-foreground px-5 py-2 text-sm text-background transition-colors hover:bg-background hover:text-foreground"
              href="#contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Contact Us</p>
            </a>

            <ModeToggle />
          </div>

          {/* <SignedOut>
            <SignInButton mode="modal">
              <button className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black">
                Sign In
              </button>
            </SignInButton>
          </SignedOut> */}
          {/* <SignedIn>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="Dashboard"
                  labelIcon={<LayoutDashboard className="h-4 w-4" />}
                  href="/"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn> */}
        </div>
      </div>
    </>
  );
}
