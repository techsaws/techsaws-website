"use client";

import Link from "next/link";
import Image from "next/image";

import { useModals } from "@/providers/modals-provider";

import { Button } from "@/components/ui/button";

import LogoWhite from "../../../public/favicons/logo.png";
import { User } from "lucide-react";

function Header() {
  const { openConnectModal } = useModals();

  return (
    <header className="absolute w-full z-50">
      <div className="page-layout flex h-30 items-center justify-between">
        <Link href="/" passHref>
          <Image
            src={LogoWhite}
            alt="Logo"
            className="w-auto h-16 hover:scale-105 transition-all ease-in-out duration-500"
          />
        </Link>

        <div className="flex items-center gap-6 translate-x-8">
          <Link
            href={"/"}
            className="font-manrope font-bold text-sm uppercase tracking-wide"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="font-manrope font-bold text-sm uppercase tracking-wide"
          >
            About
          </Link>
          <Link
            href={"/about"}
            className="font-manrope font-bold text-sm uppercase tracking-wide"
          >
            Services
          </Link>
          <Link
            href={"/about"}
            className="font-manrope font-bold text-sm uppercase tracking-wide"
          >
            Solutions
          </Link>
        </div>

        <div className="flex items-center gap-2 max-md:hidden">
          <div className="p-2 rounded-full bg-muted border-2">
            <User strokeWidth={3} className="w-4 h-4" />
          </div>
          <Button
            onClick={openConnectModal}
            className="px-8 rounded-full bg-primary border-4 border-blue-900 hover:bg-primary-hover cursor-pointer py-4.5"
          >
            Lets Connect!
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
